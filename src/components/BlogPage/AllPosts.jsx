import H1 from "../H1";
import H2 from "../H2";
import Divider from "./Divider";

function AllPosts() {
  return (
    <section className="container pb-[128px] pt-16">
      <H2 fontSize="text-[48px]" padding="pb-8">
        All posts
      </H2>
      <Divider />
    </section>
  );
}

export default AllPosts;
