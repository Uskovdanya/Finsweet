import Button from "../../Button";
import H2 from "../../H2";
import Paragraph from "../../Paragraph";

function JoinOurTeam() {
  return (
    <section className="container mx-auto flex justify-center py-[58px] md:py-[80px]  xl:py-[128px]">
      <div className="flex  w-[414px] flex-col items-center justify-center">
        <H2 center="text-center">Join our team to be a part of our story</H2>
        <Paragraph center="text-center" padding="pt-4 pb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </Paragraph>
        <Button color="bg-accentColor">Join Now</Button>
      </div>
    </section>
  );
}

export default JoinOurTeam;
