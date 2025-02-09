import React, { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register GSAP Plugin
gsap.registerPlugin(ScrollToPlugin);

const navItems = ["Home", "About", "Gallery", "Contact"];

const Navbar = () => {
  const navContainerref = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
    } else {
      setIsNavVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY]);

  useEffect(() => {
    gsap.to(navContainerref.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.3,
    });
  }, [isNavVisible]);

  // ✅ GSAP Smooth Scroll Function
  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      gsap.to(window, {
        duration: 1,
        scrollTo: section,
        ease: "power2.out",
      });
    }
  };

  return (
    <div
      ref={navContainerref}
      className="fixed inset-x-0 top-4 z-50 h-16 transition-all duration-700"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="favicon-32x32.png" alt="logo" className="w-10" />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    handleNavClick(item.toLowerCase());
                  }}
                  className="nav-hover-btn cursor-pointer"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
