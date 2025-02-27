import React, { useState, useEffect } from 'react';

const carouselData = [
  {
    title: 'Basic Plan',
    price: '$19.99',
    description: 'Great for small businesses',
  },
  {
    title: 'Standard Plan',
    price: '$49.99',
    description: 'Perfect for growing teams',
  },
  {
    title: 'Premium Plan',
    price: '$99.99',
    description: 'All features included',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = carouselData.length;

  // Set up interval to auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [totalItems]);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Carousel container */}
      <div className="overflow-hidden rounded-lg shadow-lg">
        {/* Carousel slides */}
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {carouselData.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4 py-8 bg-white text-center border-r">
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-4xl font-bold text-yellow-500">{item.price}</p>
              <p className="mt-4 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel navigation buttons */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
        <button
          className="p-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-700"
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems)}
        >
          &lt;
        </button>
        <button
          className="p-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-700"
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
