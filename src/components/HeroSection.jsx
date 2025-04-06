import React from 'react';


const caps = [
  { name: 'White Hat', icon: 'Hat.svg', color: 'bg-white' },
  { name: 'Red Hat', icon: 'Hat.svg', color: 'bg-red-500' },
  { name: 'Black Hat', icon: 'Hat.svg', color: 'bg-gray-900' },
  { name: 'Yellow Hat', icon: 'Hat.svg', color: 'bg-yellow-400' },
  { name: 'Green Hat', icon: 'Hat.svg', color: 'bg-green-500' },
];

const HeroSection = () => {
    return (
      <section className="relative h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center text-center">

        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Edward de Bono's Six Thinking Hats
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-12">
          A powerful tool for group discussion and individual thinking involving six different perspectives
        </p>
  
        <div className="relative w-96 h-96">
    
          {caps.map((cap, index) => (
            <div
              key={cap.name}
              className="absolute w-full h-full animate-rotate"
              style={{
                transformOrigin: 'center center',
                animationDelay: `${index * 0.5}s`, 
              }}
            >
              <div
                className={`absolute w-16 h-16 rounded-full ${cap.color} flex items-center justify-center shadow-lg border-2 border-white ${cap.flyClass}`}
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${
                    (index * 360) / caps.length
                  }deg) translate(150px) rotate(-${(index * 360) / caps.length}deg)`,
                }}
              >
                <img
                  src={cap.icon}
                  alt={`${cap.name} Icon`}
                  className="h-10 w-10"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default HeroSection;