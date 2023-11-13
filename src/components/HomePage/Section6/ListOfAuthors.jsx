import H2 from "../../H2";
import SwiperAuthors from "./SwiperAuthors";

function ListOfAuthors() {
  return (
    <section className="container pt-[58px]   md:pt-[80px]  xl:pt-[128px]">
      <H2 center="text-center">List of Authors</H2>
      <SwiperAuthors />
    </section>
  );
}

export default ListOfAuthors;
