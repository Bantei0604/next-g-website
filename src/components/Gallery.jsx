import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    "img/gallery/gallery-1.jpeg",
    "img/gallery/gallery-2.jpeg",
    "img/gallery/gallery-3.jpeg",
    "img/gallery/gallery-4.jpeg",
    "img/gallery/gallery-5.jpeg",
    "img/gallery/gallery-6.jpeg",
    "img/gallery/gallery-7.jpeg",
  ];

  const handleKeyDown = (e) => {
    if (selectedIndex !== null) {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeImage();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const openImage = (index) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);
  const nextImage = () =>
    setSelectedIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <main className="w-full min-h-screen flex items-center justify-center bg-gray-950 p-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden rounded-2xl border border-gray-800 hover:border-neon-blue transition duration-300"
            onClick={() => openImage(index)}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-44 sm:h-52 md:h-60 object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 backdrop-blur-md">
          <button
            className="absolute top-6 right-6 text-white p-2 bg-black/50 rounded-full hover:bg-neon-blue transition"
            onClick={closeImage}
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-6 text-white hidden sm:block p-2 bg-black/50 rounded-full hover:bg-neon-blue transition"
            onClick={prevImage}
          >
            <ChevronLeft size={42} />
          </button>
          <button
            className="absolute right-6 text-white hidden sm:block p-2 bg-black/50 rounded-full hover:bg-neon-blue transition"
            onClick={nextImage}
          >
            <ChevronRight size={42} />
          </button>
          <img
            src={images[selectedIndex]}
            alt="Expanded view"
            className="max-w-[85vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </main>
  );
};

export default Gallery;
