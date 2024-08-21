const Footer = () => {
  return (
    <footer
      className="relative min-h-[600px]"
      style={{
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}>
      <div className="fixed bottom-0 min-h-[600px] w-full bg-yellow-200 text-black p-5">
        <h1 className="text-2xl text-center">Contact me</h1>
        <p className="font-figtree text-sm font-semibold">
          Copyright &copy; {new Date().getFullYear()} Riyad.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
