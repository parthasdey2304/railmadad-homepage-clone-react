import React, { useState } from 'react';

function Navigation() {
  const [activeIndex, setActiveIndex] = useState(null);

  const navItems = [
    { icon: '🚂', label: 'Train' },
    { icon: '🏢', label: 'Station' },
    { icon: '👍', label: 'Appreciation' },
    { icon: '❓', label: 'Enquiry' },
    { icon: '🔍', label: 'Track Your Concern' },
    { icon: '💡', label: 'Suggestions' },
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <nav className="bg-gray-100 p-4 w-1/4">
      <ul className="space-y-4">
        {navItems.map((item, index) => (
          <li 
            key={index} 
            className={`flex items-center space-x-2 p-2 rounded shadow cursor-pointer transition-colors duration-200 ${
              index === activeIndex ? 'bg-purple-800 text-white' : 'bg-white text-black'
            }`}
            onClick={() => handleClick(index)}
          >
            <span className="text-2xl">{item.icon}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
