import React, { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  const totalImages = 3; // Total number of images

  useEffect(() => {
    // Toggle video and image every 3 seconds with smooth transition
    const interval = setInterval(() => {
      gsap.to("#content", {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          setShowVideo((prev) => !prev);
          if (!showVideo) {
            setCurrentIndex((prev) => (prev % totalImages) + 1);
          }
        },
      });

      gsap.to("#content", { opacity: 1, duration: 1, delay: 1 });
    }, 3000);

    return () => clearInterval(interval);
  }, [showVideo]);

  useEffect(() => {
    if (showVideo) {
      videoRef.current?.play();
    }
  }, [showVideo]);

  useEffect(() => {
    // Fake loading effect (2.5s)
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div id="home" className="relative h-dvh w-screen overflow-hidden bg-black">
      {/* LOADING SCREEN (Three Dots) */}
      {isLoading && (
        <div className="absolute z-[100] flex h-dvh w-screen items-center justify-center bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden bg-[rgba(0,0,0, 1)]"
      >
        <div id="content" className="absolute left-0 top-0 size-full">
          {showVideo ? (
            <video
              ref={videoRef}
              src={`/videos/hero-3.mp4`}
              autoPlay
              muted
              loop
              className="absolute left-0 top-0 size-full object-cover"
            />
          ) : (
            <img
              src={`/img/hero-${currentIndex}.jpg`}
              className="absolute left-0 top-0 size-full object-cover"
            />
          )}
        </div>

        <h1 className="hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>a</b>ming
        </h1>

        <div className="absolute top-0 left-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">next-G</h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the metagame layer <br /> Unleash the play economy
            </p>
            <Button
              id="story"
              title="Story"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
