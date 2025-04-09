function Capsules() {
  return (
    <section
      className="bg-[#f7f0eb] px-6 md:px-20 py-16 w-full"
      data-scroll-container
    >
      <div className="w-full flex-col flex items-start justify-start">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-serif font-light leading-tight mb-8"
          data-scroll
          data-scroll-speed="2"
        >
          OUR CAPSULES ARE SFI’S <br />
          DESIGN TEST KITCHEN.
        </h2>

        <p
          className="text-base md:text-lg text-gray-700 max-w-3xl mb-10"
          data-scroll
          data-scroll-speed="1"
        >
          Capsules are where we explore new wash and design concepts, new denim
          developments and technologies, new production models – all so that we
          are that much more prepared to offer advanced solutions, inspiration
          and innovation to our customers.
        </p>

        <div className="border-t border-black w-fit pt-3 mb-20">
          <a
            href="#"
            className="text-sm font-bold tracking-wide uppercase text-black"
            data-scroll
            data-scroll-speed="0.5"
          >
            View all capsules
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-0">
        <div
          className="bg-[#E7E2DA] w-full md:w-1/2 flex flex-col items-center justify-center text-center px-6 py-10"
          data-scroll
          data-scroll-speed="2"
        >
          <h3 className="text-4xl md:text-6xl font-light mb-4 leading-tight">
            DENIM <br /> DAYDREAM
          </h3>

          <img
            src="/capsule img.jpg"
            alt="Small Capsule Preview"
            className="w-24 h-auto my-4"
            data-scroll
            data-scroll-speed="1.5"
          />

          <p
            className="text-gray-700 text-base max-w-md mb-6"
            data-scroll
            data-scroll-speed="1"
          >
            For our first capsule collection, we utilized 3D design, our global
            wash team’s expertise, the latest technologies in sustainability.
          </p>

          <button
            className="border border-black px-6 py-2 rounded-full uppercase text-sm font-bold hover:bg-black hover:text-white transition-all"
            data-scroll
            data-scroll-speed="0.5"
          >
            View
          </button>
        </div>

        <div className="w-full md:w-1/2 h-full">
          <img
            src="/capsule img.jpg"
            alt="Capsule Main"
            className="w-full h-full object-cover"
            data-scroll
            data-scroll-speed="1.2"
          />
        </div>
      </div>
    </section>
  );
}

export default Capsules;
