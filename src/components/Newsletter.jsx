import React, { useState, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []);

  return (
    <div
      className="w-full min-h-screen p-8 mt-10 flex flex-col gap-9 items-start justify-start"
      data-scroll-container
    >
      <div className="flex flex-col items-center sm:space-x-8 space-y-16 sm:space-y-0">
        <div
          className="flex-1 text-start sm:text-left sm:mb-8"
          data-scroll
          data-scroll-speed="2"
        >
          <h2 className="text-3xl uppercase sm:text-7xl font-bold text-gray-900 mb-4">
            new collections / <br /> latest developments /<br />
            breaking news / <br /> collabs /
          </h2>
        </div>

        <div
          className="flex flex-col sm:w-full w-full"
          data-scroll
          data-scroll-speed="3"
        >
          <h2 className="text-3xl tracking-wide mb-3 font-semibold">
            Signup our newsletter
          </h2>
          <form onSubmit={handleSubmit} className="flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 sm:p-6 w-full border bg-transparent border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <button
              type="submit"
              className="bg-black text-white p-3 w-48 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              By subscribing, you agree to our{" "}
              <a href="/terms" className="text-blue-600 hover:underline">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
