"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "@/app/styles/header.css";
import Image from "next/image";
import { usePathname } from "next/navigation"; // 1. Import usePathname
import ThemeSwitcher from "../ThemeSwitcher";

const dataMenu = [
  {
    id: "now",
    name: "Now",
    path: "/now",
  },
  {
    id: "projects",
    name: "Projects",
    path: "/projects",
  },
  {
    id: "about",
    name: "About",
    path: "/about",
  },
];

const Header: React.FC = () => {
  const pathname = usePathname(); // 2. Get current path

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        // Scroll down
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scroll up
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className="header"
      style={{
        transform: isVisible
          ? "translateY(0) translateX(-50%)"
          : "translateY(-140%) translateX(-50%)",
      }}
    >
      <div className="styles_ctnLeftHeader">
        <Link href={"/"} className="logo-ctn">
          <Image
            src={"/personal.png"}
            className="logo"
            alt="logo"
            width={34}
            height={34}
          />
        </Link>
      </div>

      <nav className="styles_nav">
        <ul className="styles_menu">
          {dataMenu.map((item) => (
            <li
              key={item.id}
              className={`menu-child ${
                pathname.includes(item.path) ? "menu-child-active" : ""
              }`}
            >
              <Link href={item.path}>{item.name}</Link>
              <span className={`${pathname.includes(item.path) ? "line-active" : ""}`}></span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="styles_ctnRightHeader">
        <div className="styles_changeLanguage">
          <span>EN</span>
          <p>/</p>
          <span>JP</span>
        </div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
export default Header;
