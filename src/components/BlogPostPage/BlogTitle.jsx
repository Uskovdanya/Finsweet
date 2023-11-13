import { usePosts } from "../contexts/PostContext";

function BlogTitle() {
  const { currentPost } = usePosts();

  const { title } = currentPost;
  return (
    <h1 className=" mb-4 mt-6 text-center font-Sen text-[36px] font-bold tracking-[0px]  sm:text-[42px] lg:mb-[38px] lg:text-start lg:text-[48px] lg:leading-[64px] lg:-tracking-[2px]">
      {title}
    </h1>
  );
}

export default BlogTitle;
