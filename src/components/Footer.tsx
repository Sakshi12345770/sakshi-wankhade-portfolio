
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-orange-500/30 bg-background py-8 shadow-[0_-4px_25px_rgba(249,115,22,0.08)]">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <p className="text-sm font-medium text-white">
            © {currentYear}{" "}
            <span className="font-bold text-orange-400">
              Sakshi Wankhade
            </span>
            . All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://github.com/Sakshi12345770"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-orange-400 transition duration-300 hover:scale-105 hover:text-orange-300 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.7)]"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sakshi-wankhade-977407361"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-orange-400 transition duration-300 hover:scale-105 hover:text-orange-300 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.7)]"
            >
              LinkedIn
            </a>

            <a
              href="mailto:wankhadesakhshi2004@gmail.com"
              className="text-sm font-semibold text-orange-400 transition duration-300 hover:scale-105 hover:text-orange-300 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.7)]"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;