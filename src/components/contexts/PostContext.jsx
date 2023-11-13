import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { base, faker } from "@faker-js/faker";

//Многие недооценивают возможности и кейсы комманды copy(). Недавно был случай когда потребовалось часто копировать из консоли огромный json объект без выделения. Рецепт оказалася прост.
//1) Правый клик по объекту — нажимаем Strore as global variable (выдаст переменную temp1, в которой сохранился сам объект)
//2) copy(temp1) и вуаля готово

const BASE_URL = "http://localhost:8000";

// Create new context
const PostContext = createContext();

const initialState = {
  posts: [],
  isLoading: false,
  currentPost: {},
  error: "",
  filterAuthor: {},
};

//function createRandomPost(categorySearch) {
//  return {
//    id: faker.string.uuid(),
//    img: faker.image.urlLoremFlickr({
//      category: categorySearch,
//      height: 1080,
//      width: 1920,
//    }),
//    avatar: faker.image.avatar(),
//    title: faker.company.catchPhrase(),
//    author: faker.person.fullName(),
//    date: faker.date.recent(),
//    sentence: faker.lorem.sentence(),
//    oneParagraph: faker.lorem.paragraphs(1),
//    paragraph: faker.lorem.paragraphs(8),
//    alt: faker.lorem.word(),
//    place: `${faker.location.city()}, ${faker.location.country()}`,
//    category: categorySearch,
//    mail: faker.internet.email(),
//    facebook: "www.facebook.com",
//    twitter: "www.twitter.com",
//    instagram: "www.instagram.com",
//    linkedln: "www.linkedln.com",
//    svg: `${categorySearch}.svg`,
//  };
//}

//const business = Array.from({ length: 15 }, () => createRandomPost("business"));
//const startup = Array.from({ length: 15 }, () => createRandomPost("startup"));
//const economy = Array.from({ length: 15 }, () => createRandomPost("economy"));
//const technology = Array.from({ length: 15 }, () =>
//  createRandomPost("technology"),
//);

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true, status: "loading" };

    case "posts/loaded":
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
        status: "active",
      };
    case "post/loaded":
      return {
        ...state,
        isLoading: false,
        currentPost: action.payload,
        status: "active",
      };
    case "filterByAuthor":
      return {
        ...state,
        isLoading: false,
        filterAuthor: action.payload,
        status: "active/author",
      };

    case "rejected":
      return { ...state, isLoading: false, error: action.payload }; // error чтобы при ошибке isLoading  перевелось в false

    default:
      throw new Error("Unknow action type");
  }
}

function PostProvider({ children }) {
  const [
    { posts, isLoading, currentPost, error, status, filterAuthor },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(function () {
    async function fetchPosts() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`${BASE_URL}/posts`);

        const data = await res.json();

        dispatch({ type: "posts/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was on error loading posts...",
        });
      }
    }
    fetchPosts();
  }, []);

  async function getPost(id) {
    if (id === currentPost.id) return;
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${BASE_URL}/posts/${id}`);
      const data = await res.json();
      dispatch({ type: "post/loaded", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was on error loading post...",
      });
    }
  }

  async function handleAuthorFilter(author) {
    dispatch({ type: "loading" });
    try {
      const filterAuthor = await posts.filter((post) =>
        post.author
          .toLowerCase()
          /*   .replace(/ /gi, "_")*/
          .includes(author.toLowerCase()),
      );
      dispatch({ type: "filterByAuthor", payload: filterAuthor });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was on error loading author posts list...",
      });
    }
  }

  return (
    <PostContext.Provider
      value={{
        posts,
        error,
        currentPost,
        isLoading,
        status,
        getPost,
        authorFilter: handleAuthorFilter,
        filterAuthor,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}
export { PostProvider, usePosts };
