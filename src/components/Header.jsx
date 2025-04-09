import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import gsap from "gsap";

function Header({ textColor = "white" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation(); // current route

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMouseEnter = (e, iconRef) => {
    gsap.to(iconRef.current, {
      opacity: 1,
      x: 10,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = (e, iconRef) => {
    gsap.to(iconRef.current, {
      opacity: 0,
      x: 0,
      duration: 0.3,
      ease: "power3.in",
    });
  };

  useEffect(() => {
    if (menuRef.current) {
      gsap.to(menuRef.current, {
        x: isMenuOpen ? 0 : "-100%",
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }, [isMenuOpen]);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Design", path: "/designs" },
    { label: "Production", path: "#services" },
    { label: "News", path: "#about" },
    { label: "Contact", path: "#contact" },
    { label: "About", path: "#blog" },
  ];

  const textColorClass = textColor === "black" ? "text-black" : "text-white";
  const borderColorClass =
    textColor === "black" ? "border-black" : "border-white";

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`font-custom absolute top-0 left-0 w-full flex items-center justify-between px-8 py-4 border-b ${borderColorClass} z-[100]`}
    >
      <Link to="/" className="flex items-center">
        <img src="/favicon.png" alt="Logo" className="h-12" />
      </Link>

      <nav className={`hidden md:flex space-x-12 text-2xl ${textColorClass}`}>
        {menuItems.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            className={`${
              isActive(item.path)
                ? "rounded-full border border-black px-4 py-1"
                : ""
            } ${textColorClass}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="md:hidden">
        <button onClick={toggleMenu} className={`text-3xl ${textColorClass}`}>
          <CiMenuFries />
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        ref={menuRef}
        className="absolute top-16 left-0 w-full bg-[#dad7cd] h-screen text-black p-8 flex flex-col items-start justify-start space-y-14 md:hidden"
        style={{ transform: "translateX(-100%)" }}
      >
        {menuItems.map((item, i) => {
          const iconRef = useRef(null);
          return (
            <Link
              key={i}
              to={item.path}
              className={`text-zinc-800 text-2xl flex items-center ${
                isActive(item.path)
                  ? "rounded-full border border-black px-4 py-1"
                  : ""
              }`}
              onMouseEnter={(e) => handleMouseEnter(e, iconRef)}
              onMouseLeave={(e) => handleMouseLeave(e, iconRef)}
            >
              {item.label}
              <MdArrowOutward
                ref={iconRef}
                className="ml-2 opacity-0 text-4xl transition-opacity font-bold duration-300"
                style={{ display: "inline-block" }}
              />
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
