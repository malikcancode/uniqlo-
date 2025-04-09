function DesignStudioSection() {
  return (
    <div
      className="w-full min-h-screen flex mb-8 flex-col md:flex-row relative overflow-hidden"
      data-scroll-container
    >
      <div className="w-full md:w-1/2 h-full relative order-2 sm:order-1">
        <img
          src="/image1.jpg"
          alt="Design Studio"
          className="w-full h-full object-cover"
          data-scroll
          data-scroll-speed="0.5"
        />

        <div className="absolute w-full h-full md:flex items-center justify-center gap-6 -bottom-28 left-1/2 transform -translate-x-1/2 z-50">
          <div
            className="sm:text-right text-left p-6 sm:top-60 top-44 w-full absolute sm:bottom-0 sm:left-[90%]"
            data-scroll
            data-scroll-speed="2"
          >
            <h3 className="sm:text-6xl text-4xl font-extrabold mb-2 text-zinc-900 capitalize">
              we are a <br /> unique dichotomy <br />{" "}
              <span className="font-light text-zinc-800">between design</span>{" "}
              <br /> <span className="font-light mr-3 text-zinc-900">And</span>
              Innovation
            </h3>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-start h-full justify-start relative z-50 px-6 md:px-12 py-10 mb-8 order-1 sm:order-2">
        <div className="max-w-xl text-center md:text-left">
          <h2
            className="text-3xl md:text-7xl whitespace-nowrap drop-shadow-md font-extrabold w-full absolute sm:top-[6%] sm:right-[43%] right-0 text-zinc-800 sm:text-white leading-tight mix-blend-difference pointer-events-none z-30 sm:order-1 order-2"
            data-scroll
            data-scroll-speed="3"
          >
            Creative <span className="text-zinc-800">Design Studio</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default DesignStudioSection;
