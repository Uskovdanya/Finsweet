import AllPosts from "../components/BlogPage/AllPosts";
import HeroBlog from "../components/BlogPage/HeroBlog";
import Container from "../components/Container";
import ChooseCategory from "../components/HomePage/Section4/ChooseCategory";
import JoinOurTeam from "../components/HomePage/Section9/JoinOurTeam";
import NavMenu from "../components/NavMenu/NavMenu";
import Footer from "../components/footer/Footer";

function Blog() {
  return (
    <>
      <NavMenu />
      <HeroBlog />

      <AllPosts />
      <Container>
        <ChooseCategory />
      </Container>
      <JoinOurTeam />

      <Footer />
    </>
  );
}

export default Blog;
