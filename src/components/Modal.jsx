import React from "react";
import { FaMobileAlt, FaEnvelope } from "react-icons/fa";

const Modal = ({ isOpen, onClose, email, phone }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="relative w-full max-w-md rounded-xl bg-gray-900/90 p-6 text-gray-200 shadow-xl md:max-w-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
        >
          ✖
        </button>

        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-blue-400">Get in Touch!</h2>
          <p className="mt-2 text-sm text-gray-400">
            Have questions? Contact us via email or phone.
          </p>
        </div>

        {/* Contact Info */}
        <div className="mt-5 flex flex-col gap-4 text-center">
          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
          >
            <FaEnvelope />
            <span>{email}</span>
          </a>

          {/* Phone */}
          <a
            href={`tel:${phone}`}
            className="flex items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
          >
            <FaMobileAlt />
            <span>{phone}</span>
          </a>
        </div>

        {/* Google Map */}
        <div className="mt-6 overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105758.16131993219!2d92.62918241123143!3d23.744512499420484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374d94b676913a3f%3A0xfa1b12590950db6c!2sAizawl%2C%20Mizoram!5e1!3m2!1sen!2sin!4v1739112514784!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Modal;
