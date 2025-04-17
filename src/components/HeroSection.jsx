import React, { useState, useEffect } from "react";
import { IoIosPerson } from "react-icons/io";
import { FaHatCowboy } from "react-icons/fa6";
import { motion } from "framer-motion";

const caps = [
  { name: "White Hat", color: "#ffffff" },
  { name: "Red Hat", color: "#ff0000" },
  { name: "Black Hat", color: "#000000" },
  { name: "Yellow Hat", color: "#ffd232" },
  { name: "Green Hat", color: "#147814" },
  { name: "Blue Hat", color: "#148cff" },
];

const HeroSection = () => {
  const [currentHat, setCurrentHat] = useState(0);
  const [isFlying, setIsFlying] = useState(false);
  // const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlying(true);
      setTimeout(() => {
        setCurrentHat((prev) => (prev + 1) % caps.length);
        setIsFlying(false);
      }, 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const renderAnimatedText = (text) => {
    return text.split(" ").map((word, wordIndex) => (
      <span key={wordIndex} className="word">
        {word.split("").map((char, charIndex) => (
          <span
            key={charIndex}
            className="letter"
            style={{ animationDelay: `${(wordIndex * 0.3 + charIndex * 0.05)}s` }}
          >
            {char}
          </span>
        ))}
        <span className="space"> </span> {/* Tarpas tarp žodžių */}
      </span>
    ));
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center">
    <section className="bg-[#c0ab87] rounded-lg shadow-black w-[60%] py-4 flex flex-col justify-center items-center absolute top-[4rem]">
      <h1 className="text-5xl font-bold text-[#2c2213d4] mb-4">
        {renderAnimatedText("Edward  de Bono's Six Thinking Hats")}
      </h1>
      <p className="text-lg text-[#42301b] max-w-2xl">
        {renderAnimatedText(
          "A powerful tool for group discussion and individual thinking involving six different perspectives"
        )}
      </p>
    </section>

      <div className="relative w-96 h-96 flex flex-col items-center">
        <div className="relative w-32 h-48">
          <div
          >
            <IoIosPerson
              className="absolute text-gray-400"
              style={{
                width: "25rem",
                height: "25rem",
                top: "100%",
                left: "50%",
                transform: "translate(-50%, -30%)",
                color: "#d4c4a2",
                filter: "drop-shadow(0 12px 16px rgba(0, 0, 0, 0.6)",
              }}
            />
          </div>
          <FaHatCowboy
            className="absolute transition-all duration-1000 ease-in-out"
            style={{
              top: isFlying ? "100px" : "0",
              left: isFlying
                ? currentHat % 2 === 0
                  ? "-300px"
                  : "200px"
                : "50%",
              transform: isFlying ? "translateX(0)" : "translateX(-50%)",
              width: "14rem",
              height: "12rem",
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
