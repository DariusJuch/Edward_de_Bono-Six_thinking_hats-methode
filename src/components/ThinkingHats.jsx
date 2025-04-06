import React from 'react';

const hats = [
  { name: 'White Hat', description: 'Facts, figures, and objective information', icon: 'white-hat-icon.png' },
  { name: 'Red Hat', description: 'Feelings, hunches, and intuition', icon: 'red-hat-icon.png' },
  { name: 'Black Hat', description: 'Criticism and potential problems', icon: 'black-hat-icon.png' },
  { name: 'Yellow Hat', description: 'Benefits and positive aspects', icon: 'yellow-hat-icon.png' },
  { name: 'Green Hat', description: 'Creativity and new ideas', icon: 'green-hat-icon.png' },
  { name: 'Blue Hat', description: 'Process control and organization', icon: 'blue-hat-icon.png' },
];

const ThinkingHats = () => {
  return (
    <section className="text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hats.map((hat) => (
          <div key={hat.name} className="bg-white p-6 rounded-lg shadow-md">
            <img src={hat.icon} alt={`${hat.name} Icon`} className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">{hat.name}</h3>
            <p className="text-gray-600 mt-2">{hat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThinkingHats;