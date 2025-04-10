import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { GiWesternHat } from "react-icons/gi";

const caps = [
  { name: "White Hat", color: "#ffffff" },
  { name: "Red Hat", color: "#ef4444" },
  { name: "Black Hat", color: "#111827" },
  { name: "Yellow Hat", color: "#facc15" },
  { name: "Green Hat", color: "#22c55e" },
  { name: "Blue Hat", color: "#0000FF"}
];

const HeroSection = () => {
  const [currentHat, setCurrentHat] = useState(0);
  const [isFlying, setIsFlying] = useState(false);
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlying(true);
      setTimeout(() => {
        setCurrentHat((prev) => (prev + 1) % caps.length);
        setIsFlying(false);
        setIsJumping(true);
        setTimeout(() => setIsJumping(false), 300);
      }, 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Edward de Bono's Six Thinking Hats
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-12">
        A powerful tool for group discussion and individual thinking involving
        six different perspectives
      </p>

      <div className="relative w-96 h-96 flex flex-col items-center">
        <div className="relative w-32 h-48">
          <div
            className={`absolute w-full h-full transition-all duration-300 ${
              isJumping ? "translate-y-[-10px]" : "translate-y-0"
            }`}
            style={{
              animation: "sway 2s infinite ease-in-out",
            }}
          >
            <FaUser
              className="absolute text-gray-400"
              style={{
                width: "20rem",
                height: "18rem",
                top: "122%",
                left: "50%",
                transform: "translate(-50%, -30%)",
                color: "#FFA500"
              }}
            />
          </div>
          <GiWesternHat
            className="absolute transition-all duration-1000 ease-in-out"
            style={{
              top: isFlying ? "100px" : "0",
              left: isFlying
                ? currentHat % 2 === 0
                  ? "-300px"
                  : "200px"
                : "50%",
              transform: isFlying ? "translateX(0)" : "translateX(-50%)",
              width: "15rem",
              height: "15rem",
              color: caps[currentHat].color,
              filter: "drop-shadow(0 0 5px rgba(0,0,0,0.2))",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
