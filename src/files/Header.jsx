import React, { useState } from "react";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (item) => {
    setActive(item);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="home">
      <section
        className="text-white antialiased flex justify-center top-3 w-full fixed z-10"
      >
        <nav className="cursor-pointer flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`nav-item ${
                active === item.name
                  ? "bg-white text-gray-900 hover:text-gray-900 hover:bg-white/70"
                  : ""
              }`}
              onClick={() => handleNavClick(item.name)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div
          className={`fixed left-0 top-0 w-[50%] h-full bg-[#202121] text-white z-50 transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4">
            <h1 className="text-2xl mb-8 font-mono">DEEPAK YADAV</h1>
            <nav className="flex flex-col gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg hover:scale-90 transition-transform duration-300"
                  onClick={() => {
                    handleNavClick(item.name);
                    setMenuOpen(false);
                  }}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
