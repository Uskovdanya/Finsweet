import { useParams } from "react-router-dom";
import NavMenu from "../components/NavMenu/NavMenu";
import Footer from "../components/footer/Footer";
import BlogContent from "../components/BlogPostPage/BlogContent";
import JoinOurTeam from "../components/HomePage/Section9/JoinOurTeam";
import { usePosts } from "../components/contexts/PostContext";
import { useLayoutEffect } from "react";
import Spinner from "../components/Spinner";


function BlogPostPage() {
  const { id } = useParams();
  const { getPost, currentPost, isLoading } = usePosts();

  useLayoutEffect(
    // useEffect заменил
    function () {
      getPost(id);
    },
    [id],
  );

  if (isLoading) return <Spinner />; // спинер обязательно после useEffect иначе нарушится правило что компоненты должны рендерится всегда по порядку

  return (
    <>
      <header>
        <NavMenu />
      </header>
      <main>
        <BlogContent />
        <JoinOurTeam />
        
        <Footer />
      </main>
    </>
  );
}

export default BlogPostPage;
