import React, { useState, useRef } from "react";

// Define the CardRowTwo functional component
function CardRowTwo({ slidesTwo = [] }) {
  // State to manage the clicked state of each slide
  const [clicked, setClicked] = useState(Array(slidesTwo.length).fill(false));

  // Function to handle the click event on a slide
  const handleClick = (index) => {
    setClicked((prevState) => {
      // Create a new array by cloning the previous state
      const newState = [...prevState];
      // Toggle the clicked state of the slide at the given index
      newState[index] = !newState[index];
      return newState;
    });
  };

  // JSX rendering of the component
  return (
    <div className="relative">
      {/* Container for the slides */}
      <div className="flex flex-row items-center mx justify-center pb-6 gap-2">
        {slidesTwo.map((slide, index) => (
          // Each slide element
          <div
            key={index}
            className={`h-[400px] w-[100px] bg-gray-300 rounded-lg relative inline-block cursor-pointer  ${
              // Apply transition to the width when clicked
              clicked[index]
                ? "w-[500px] transition-all duration-700 ease-in-out"
                : "transition-all duration-700 ease-in-out"
            }`}
            onClick={() => handleClick(index)}
          >
            {/* Slide image */}
            <img
              src={slide.img}
              alt={slide.alt}
              className="w-full h-full object-cover rounded-lg cursor-pointer"
            />
            {/* Overlay with slide information */}
            <div className="w-full px-2  h-full absolute top-0 rounded-lg gap-2 left-0 bg-black/50 flex flex-col flex-1 items-center justify-center text-center">
              <h1 className="text-white font-serif font-bold bg-black/70 py-2 px-3 rounded-xl text-xs">
                {slide.title}
              </h1>
              <h1 className="text-white font-bold text-xs">${slide.price}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardRowTwo;
