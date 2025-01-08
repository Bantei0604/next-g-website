import React, { useState } from "react";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import Modal from "./Modal";

const ImageClipBox = ({ src, clipClass, id }) => (
  <div className={clipClass} key={id}>
    <img src={src} alt="Decorative" />
  </div>
);

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join Next-G Gaming
          </p>
          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the new era of <br/> e-sports"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />
          <Button
            title="Contact Us"
            containerClass="mt-10 cursor-pointer"
            onClick={openModal}
          />
        </div>
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        email="support@company.com"
        phone="+1234567890"
      />
    </div>
  );
};

export default Contact;
