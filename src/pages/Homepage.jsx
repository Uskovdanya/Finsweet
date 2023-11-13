import { useEffect, useRef } from "react";
import Hero from "../components/HomePage/Hero";
import Posts from "../components/HomePage/Section2/Posts";
import AboutUsMission from "../components/HomePage/Section3/AboutUsMission";
import ChooseCategory from "../components/HomePage/Section4/ChooseCategory";
import WhyWeStart from "../components/HomePage/Section5/WhyWeStart";
import NavMenu from "../components/NavMenu/NavMenu";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import ListOfAuthors from "../components/HomePage/Section6/ListOfAuthors";
import WeAre from "../components/HomePage/Section7/WeAre";
import Testimonials from "../components/HomePage/Section8/Testimonials";
import JoinOurTeam from "../components/HomePage/Section9/JoinOurTeam";
import Footer from "../components/footer/Footer";
import { usePosts } from "../components/contexts/PostContext";
import Spinner from "../components/Spinner";

function Homepage() {
  const { posts, isLoading, status } = usePosts();

  useEffect(() => {
    window.onpageshow = function (event) {
      if (event.persisted) {
        window.location.reload();
      }
    };
  }, []);

  if (isLoading) return <Spinner />; // спинер обязательно после useEffect иначе нарушится правило что компоненты должны рендерится всегда по порядку

  return (
    <>
      <header>
        <NavMenu />
      </header>

      <main>
        {status === "active" && <Hero />}
        {status === "active/author" && <Hero />}
        {/*{status === "active/post" && <Hero />}*/}
        {status === "active" && <Posts />}
        {status === "active/author" && <Posts />}
        <AboutUsMission />
        <ChooseCategory />
        <WhyWeStart />
        <ListOfAuthors />
        <WeAre />
        <Testimonials />
        <JoinOurTeam />
        <Footer />
      </main>
    </>
  );
}

export default Homepage;
