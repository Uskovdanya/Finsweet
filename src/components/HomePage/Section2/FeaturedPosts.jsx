import { useContext, PostContext, useState } from "react";
import Button from "../../Button";
import H2 from "../../H2";
import { usePosts } from "../../contexts/PostContext";
import Paragraph from "../../Paragraph";
import Spinner from "../../Spinner";
import { useNavigate } from "react-router-dom";

function FeaturedPosts() {
  const { posts, isLoading, currentPost } = usePosts();

  const navigate = useNavigate();

  //function handleFeaturedPostClick(e) {
  //  e.preventDefault();
  //  navigate(`/post/${posts[2].id}`); // перебрасываем пользователя на начальную страницу
  //}

  if (isLoading) return <Spinner />;

  return (
    <div className="">
      <H2 padding="mx-3" >
        Featured Post
      </H2>
      <div className=" pt-8">
        <div className=" w-full border-[1px] border-solid p-8 ">
          <img
            src={posts[2].img}
            alt={posts[2].word}
            className="mb-8 h-[352px]  w-full object-cover"
          />
          <p className="fotr-Inter mb-4 text-sm font-medium text-textGrayColor">
            By&nbsp;
            <a
              href=""
              className="cursor-pointer text-linkColor"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/author/${posts[2].author}`);
              }}
            >
              {posts[2].author}
            </a>
            &nbsp;
            {new Date(Date.parse(posts[2].date)).toDateString()}
          </p>
          <p className="mb-4 w-full font-Sen text-[28px] font-bold leading-10 -tracking-[1px] text-textBlackColor">
            {posts[1].title}
          </p>
          <Paragraph padding="pb-8">{posts[2].oneParagraph}</Paragraph>
          <Button
            color="bg-accentColor"
            onClick={(e) => {
              e.preventDefault();
              navigate(`/post/${posts[2].id}`);
            }}
          >
            Read More &gt;
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPosts;
