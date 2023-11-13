import { useEffect, useState } from "react";
import { usePosts } from "../../contexts/PostContext";
import { useNavigate } from "react-router-dom";

function PostsItem({ item }) {
  const navigate = useNavigate();

  return (
    <div className=" pb-4 pl-4 pr-4 pt-7 hover:bg-postsHover lg:pr-16 xl:pb-[25px] xl:pl-8 xl:pr-[116px] xl:pt-8">
      <div className="fotr-Inter mb-2 text-sm font-medium text-textGrayColor ">
        By&nbsp;
        <div
          className="cursor-pointer text-linkColor"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/author/${item.author}`);
          }}
        >
          {item.author}
        </div>
        &nbsp;
        {new Date(Date.parse(item.date)).toDateString()}
      </div>
      <p
        className="w-full cursor-pointer font-Sen text-[24px] font-bold  leading-8 text-textBlackColor "
        onClick={(e) => {
          e.preventDefault();
          navigate(`/post/${item.id}`);
        }}
      >
        {item.title}
      </p>
    </div>
  );
}

export default PostsItem;
