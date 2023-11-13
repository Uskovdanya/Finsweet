import Spinner from "../Spinner";
import { usePosts } from "../contexts/PostContext";
import AuthorPostsList from "./AuthorPostsList";
import AuthorTitle from "./AuthorTitle";

function MyPosts() {
  const { getPost, currentPost, isLoading, filterAuthor } = usePosts();
  if (isLoading) return <Spinner />; // спинер обязательно после useEffect иначе нарушится правило что компоненты должны рендерится всегда по порядку
  return (
    <section className="container py-[128px]">
      <AuthorTitle margin="lg:mb-16">My Posts</AuthorTitle>
      <AuthorPostsList />
    </section>
  );
}

export default MyPosts;
