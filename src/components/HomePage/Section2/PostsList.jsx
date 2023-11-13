import { useNavigate } from "react-router-dom";
import H2 from "../../H2";
import { usePosts } from "../../contexts/PostContext";
import PostsItem from "./PostsItem";
import { useEffect, useState } from "react";

function PostsList() {
  const { posts } = usePosts();
  const navigate = useNavigate();
  //const [selectedId, setSelectedId] = useState(null);

  function handleClick(e) {
    e.preventDefault();
    navigate("blog"); // перебрасываем пользователя на начальную страницу
  }

  return (
    <>
      <div className="flex flex-col ">
        <div className="mb-4 flex items-center justify-between px-3">
          <H2 >All Posts</H2>
          <button
            className="text-normal font-Inter text-base leading-7 text-linkColor"
            onClick={handleClick}
          >
            View All
          </button>
        </div>

        {posts.slice(2, 6).map((item, index) => (
          <PostsItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </>
  );
}

export default PostsList;
