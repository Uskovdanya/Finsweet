import { useNavigate } from "react-router-dom";
import H2 from "../H2";
import Paragraph from "../Paragraph";

function AuthorPostItem({ post }) {
  const navigate = useNavigate();
  return (
    <li
      className="flex cursor-pointer gap-8 pb-16"
      onClick={(e) => {
        e.preventDefault();
        navigate(`/post/${post.id}`);
      }}
    >
      <img src={post.img} alt={post.alt} className="h-[320px] w-[412px]" />
      <div className="w- flex basis-[45%] flex-col justify-center">
        <p className="mb-5  font-Inter text-base font-semibold uppercase leading-5 tracking-[3px] text-linkColor">
          {post.category}
        </p>
        <H2 padding="lg:mb-4 ">{post.title}</H2>
        <Paragraph>{post.oneParagraph}</Paragraph>
      </div>
    </li>
  );
}

export default AuthorPostItem;
