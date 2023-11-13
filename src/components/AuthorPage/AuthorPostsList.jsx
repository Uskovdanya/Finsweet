import Spinner from "../Spinner";
import { usePosts } from "../contexts/PostContext";
import AuthorPostItem from "./AuthorPostItem";

function AuthorPostsList() {
  const { getPost, currentPost, isLoading, filterAuthor } = usePosts();
  if (isLoading) return <Spinner />; // спинер обязательно после useEffect иначе нарушится правило что компоненты должны рендерится всегда по порядку
  return (
    <ul className="">
      {filterAuthor.map((post) => (
        <AuthorPostItem post={post} key={post.id} />
      ))}
    </ul>
  );
}

export default AuthorPostsList;
