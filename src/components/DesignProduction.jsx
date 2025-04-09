import React, { useEffect } from "react";
import gsap from "gsap";

function DesignProduction() {
  useEffect(() => {
    const videoLeft = document.querySelector("#video-left");
    const videoRight = document.querySelector("#video-right");
    const overlayLeft = document.querySelector("#overlay-left");
    const overlayRight = document.querySelector("#overlay-right");

    videoLeft.addEventListener("mouseenter", () => {
      gsap.to(videoLeft, {
        width: "80%",
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(videoRight, {
        width: "60%",
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(overlayRight, {
        opacity: 1,
        duration: 0.3,
      });
    });

    videoLeft.addEventListener("mouseleave", () => {
      gsap.to(videoLeft, {
        width: "70%",
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(videoRight, {
        width: "70%",
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(overlayRight, {
        opacity: 0,
        duration: 0.3,
      });
    });

    videoRight.addEventListener("mouseenter", () => {
      gsap.to(videoRight, {
        width: "80%",
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(videoLeft, {
        width: "60%",
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(overlayLeft, {
        opacity: 1,
        duration: 0.3,
      });
    });

    videoRight.addEventListener("mouseleave", () => {
      gsap.to(videoRight, {
        width: "70%",
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(videoLeft, {
        width: "70%",
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(overlayLeft, {
        opacity: 0,
        duration: 0.3,
      });
    });
  }, []);

  return (
    <div className="h-full max-w-6xl mx-auto flex flex-col sm:flex-row justify-center items-center mt-16 relative mb-8">
      <div
        id="video-left"
        className="w-full sm:w-1/2 mb-6 sm:mb-0 relative flex justify-center items-center"
      >
        <video
          id="video-left"
          loop
          autoPlay
          muted
          className="w-[70%] h-full object-cover relative"
        >
          <source src="/video3.mp4" type="video/mp4" />
        </video>
        <div
          id="overlay-left"
          className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300"
        ></div>
        <div className="absolute inset-0 flex justify-center items-center text-white font-light text-5xl sm:text-7xl">
          Design
        </div>
      </div>

      <div
        id="video-right"
        className="w-full sm:w-1/2 relative flex justify-center items-center"
      >
        <video
          id="video-right"
          loop
          autoPlay
          muted
          className="w-[70%] h-full object-cover relative"
        >
          <source src="/video4.mp4" type="video/mp4" />
        </video>
        <div
          id="overlay-right"
          className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300"
        ></div>
        <div className="absolute inset-0 flex justify-center items-center text-white font-light text-4xl sm:text-6xl">
          Production
        </div>
      </div>
    </div>
  );
}

export default DesignProduction;
