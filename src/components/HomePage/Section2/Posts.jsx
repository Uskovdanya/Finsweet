import Spinner from "../../Spinner";
import { usePosts } from "../../contexts/PostContext";
import FeaturedPosts from "./FeaturedPosts";
import PostsList from "./PostsList";

function Posts() {
  const { posts, isLoading, status } = usePosts();
  if (isLoading) return <Spinner />; // спинер обязательно после useEffect иначе нарушится правило что компоненты должны рендерится всегда по порядку
  return (
    <section className="container grid  place-content-center gap-8 px-4 pt-[88px] lg:grid-cols-homePageFeaturedPosts lg:pt-[128px]">
      <FeaturedPosts />
      <PostsList />
    </section>
  );
}

export default Posts;
