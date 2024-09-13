import { useLayoutEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./intro.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

import heroImg from "../assets/hero.jpg";

const socials = [
  {
    name: "Github",
    url: "https://github.com/riyadh",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/riyadh/",
  },
  {
    name: "Whatsapp",
    url: "https://wa.me/6281331688102",
  },
  {
    name: "Gmail",
    url: "mailto:5w5iK@example.com",
  },
];

const Intro = ({ handleTheme, theme }) => {
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
    <div
      ref={homeHeader}
      className="relative w-full flex justify-center h-screen">
      {/* Navbar */}
      <nav className="fixed flex justify-between items-center w-full p-5 font-figtree font-semibold z-30">
        <div>
          <button onClick={handleTheme}>
            {theme === "dark" ? (
              <svg
                aria-label="Dark Mode"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className="fill-zinc-900 dark:fill-white"
                viewBox="0 0 256 256">
                <path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"></path>
              </svg>
            ) : (
              <svg
                aria-label="Light Mode"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className="fill-zinc-900 dark:fill-white"
                viewBox="0 0 256 256">
                <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path>
              </svg>
            )}
          </button>
        </div>
      </nav>
      <div className={styles.backgroundImage} ref={background}></div>
      <div className={styles.intro} id="intro">
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.3"
          className="brightness-[70%] w-[230px] h-[385px] lg:w-[350px] lg:h-[475px] absolute">
          <img src={heroImg} alt="intro image" />
        </div>
        <h1
          data-scroll
          data-scroll-speed="0.7"
          className={clsx(
            "uppercase",
            theme === "light" ? "text-black" : "text-white"
          )}>
          Riyadh Awwibi
        </h1>
      </div>

      <SocialList />
    </div>
  );
};

export const SocialList = () => {
  return (
    <div className="absolute bottom-5 left-5 flex gap-2 items-center font-mono text-sm font-thin">
      {socials.map((social, i) => (
        <a key={i} href={social.link} target="_blank" rel="noreferrer">
          {social.name}
        </a>
      ))}
    </div>
  );
};

Intro.propTypes = {
  handleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Intro;
