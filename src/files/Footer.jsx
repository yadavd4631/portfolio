import ArrowUpRightIcon from "../../public/assets/icons/arrow-up-right.svg";

const footerLink = [
  {
    title: "Twitter",
    href: "https://x.com/yadavd4631",
  },
  {
    title: "Linkedin",
    href: "www.linkedin.com/in/yadavd4631",
  },
  {
    title: "GitHub",
    href: "https://github.com/Deepak12041999",
  },
  
  {
    title: "Instagram",
    href: "https://www.instagram.com/deepak__yadav07_/",
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-x-clip ">
        <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLink.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                className="inline-flex items-center gap-1.5 opacity-40 hover:opacity-100 transition-opacity duration-300"
              >
                <span className="font-semibold  hover:opacity-100">{link.title}</span>
                <img
                  src={ArrowUpRightIcon}
                  alt="arrow-up-right"
                  className="size-4"
                />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
