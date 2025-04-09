import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import DenimLaundary from "../components/DenimLaundary";
import DesignStudioSection from "../components/DesignStudioSection";
import DesignProduction from "../components/DesignProduction";
import Newsletter from "../components/Newsletter";
import FollowCursor from "../components/FollowCursor";

function Home() {
  const scrollRef = useRef(null);
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (scrollRef.current && scroll) {
      scroll.scrollTo(0);
    }
  }, [scroll]);

  return (
    <>
      <div className="relative font-custom" ref={scrollRef}>
        <div className="absolute z-[100]">
          <FollowCursor />
        </div>
        <motion.div
          className="absolute sm:bottom-40 bottom-36 left-0 text-white text-5xl font-light z-50 ml-4 sm:ml-6 md:ml-4 sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Reimagining Denim
        </motion.div>

        <motion.div
          className="absolute sm:bottom-12 left-0 bottom-14 w-full z-50 overflow-hidden"
          style={{ whiteSpace: "nowrap" }}
        >
          <motion.div
            className="inline-block text-7xl text-white capitalize font-semibold sm:text-4xl md:text-6xl lg:text-8xl xl:text-8xl"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
            }}
          >
            Design . Development . Production . Design . Development .
            Production . Design . Development . Production . Design .
            Development . Production .
          </motion.div>
        </motion.div>

        <div className="relative w-full h-screen">
          <video
            className="object-cover w-full h-full absolute top-0 left-0 z-0"
            loop
            autoPlay
            muted
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <DenimLaundary />
      <DesignStudioSection />
      <DesignProduction />
      <Newsletter />
    </>
  );
}

export default Home;
