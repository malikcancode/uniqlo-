import { useEffect } from "react";
import { useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

function DenimLaundary() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="w-full h-auto min-h-screen flex flex-col sm:flex-row items-center justify-center"
    >
      <div
        data-scroll
        data-scroll-speed="2"
        className="w-full sm:w-[70%] h-auto sm:h-full flex items-center justify-center order-2 sm:order-1"
      >
        <div
          data-scroll
          data-scroll-delay="0.1"
          data-scroll-speed="1.5"
          className="text-center px-8 py-6"
        >
          <h1 className="text-4xl sm:text-7xl font-normal uppercase text-gray-900 mb-4">
            <span className="font-light">Not Your </span> <br />
            <span className="font-semibold tracking-wider">
              Standard
            </span> Denim <br />
            Laundry
          </h1>
          <p className="text-base sm:text-lg text-gray-700">
            Explore the finest denim laundry services, crafted with care and
            attention. Our process ensures the highest quality for your denim
            wear.
          </p>
        </div>
      </div>

      <div
        data-scroll
        data-scroll-speed="0.5"
        className="w-full sm:w-[50%] h-64 sm:h-96 order-1 sm:order-2 flex justify-center items-center"
      >
        <img
          src="/denimg.jpg"
          alt="Denim Laundry"
          className="w-auto h-full object-cover"
        />
      </div>
    </div>
  );
}

export default DenimLaundary;
