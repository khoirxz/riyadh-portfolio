import { useEffect, useState } from "react";
import Intro from "./section/Intro";
import About from "./section/About";
import Footer from "./section/Footer";

const App = () => {
  const [theme, setTheme] = useState(() => {
    // get class='dark' from tag html
    const html = document.querySelector("html");
    if (html.classList.contains("dark")) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    // change class='dark' to 'light' from tag html
    const html = document.querySelector("html");
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      // ignore eslint error non-used variable
      // eslint-disable-next-line no-unused-vars
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  const handleTheme = () => {
    // change class='dark' to 'light' from tag html
    const html = document.querySelector("html");
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      setTheme("light");
    } else {
      html.classList.add("dark");
      setTheme("dark");
    }
  };
  return (
    <div className="font-oswald text-zinc-900 dark:text-white antialiased bg-white dark:bg-zinc-900">
      <Intro handleTheme={handleTheme} />
      <About />
      <Footer />
    </div>
  );
};

export default App;
