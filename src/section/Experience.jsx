import { useLayoutEffect, useRef } from "react";
import PropTypes from "prop-types";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const workHistory = [
  {
    title: "Markaskaos.id",
    position: "SEO Specialist and Ads Manager",
    location: "Tulungagung",
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
        <h1 className="font-oswald text-xl mb-10 uppercase">Work Experience</h1>
        <div className="relative h-full flex flex-col gap-4">
          {workHistory.map((work, index) => (
            <AnimateList key={index} work={work} />
          ))}
        </div>
      </div>
    </div>
  );
};

const AnimateList = ({ work }) => {
  const list = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(list.current, {
      scrollTrigger: {
        trigger: list.current,
        scrub: true,
        start: "0px bottom",
        end: "bottom+=100px bottom",
      },
      opacity: 0,
      bottom: "-200px",
      ease: "power3.out",
    });
  }, []);

  return (
    <div ref={list} className="flex flex-col justify-between gap-4">
      <div>
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-oswald text-3xl mb-3 uppercase font-light">
            {work.title}
          </h1>

          <p className="font-oswald text-3xl mb-3 uppercase font-light">
            {work.year}
          </p>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <span className="font-figtree text-sm text-zinc-500 flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 256 256">
              <path d="M216,58H174V48a22,22,0,0,0-22-22H104A22,22,0,0,0,82,48V58H40A14,14,0,0,0,26,72V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V72A14,14,0,0,0,216,58ZM94,48a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V58H94Zm68,22V202H94V70ZM38,200V72a2,2,0,0,1,2-2H82V202H40A2,2,0,0,1,38,200Zm180,0a2,2,0,0,1-2,2H174V70h42a2,2,0,0,1,2,2Z"></path>
            </svg>

            {work.position}
          </span>
          <span className="font-figtree text-sm text-zinc-500 flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 256 256">
              <path d="M182,72a54,54,0,1,0-60,53.66V232a6,6,0,0,0,12,0V125.66A54.07,54.07,0,0,0,182,72Zm-54,42a42,42,0,1,1,42-42A42,42,0,0,1,128,114Z"></path>
            </svg>

            {work.location}
          </span>
        </div>
      </div>

      <div>
        {work.content.map((content, index) => (
          <p key={index} className="font-figtree text-sm mb-2 flex">
            <span className="font-bold">• </span>
            {content}
          </p>
        ))}
      </div>
    </div>
  );
};

AnimateList.propTypes = {
  work: PropTypes.object,
};

export default Experience;
