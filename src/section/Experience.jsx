import { useLayoutEffect, useRef } from "react";
// import PropTypes from "prop-types";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const workHistory = [
  {
    title: "Markaskaos.id",
    position: "SEO Specialist and Ads Manager",
    location: "Indonesia",
    year: "2022 - Present",
    content: [
      "Memimpin staff digital marketing dalam melaksanakan pemasaran produk secara online melalui berbagai platform.",
      "Mengoptimalkan website perusahaan agar mencapai hasil tertinggi dalam pencarian organik menggunakan teknik SEO.",
      "Mendesain dan meluncurkan kampanye iklan digital yang sukses dengan menggunakan platform seperti facebook ads dan tiktok ads.",
    ],
  },
  {
    title: "GM Academy (Digital Marketing) Agency",
    position: "Internship",
    location: "Malang",
    year: "2021 - 2022",
    content: [
      "Melaksanakan pemasaran produk digital melalui berbagai platform seperti Facebook, Instagram, Tiktok, dan lainnya.",
      "Mengoptimalkan website per businesses agar mencapai target yang diinginkan.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="my-24 max-w-screen-md mx-auto container relative">
      <div className="relative px-4 lg:px-0">
        <h1 className="font-oswald text-xl mb-5 uppercase">Work Experience</h1>
        <div className="relative h-full flex flex-col gap-4">
          {workHistory.map((work, index) => (
            <AnimateList key={index} work={work} />
          ))}
        </div>
      </div>
    </div>
  );
};

const AnimateList = () => {
  const list = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(list.current, {
      scrollTrigger: {
        trigger: list.current,
        scrub: true,
        start: "0px bottom",
        end: "bottom+=300px bottom",
      },
      opacity: 0,
      bottom: "-300px",
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      ref={list}
      className="flex flex-row justify-between items-center border-b-2 border-b-zinc-950 dark:border-b-zinc-50">
      <span className="text-2xl font-oswald uppercase">Lorem Ipsum</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        className="fill-zinc-800 dark:fill-white"
        viewBox="0 0 256 256">
        <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
      </svg>
    </div>
  );
};

export default Experience;
