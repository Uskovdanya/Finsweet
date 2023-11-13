import { useLayoutEffect, useRef } from "react";
import Button from "../Button";
import { gsap } from "gsap";
import H1 from "../H1";
import { usePosts } from "../contexts/PostContext";
import Spinner from "../Spinner";
import { useNavigate } from "react-router-dom";
import H2 from "../H2";

function HeroBlog() {
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
        )
        .fromTo(".image", { autoAlpha: 0, x: 100 }, { autoAlpha: 1, x: 0 });
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
      gsap.to(".scrollImageGSAP", {
        yPercent: 80,
        scale: 0.5,
        xPercent: 80,
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
  // вправо
  //useLayoutEffect(() => {
  //  const ctx = gsap.context(() => {
  //    gsap.to(".scrollImageGSAP", {
  //      yPercent: 80,
  //      scale: 0.5,
  //      xPercent: 80,
  //      opacity: 0,
  //      scrollTrigger: {
  //        trigger: heroRef.current,
  //        markers: true,
  //        start: "top top",
  //        scrub: true, // чтобы плавно уезжало помере скрола
  //      },
  //    });
  //  }, heroRef);
  //  return () => ctx.revert();
  //}, []);

  if (isLoading) return <Spinner />; // спинер обязательно после useEffect иначе нарушится правило что компоненты должны рендерится всегда по порядку

  return (
    <section
      className="headerTop    bg-lavenderColor pb-[93px] pt-[80px] lg:pt-[94px]"
      ref={heroRef}
    >
      <div className="container flex items-center justify-center gap-[141px]">
        <div className="scrollHeroGSAP z-20">
          <div className="z-20  flex flex-col items-center lg:items-start">
            <p
              className="hiddenGSAP text mb-4 font-Inter text-base font-medium uppercase leading-5 tracking-[3px] text-textBlackColor lg:mb-4 "
              ref={text1}
            >
              Featured post
            </p>
            <H2
              h1Text={h1Text}
              hiddenGSAP="hiddenGSAP"
              color="text-textBlackColor"
              fontSize="lg:text-[36px] md:text-[30px]"
            >
              {posts[2].title}
            </H2>

            <p
              className="hiddenGSAP text mb-3 font-Inter text-sm font-medium  text-textBlackColor lg:mb-4"
              ref={authorText}
            >
              By
              <span
                className="cursor-pointer text-linkColor"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(
                    `/author/${posts[2].author}` /*.replace(/ /gi, "_")*/,
                  );
                }}
              >
                {" "}
                {posts[2].author}
              </span>{" "}
              | {new Date(Date.parse(posts[2].date)).toDateString()}
            </p>
            <p
              className="hiddenGSAP text mb-4 text-center text-base  font-normal leading-7 text-borderGray xs:w-[350px] sm:w-[400px] md:w-[599px] lg:mb-8 lg:text-start"
              ref={text2}
            >
              {posts[2].oneParagraph}
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <Button
              color="bg-accentColor buttonGSAP hiddenGSAP "
              buttonGSAP={buttonGSAP}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/post/${posts[2].id}`);
              }}
            >
              Read More &gt;
            </Button>
          </div>
        </div>
        <div className="hiddenGSAP image">
          <img
            src={posts[2].img}
            alt={posts[2].alt}
            className="scrollImageGSAP  z-20 h-[359px] w-[515px]"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroBlog;
