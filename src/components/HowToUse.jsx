import React from "react";

const steps = [
  {
    title: "Define the Focus",
    description: "Clearly state the problem or decision to be made.",
  },
  {
    title: "Choose a Hat",
    description: "Think while exploring the perspective of the chosen hat.",
  },
  {
    title: "Think 5 Categories",
    description: "Consider all aspects from the perspective of the hat.",
  },
  {
    title: "Switch Hats",
    description: "Move to another perspective when ready.",
  },
  {
    title: "Summarize",
    description: "Collect insights from all perspectives.",
  },
  {
    title: "Take Action",
    description: "Make decisions based on comprehensive thinking.",
  },
];

const HowToUse = () => {
  return (
    <section className="mt-16 text-center px-[5rem] bg-gray-100 p-6 rounded-lg shadow-md w-[90%] mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 pb-[3rem]">
        How to Use the Method
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="flex flex-col items-center space-y-4"
          >
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-900 text-white">
                {index + 1}
              </span>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToUse;
