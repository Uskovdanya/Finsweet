import { usePosts } from "../contexts/PostContext";

function PostCategory() {
  const { getPost, currentPost } = usePosts();

  const { svg, category } = currentPost;
  return (
    <div className="mb-16 flex  items-center gap-2">
      <img src="./../business.svg" alt="" />
      <p className="font-Sen text-2xl font-bold leading-8 ">{category}</p>
    </div>
  );
}

export default PostCategory;
