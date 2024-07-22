import { useState } from "react";

import { Link as ScrollLink } from "react-scroll";

const Menu = () => {
  const githubLink = "https://github.com/TakanariShimbo";

  const navLinks = [
    { to: "home", label: "HOME" },
    { to: "about-me", label: "ABOUT ME" },
    { to: "my-apps", label: "MY APPS" },
    { to: "skills", label: "SKILLS" },
    { to: "history", label: "HISTORY" },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuToggle = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-b from-[#151513] pb-[90px] shadow-[#151513] transition-all duration-300">
      <a
        href={githubLink}
        className="absolute left-0 scale-x-[-1] scale-y-[1] fill-[#151513] text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          viewBox="0 0 250 250"
          className="h-[90px] w-[90px] transform"
          aria-hidden="true"
        >
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
          <path
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            fill="currentColor"
            style={{ transformOrigin: "130px 106px" }}
            className="group-hover:animate-octo-arm sm:group-hover:animate-octo-arm-mobile"
          />
          <path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="currentColor"
          />
        </svg>
      </a>

      <div className="absolute right-0 top-0">
        <button
          onClick={handleMenuToggle}
          type="button"
          className="relative z-10 space-y-2 px-5 py-7"
        >
          <div
            className={
              openMenu
                ? "h-0.5 w-8 translate-y-2.5 rotate-45 bg-white transition duration-500 ease-in-out"
                : "h-0.5 w-8 bg-white transition duration-500 ease-in-out"
            }
          />
          <div
            className={
              openMenu
                ? "opacity-0 transition duration-500 ease-in-out"
                : "h-0.5 w-8 bg-white transition duration-500 ease-in-out"
            }
          />
          <div
            className={
              openMenu
                ? "h-0.5 w-8 -rotate-45 bg-white transition duration-500 ease-in-out"
                : "h-0.5 w-8 bg-white transition duration-500 ease-in-out"
            }
          />
        </button>
      </div>
      <nav
        className={
          openMenu
            ? "absolute inset-0 flex h-screen w-full scale-100 flex-col justify-center bg-[#151513] bg-opacity-90 p-5 text-center text-white opacity-100 transition-all duration-500 ease-in-out"
            : "fixed inset-0 scale-0 opacity-0 transition-all duration-500 ease-in-out"
        }
      >
        <ul className="py-8 text-4xl font-medium uppercase">
          {navLinks.map((link) => (
            <li key={link.to}>
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={500}
                className="inline-block cursor-pointer py-8"
                onClick={handleMenuToggle}
              >
                {link.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </nav>
  );
};

export default Menu;
