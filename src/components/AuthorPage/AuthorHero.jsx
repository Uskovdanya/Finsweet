import BlogTitle from "../BlogPostPage/BlogTitle";
import Paragraph from "../Paragraph";
import Shape from "../Shape";
import Social from "../Social";
import { usePosts } from "../contexts/PostContext";
import AuthorTitle from "./AuthorTitle";

function AuthorHero() {
  const { getPost, currentPost, isLoading, filterAuthor } = usePosts();
  if (isLoading) return <Spinner />; // спинер обязательно после useEffect иначе нарушится правило что компоненты должны рендерится всегда по порядку
  return (
    <section className="bg-lavenderColor">
      <div className="container flex flex-col justify-start  pt-[128px]">
        <div className="flex items-center justify-center gap-8 pb-[104px] pr-[72px]">
          <img
            src={filterAuthor[0].avatar}
            alt=""
            className="h-[294px] w-[251px] "
          />

          <div className=" ">
            <AuthorTitle margin="lg:mb-8 ">{filterAuthor[0].title}</AuthorTitle>
            <Paragraph padding="pb-6 pt-2 pr-[21px]">
              {filterAuthor[0].oneParagraph}
            </Paragraph>
            <Social color="fill-NavBarColor" gap="gap-4" />
          </div>
        </div>
        <Shape
          form="justify-start"
          firstWidth="w-[74%]"
          secondWidth="w-[26%]"
        />
      </div>
    </section>
  );
}

export default AuthorHero;
