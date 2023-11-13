import { useEffect, useLayoutEffect } from "react";
import NavMenu from "../components/NavMenu/NavMenu";
import { usePosts } from "../components/contexts/PostContext";
import Footer from "../components/footer/Footer";
import AuthorHero from "../components/AuthorPage/AuthorHero";
import MyPosts from "../components/AuthorPage/MyPosts";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

function AuthorPage() {
  const { author } = useParams();
  const { getPost, currentPost, isLoading, authorFilter, status } = usePosts();

  //useEffect(() => {
  //  authorFilter(author);
  //}, [author]);

  useLayoutEffect(
    // useEffect заменил
    function () {
      authorFilter(author);
    },
    [author],
  );

  if (isLoading) return <Spinner />; // спинер обязательно после useEffect иначе нарушится правило что компоненты должны рендерится всегда по порядку

  return (
    <>
      <NavMenu />
      {/*<AuthorHero />*/}
      {status === "active/author" && <AuthorHero />}
      {/*<MyPosts />*/}
      {status === "active/author" && <MyPosts />}
      <Footer />
    </>
  );
}

export default AuthorPage;
