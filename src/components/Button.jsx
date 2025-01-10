import React from "react";

const Button = ({ id, title, leftIcon, containerClass, onClick }) => {
  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }

    if (id) {
      const targetSection = document.getElementById(id);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <button
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass} `}
      onClick={handleClick}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
    </button>
  );
};

export default Button;
