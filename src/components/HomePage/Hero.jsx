import { useLayoutEffect, useRef } from "react";
import Button from "../Button";
import { gsap } from "gsap";
import H1 from "../H1";
import { usePosts } from "../contexts/PostContext";
import Spinner from "../Spinner";
import { useNavigate } from "react-router-dom";

function Hero() {
  const { posts, isLoading, authorFilter } = usePosts();
  const navigate = useNavigate();

  const heroRef = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const authorText = useRef(null);
  const h1Text = useRef(null);
  const buttonGSAP = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: {
            duration: 0.8,
            stagger: { each: 0.2 },
            ease: "power4.out",
          },
        })
        .fromTo(".text", { autoAlpha: 0, y: 100 }, { autoAlpha: 1, y: 0 })

        .fromTo(
          buttonGSAP.current,
          { autoAlpha: 0, x: 100 },
          { autoAlpha: 1, x: 0 },
        );
    }, heroRef);
    return () => ctx.revert();
  }, []);
  // блок улетает влево
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".scrollHeroGSAP", {
        yPercent: 80,
        scale: 0.5,
        xPercent: -80,
        opacity: 0,
        scrollTrigger: {
          trigger: heroRef.current,
          markers: true,
          start: "top top",
          scrub: true, // чтобы плавно уезжало помере скрола
        },
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);
  // backgroind image скролл
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".scrollHeaderGSAP", {
        scale: 1.2,
        scrollTrigger: {
          trigger: heroRef.current,
          markers: true,
          start: "top top",
          scrub: true, // чтобы плавно уезжало помере скрола
        },
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  if (isLoading) return <Spinner />; // спинер обязательно после useEffect иначе нарушится правило что компоненты должны рендерится всегда по порядку

  return (
    <section
      className="headerTop relative  h-screen pb-[192px] pt-[100px] lg:pt-[128px]"
      ref={heroRef}
    >
      <img
        src={posts[0].img}
        alt={posts[0].alt}
        className="scrollHeaderGSAP absolute bottom-0 left-0 right-0 top-0  h-screen w-screen overflow-hidden object-cover"
      />
      <div className="scrollHeaderGSAP absolute bottom-0 left-0 right-0 top-0 h-screen w-full bg-gradientBg bg-cover bg-no-repeat"></div>
      <div className="scrollHeroGSAP container z-20">
        <div className="z-20  flex flex-col items-center lg:items-start">
          <p
            className="hiddenGSAP text mb-4 font-Inter text-base font-medium uppercase leading-5 tracking-[3px] text-textColor lg:mb-8 "
            ref={text1}
          >
            Posted on <span className="font-black">{posts[0].category}</span>
          </p>
          <H1 h1Text={h1Text} hiddenGSAP="hiddenGSAP" color="text-textColor">
            {posts[0].title}
          </H1>

          <p
            className="hiddenGSAP text mb-3 font-Inter text-base font-normal leading-7 text-textColor lg:mb-4"
            ref={authorText}
          >
            By
            <span
              className="cursor-pointer text-accentColor"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/author/${posts[0].author}` /*.replace(/ /gi, "_")*/);
              }}
            >
              {" "}
              {posts[0].author}
            </span>{" "}
            | {new Date(Date.parse(posts[0].date)).toDateString()}
          </p>
          <p
            className="hiddenGSAP text mb-4 text-center text-base  font-normal leading-7 text-textColor xs:w-[350px] sm:w-[400px] md:w-[599px] lg:mb-12 lg:text-start"
            ref={text2}
          >
            {posts[0].oneParagraph}
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <Button
            color="bg-accentColor buttonGSAP hiddenGSAP "
            buttonGSAP={buttonGSAP}
            onClick={(e) => {
              e.preventDefault();
              navigate(`/post/${posts[0].id}`);
            }}
          >
            Read More &gt;
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
