import { IcoGithub, IcoGmail, IcoLinkedin, IcoWhatsapp } from "../icons";

const Footer = () => {
  return (
    <footer
      className="relative min-h-screen"
      style={{
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}>
      <div className="fixed bottom-0 min-h-screen w-full bg-yellow-200 text-black p-5 flex flex-col">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-5xl font-bold text-center mt-16 sm:mt-7 uppercase [text-shadow:3px_4px_0px_#fff]">
            Connect with me
          </h1>

          <div className="flex gap-3 flex-wrap justify-center mt-16 max-w-screen-md mx-auto">
            <a
              href="https://github.com/riyadh"
              target="_blank"
              className="font-mono flex items-center  uppercase font-semibold border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md">
              <IcoGithub className="w-6 h-6 mr-2" />
              Github.com/riyadh
            </a>
            <a
              href="https://github.com/riyadh"
              target="_blank"
              className="font-mono flex items-center uppercase font-semibold border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md">
              <IcoGmail className="w-6 h-6 mr-2" />
              riyadhx@gmail.com
            </a>
            <a
              href="https://github.com/riyadh"
              target="_blank"
              className="font-mono flex items-center uppercase font-semibold border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md">
              <IcoWhatsapp className="w-6 h-6 mr-2" />
              +62 851-5674-3216
            </a>
            <a
              href="https://github.com/riyadh"
              target="_blank"
              className="font-mono flex items-center uppercase font-semibold border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md">
              <IcoLinkedin className="w-6 h-6 mr-2" />
              Github.com/riyadh
            </a>
          </div>
        </div>
        <p className="font-figtree text-sm text-center">
          Copyright &copy; {new Date().getFullYear()} Riyad.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
