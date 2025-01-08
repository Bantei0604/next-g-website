import React from "react";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const links = [
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://facebook.com", icon: <FaFacebook /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://instagram.com", icon: <FaInstagram /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-gradient-to-r from-gray-900 to-black py-6 text-gray-300">
      <div className="container mx-auto flex flex-col items-center justify-between px-6 md:flex-row">
        {/* Left Section */}
        <div className="flex flex-col items-center gap-2 md:items-start">
          <p className="text-center text-sm md:text-left">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-bold text-white">Next-G Gaming</span>. All
            rights reserved.
          </p>
          <a
            href="#privacy-policy"
            className="text-sm text-gray-400 transition hover:text-gray-200"
          >
            Privacy Policy
          </a>
        </div>

        {/* Center Section - Social Links */}
        <div className="mt-4 flex justify-center gap-6 md:mt-0">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-gray-400 transition hover:text-blue-500"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Right Section */}
        <p className="mt-4 text-sm md:mt-0">
          Developed by{" "}
          <a
            href="https://www.instagram.com/iamwiezy/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 transition hover:text-blue-500"
          >
            @WiezyDev
          </a>
        </p>
      </div>

      {/* Bottom Decoration */}
      <div className="mt-6 flex items-center justify-center">
        <div className="h-1 w-10 bg-blue-500 rounded-full"></div>
        <div className="h-1 w-6 mx-2 bg-gray-700 rounded-full"></div>
        <div className="h-1 w-4 bg-blue-500 rounded-full"></div>
      </div>
    </footer>
  );
};

export default Footer;
