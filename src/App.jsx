import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import Home from "./pages/Home";
import CountUp from "./components/CountUp";
import Designs from "./pages/Designs";
import MainLayout from "./pages/MainLayout";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      getDirection: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading && (
        <div className="fixed inset-0 z-[9999] bg-zinc-900 text-zinc-100 flex items-end justify-end p-4">
          <CountUp
            from={0}
            to={100}
            separator=","
            direction="up"
            duration={1}
            className="text-4xl sm:text-6xl xl:text-9xl font-bold"
          />
          UNIQLO
        </div>
      )}

      <div data-scroll-container className="h-full">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/designs" element={<Designs />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
