import React, { useState, useEffect } from "react";

// Define an array of images with their URLs
const images = [
  {
    img: "https://images.unsplash.com/photo-1683912568493-9a6a94aacfe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1684407261522-48ad66a060e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1600834493561-9132e1819f51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1684071270645-c7516acf0bf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
];

// Define the ImageSliderTwo functional component
const ImageSliderTwo = () => {
  // State to keep track of the current displayed image index and whether the mouse is hovering
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // useEffect hook to handle the image slider functionality
  useEffect(() => {
    let intervalId;

    // If not hovered, set an interval to automatically change the displayed image
    if (!isHovered) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
    }

    // Clean up the interval on unmount or if the hover state changes
    return () => clearInterval(intervalId);
  }, [currentImageIndex, isHovered]);

  return (
    <div className="">
      {/* Display the current image */}
      <img
        src={images[currentImageIndex].img}
        alt={`Image ${currentImageIndex + 1}`}
        className="w-full h-[400px] rounded-lg shadow-lg"
        // Event handlers to pause the auto slideshow when hovering the image
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
};

export default ImageSliderTwo;
