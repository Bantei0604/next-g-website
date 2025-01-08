import React from "react";

const Modal = ({ isOpen, onClose, email, phone }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      {/* Modal Container */}
      <div className="relative w-full max-w-md rounded-lg  bg-gradient-to-r from-gray-900 to-black py-6 text-gray-300 p-6 shadow-lg md:max-w-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-red-500"
        >
          ✖
        </button>

        {/* Header Section */}
        <div className="flex items-center justify-center gap-4">
          <h2 className="text-2xl font-bold text-blue-400">
            Get in Touch with Us!
          </h2>
        </div>

        {/* Content Section */}
        <div className="mt-6 text-center">
          <p className="mb-4 text-gray-300">
            Got questions? Reach out to us via email or phone!
          </p>

          <div className="flex flex-col items-center gap-4">
            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-white shadow-md hover:bg-blue-600"
            >
              <img
                src="/public/favicon-32x32.png"
                alt="Email Icon"
                className="h-6 w-6"
              />
              <span>{email}</span>
            </a>

            {/* Phone */}
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-white shadow-md hover:bg-green-600"
            >
              <img
                src="/public/favicon-32x32.png"
                alt="Phone Icon"
                className="h-6 w-6"
              />
              <span>{phone}</span>
            </a>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-6 flex justify-center">
          <img
            src="/public/img/gallery-3.webp"
            alt="Gaming Background"
            className="h-20 rounded-lg object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
