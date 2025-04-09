import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaArrowDown } from "react-icons/fa6";
import Capsules from "../components/Capsules";

gsap.registerPlugin(ScrollTrigger);

function Designs() {
  const { scrollYProgress } = useScroll();
  const size = useTransform(scrollYProgress, [0, 1], ["20%", "50%"]);

  useEffect(() => {
    window.onload = () => {
      gsap.to(".element", {
        scrollTrigger: {
          trigger: ".element",
          start: "top 80%",
          end: "bottom top",
        },
        opacity: 1,
      });
    };
  }, []);

  return (
    <>
      <div className="min-h-[110vh] flex flex-col items-center justify-center pt-28 p-2 relative">
        <h1 className="text-center text-6xl sm:text-7xl md:text-8xl font-bold leading-tight uppercase whitespace-nowrap z-20">
          in-house <br /> <span className="block">Design</span>
        </h1>

        <motion.div
          style={{
            width: size,
            height: size,
          }}
          className="mt-6 flex items-center justify-center z-10"
        >
          <img
            src="/design.jpg"
            alt="Design"
            className="w-full h-full object-cover rounded-md"
          />
        </motion.div>

        <div className="mt-20 max-w-5xl px-4 text-center">
          <div className="flex flex-wrap justify-center items-center gap-2 text-xl sm:text-4xl md:text-6xl leading-snug">
            <span className="font-extrabold">SFI IS YOUR</span>
            <img
              src="/public/trail/image.jpg"
              alt=""
              className="w-8 h-8 object-cover rounded-sm"
            />
            <span>DENIM DESIGN</span>

            <div className="w-full h-0" />

            <span>HUB IN THE</span>
            <span className="font-extrabold">HEART</span>
            <img
              src="/image1.jpg"
              alt=""
              className="w-8 h-8 object-cover rounded-sm"
            />
            <span>OF</span>

            <div className="w-full h-0" />

            <span>LA'S</span>
            <span className="font-extrabold">PREMIUM DENIM</span>
            <img
              src="/image2.jpg"
              alt=""
              className="w-8 h-8 object-cover rounded-sm"
            />

            <div className="w-full h-0" />

            <span>COMMUNITY</span>
            <img
              src="/public/trail/image4.jpg"
              alt=""
              className="w-8 h-8 object-cover rounded-sm"
            />
          </div>

          <div className="mt-8 w-full flex items-center justify-center">
            <FaArrowDown className="text-4xl text-gray-800 rounded-full border-black border p-2 animate-bounce" />
          </div>
        </div>
        <Capsules />
      </div>
    </>
  );
}

export default Designs;
