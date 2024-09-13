import { useLayoutEffect, useRef } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const textAbout = [
  "SEO and Advertising Specialist with experience in leading",
  "the digital marketing and advertising businesses",
  "I am a team of a local clothing brand company",
  "who has expertise in analysis, marketing, coding and is proficient in",
  "interpersonal interaction as well as public speaking.",
];

const anchor = {
  rest: {
    gap: "0.3rem",
    transition: { duration: 0.3 },
  },
  hover: {
    gap: "0.8rem",
    transition: { duration: 0.3 },
  },
};

const About = () => {
  return (
    <div className="flex flex-col gap-8 mt-8 max-w-screen-md mx-auto container mb-7 relative">
      <div className="px-4 lg:px-0">
        <div className="flex flex-col gap-6">
          <div className="relative h-full">
            {textAbout.map((text, index) => (
              <AnimateText key={index}>{text}</AnimateText>
            ))}
          </div>

          <div>
            <motion.a
              variants={anchor}
              initial="rest"
              whileHover="hover"
              href="#"
              className="font-oswald text-2xl flex items-center uppercase">
              Download CV
              <motion.svg
                height={24}
                width={24}
                xmlns="http://www.w3.org/2000/svg"
                className="fill-zinc-800 dark:fill-white"
                viewBox="0 0 256 256">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
              </motion.svg>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

const AnimateText = ({ children }) => {
  const text = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        scrub: true,
        start: "0px bottom",
        end: "bottom+=80px bottom",
      },
      opacity: 0,
      left: "-200px",
      ease: "power3.out",
    });
  }, []);

  return (
    <p
      className="relative font-oswald text-justify text-2xl uppercase"
      ref={text}>
      {children}
    </p>
  );
};

AnimateText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default About;
