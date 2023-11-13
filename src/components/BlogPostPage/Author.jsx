import { usePosts } from "../contexts/PostContext";

function Author() {
  const { getPost, currentPost, isLoading } = usePosts();

  const { avatar, author, date } = currentPost;

  return (
    <div className="flex w-[300px] items-center justify-center gap-4 text-center xl:text-start">
      <img src={avatar} alt="" className="h-12 w-12 gap-4 rounded-[48px]" />
      <div>
        <p className="font-Sen text-[28px] font-bold leading-10 -tracking-[1px] text-textBlackColor">
          {author}
        </p>
        <p className="font-Inter text-base font-normal leading-7 text-borderGray">
          {new Date(Date.parse(date)).toDateString()}
        </p>
      </div>
    </div>
  );
}

export default Author;
