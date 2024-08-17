import { useLayoutEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./intro.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import heroImg from "../assets/hero.jpg";

const Intro = ({ handleTheme }) => {
  const background = useRef(null);
  const introImage = useRef(null);
  const homeHeader = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top",
        end: "+=500px",
      },
    });

    timeline
      .from(background.current, { clipPath: `inset(15%)` })
      .to(introImage.current, { height: "500px" }, 0);
  }, []);

  return (
    <div ref={homeHeader} className={styles.homeHeader}>
      {/* Navbar */}
      <nav className="fixed flex justify-between items-center w-full p-5 font-figtree font-semibold z-30">
        <div className="flex items-center gap-7">
          <div>
            <a href="#">Logo</a>
          </div>
          <div className="hidden lg:flex flex-row gap-6 items-center text-sm">
            <a href="#">About</a>
            <a href="#">Porfolio</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div>
          <button>
            <svg
              onClick={handleTheme}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="fill-zinc-900 dark:fill-white"
              viewBox="0 0 256 256">
              <path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"></path>
            </svg>
          </button>
        </div>
      </nav>
      <div className={styles.backgroundImage} ref={background}></div>
      <div className={styles.intro}>
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.3"
          className="brightness-[70%] w-[230px] h-[385px] lg:w-[350px] lg:h-[475px] absolute">
          <img src={heroImg} alt="intro image" />
        </div>
        <h1 data-scroll data-scroll-speed="0.7" className="uppercase">
          Riyadh Awwibi
        </h1>
      </div>
    </div>
  );
};

Intro.propTypes = {
  handleTheme: PropTypes.func.isRequired,
};

export default Intro;
