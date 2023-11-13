import { useNavigate, useParams } from "react-router-dom";
import H2 from "../H2";
import Paragraph from "../Paragraph";
import { usePosts } from "../contexts/PostContext";
import Author from "./Author";
import BlogTitle from "./BlogTitle";
import PostCategory from "./PostCategory";
import { useLayoutEffect } from "react";
import Button from "../Button";

function BlogContent() {
  const { currentPost } = usePosts();
  const navigate = useNavigate();

  const { sentence, paragraph, oneParagraph, img } = currentPost;
  return (
    <section className="container flex flex-col items-center justify-center px-20 pb-[128px] pt-[133px]">
      <div className="px-[256px] ">
        <Author />
        <BlogTitle />
        <PostCategory />
      </div>
      <img src={img} alt="" className="w-full" />
      <div className="mt-16 px-[219px]">
        <H2>{sentence}</H2>
        <Paragraph padding="pt-4 pb-12">{paragraph}</Paragraph>
        <H2>{oneParagraph}</H2>
      </div>
      <Button
        color="bg-accentColor mt-8"
        onClick={(e) => {
          e.preventDefault();
          navigate(-1); //можно поставить '..'
        }}
      >
        Back
      </Button>
    </section>
  );
}

export default BlogContent;
