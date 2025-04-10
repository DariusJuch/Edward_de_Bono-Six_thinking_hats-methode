import React, { useState, useEffect, useRef } from "react";
import { GiWesternHat } from "react-icons/gi";
import Modal from "./Modal";

const hats = [
  {
    name: "White Hat",
    description: "Facts, figures, and objective information",
    color: "#ffffff",
  },
  {
    name: "Red Hat",
    description: "Feelings, hunches, and intuition",
    color: "#ef4444",
  },
  {
    name: "Black Hat",
    description: "Criticism and potential problems",
    color: "#111827",
  },
  {
    name: "Yellow Hat",
    description: "Benefits and positive aspects",
    color: "#facc15",
  },
  {
    name: "Green Hat",
    description: "Creativity and new ideas",
    color: "#22c55e",
  },
  {
    name: "Blue Hat",
    description: "Process control and organization",
    color: "#0000FF",
  },
];

const ThinkingHats = () => {
  const [rotating, setRotating] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) modal.showModal();
  };

  const handleMouseEnter = (hatName) => {
    if (rotating !== hatName) {
      setRotating(hatName);
      setTimeout(() => setRotating(null), 1000);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="text-center w-[60%] mx-auto">
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${isVisible ? 'animate-fly-in': 'invisible'}`}>
        {hats.map((hat) => (
          <div
            key={hat.name}
            className={`bg-gray-100 p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition-colors ${
              rotating === hat.name ? "animate-rotateY" : ""
            }`}
            onClick={() => openModal(`modal-${hat.name.replace(/\s+/g, "-")}`)}
            onMouseEnter={() => handleMouseEnter(hat.name)}
          >
            <GiWesternHat
              className="h-12 w-12 mx-auto mb-4"
              style={{
                color: hat.color,
                filter: "drop-shadow(0 0 2px rgba(0,0,0,0.3))",
              }}
            />
            <h3 className="text-xl font-semibold text-gray-900">{hat.name}</h3>
            <p className="text-gray-600 mt-2">{hat.description}</p>
            <Modal
              modalName={`modal-${hat.name.replace(/\s+/g, "-")}`}
              style="p-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {hat.name}
              </h3>
              <p className="text-gray-600">{hat.description}</p>
              <GiWesternHat
                className="h-16 w-16 mx-auto mt-4"
                style={{
                  color: hat.color,
                  filter: "drop-shadow(0 0 2px rgba(0,0,0,0.3))",
                }}
              />
            </Modal>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThinkingHats;
