import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="bg-black text-white w-full min-h-full overflow-x-hidden">
      {/* Marquee Text */}
      <motion.div
        className="overflow-hidden"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          x: { repeat: Infinity, duration: 20, ease: "linear" },
        }}
      >
        <div className="whitespace-nowrap py-4 text-lg sm:text-2xl font-bold text-center">
          Design . Development . Production . Design . Development . Production
          . Design . Development . Production.
        </div>
      </motion.div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto py-16 px-6 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center sm:items-start justify-center mb-8">
            <div className="flex gap-4 items-center mb-1">
              <img
                className="w-20 h-20 object-cover"
                src="/favicon.png"
                alt="Logo"
              />
              <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center sm:text-left">
                Say Hi!
              </h2>
            </div>
            <div className="text-lg sm:text-xl text-gray-400 text-center sm:text-left">
              contact@yourdomain.com
            </div>
          </div>

          {/* Middle Grid: Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4">
            <div>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/"
                    className="text-lg sm:text-xl text-gray-400 hover:text-white"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-lg sm:text-xl text-gray-400 hover:text-white"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-lg sm:text-xl text-gray-400 hover:text-white"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-lg sm:text-xl text-gray-400 hover:text-white"
                  >
                    Production
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/"
                    className="text-lg sm:text-xl text-gray-400 hover:text-white"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-lg sm:text-xl text-gray-400 hover:text-white"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-lg sm:text-xl text-gray-400 hover:text-white"
                  >
                    Design
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Grid: Social Media & Other Links */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex gap-4 mb-6">
              <a
                href="/"
                className="text-lg sm:text-xl text-gray-400 hover:text-white"
              >
                Facebook
              </a>
              <a
                href="/"
                className="text-lg sm:text-xl text-gray-400 hover:text-white"
              >
                Twitter
              </a>
              <a
                href="/"
                className="text-lg sm:text-xl text-gray-400 hover:text-white"
              >
                Instagram
              </a>
            </div>
            <div className="text-lg sm:text-xl text-gray-400 text-center sm:text-left">
              &copy; 2025 YourCompany. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
