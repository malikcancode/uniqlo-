import React, { useEffect, useState } from "react";

function FollowCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorOffset = { x: 20, y: 20 };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX + cursorOffset.x,
        y: e.clientY + cursorOffset.y,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-screen hidden sm:block overflow-hidden">
      <div
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          position: "fixed",
          width: "20px",
          height: "20px",
          backgroundColor: "black",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 50,
        }}
      />
    </div>
  );
}

export default FollowCursor;
