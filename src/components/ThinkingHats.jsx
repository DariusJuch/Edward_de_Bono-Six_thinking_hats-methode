import React, { useState, useEffect, useRef } from "react";
import { GiWesternHat } from "react-icons/gi";
import Modal from "./Modal";

const hats = [
  {
    name: "White Hat",
    description: "Facts, figures, and objective information",
    color: "#ffffff",
    items: [
      "Aš mokausi TECHIN – Vilniaus technologijų mokymo centre",
      "Mano specialybė – Full Stack programuotojas",
      "Pagrindinės programavimo kalbos tai Java ir JavaScript",
      "Taip pat mokausi kitų programavimo kalbų ir technologijų, tokių kaip: HTML, CSS, React, SQL, Git/GitHub, Java, Spring boot",
      "Esu kūręs įvairius projektus",
      "Naudoju tokias priemones kaip: Visual Studio Code, GitHub, Postman, Figma, MongoDB, MySQL, IntelliJ",
    ],
  },
  {
    name: "Red Hat",
    description: "Feelings, hunches, and intuition",
    color: "#ef4444",
    items: [
      "Jaučiu, kad IT ir programavimas yra mano sritis – tai įdomu ir motyvuoja",
      "Programavimas man patinka, ypač kai matau realius rezultatus",
      "Kartais būna sunku ir jaučiu spaudimą, ypač kai trūksta laiko ar kyla klaidų",
      "Kai viskas pavyksta, jaučiu pasididžiavimą savimi",
      "Nors kartais kyla abejonių, viduje tikiu, kad einu teisingu keliu",
    ],
  },
  {
    name: "Black Hat",
    description: "Criticism and potential problems",
    color: "#111827",
    items: [
      "Kartais sunku suprasti sudėtingas temas iš pirmo karto",
      "Programavimo klaidų paieška gali būti varginanti",
      "Laiko stoka ir užduočių kiekis kelia stresą",
      "Ne visada aišku, kaip teoriją pritaikyti praktikoje",
      "Komandinis darbas ne visada sklandus – reikia derintis prie kitų",
    ],
  },
  {
    name: "Yellow Hat",
    description: "Benefits and positive aspects",
    color: "#facc15",
    items: [
      "IT sritis labai perspektyvi – daug karjeros galimybių",
      "Full Stack žinios leidžia kurti visapusiškus projektus",
      "Įgūdžiai pritaikomi tiek Lietuvoje, tiek užsienyje",
      "Kiekvienas išmoktas dalykas stiprina pasitikėjimą savimi",
    ],
  },
  {
    name: "Green Hat",
    description: "Creativity and new ideas",
    color: "#22c55e",
    items: [
      "Mokytis programuoti per žaidimus",
      "Projektai su realiais klientais",
      "Pridėti kibernetinio saugumo mokymus",
    ],
  },
  {
    name: "Blue Hat",
    description: "Process control and organization",
    color: "#0000FF",
    items: [
      "Planuoju papildyti studijas kibernetinio saugumo mokymais, kad galėčiau kurti saugias aplikacijas",
      "Full Stack žinios ir saugumo įgūdžiai leis sukurti tvirtesnes ir patikimesnes sistemas.",
      "Nuolat sekti naujas technologijas ir praktikuoti savo žinias.",
      "Bendradarbiavimas su kitais specialistais padės tobulėti ir kurti geresnius sprendimus.",
    ],
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
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${
          isVisible ? "animate-fly-in" : "invisible"
        }`}
      >
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
              items={hat.items}
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
