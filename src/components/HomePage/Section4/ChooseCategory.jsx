import { useLayoutEffect, useRef } from "react";
import H2 from "../../H2";
import CategoryList from "./CategoryList";
import gsap from "gsap";

function ChooseCategory() {
  const sectionCategory = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const categorys = gsap.utils.toArray(".categorys");
      categorys.forEach((cat) => {
        gsap.from(cat, {
          scale: 0,
          transformOrigin: "top center", // от топа к ценру
          stagger: { each: 0.5 }, // идут каскадом друг за другом
          scrollTrigger: {
            trigger: cat,
            markers: true,
            start: "bottom bottom", // начинается на -30% то есть чуть выше
            end: "top 20%", // проскроллили 300px и анимация завершается
            scrub: 1, // чтобы плавно уезжало помере скрола
          },
        });
      });
    }, sectionCategory);
    return () => ctx.revert();
  }, []);
  return (
    <section className="container px-4 pb-[58px] pt-[58px] sm:px-0 md:pb-[80px] md:pt-[80px] xl:pb-[128px] xl:pt-[128px]">
      <H2>Choose A Catagory</H2>
      <CategoryList sectionCategory={sectionCategory} />
    </section>
  );
}

export default ChooseCategory;
