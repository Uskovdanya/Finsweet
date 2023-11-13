import { usePosts } from "../../contexts/PostContext";
import CategoryItem from "./CategoryItem";

const categoryListObj = [
  {
    svg: "./business.svg",
    title: "Busines",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    alt: "Busines",
  },
  {
    svg: "./startup.svg",
    title: "StartUp",
    text: "Ut excepteur do officia nisi eu.",
    alt: "StartUp",
  },
  {
    svg: "./economy.svg",
    title: "Economy",
    text: "Laborum proident excepteur commodo sint.",
    alt: "Economy",
  },
  {
    svg: "./technology.svg",
    title: "Technology",
    text: "Nostrud fugiat Lorem Lorem qui magna ipsum dolore laborum voluptate esse.",
    alt: "Technology",
  },
];

function CategoryList({ sectionCategory }) {
  const { posts } = usePosts();

  return (
    <ul
      className="mt-10 flex flex-wrap items-center justify-center gap-8 xl:mt-12"
      ref={sectionCategory}
    >
      {categoryListObj.map((item) => (
        <CategoryItem item={item} key={item.title} />
      ))}
    </ul>
  );
}

export default CategoryList;
