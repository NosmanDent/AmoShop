import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Slide component represents each individual slide in the Slider
const Slide = ({ item }) => {
  // Inline styles for the slide
  const styles = {
    backgroundImage: `url(${item.img})`, // Set background image using the item's img property
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    display: "absolute", // Display style set to absolute
    opacity: 1, // Initial opacity set to 1
  };

  return (
    <div className="relative inline-block w-full h-[480px]" style={styles}>
      {/* Overlay with background color */}
      <div className="w-full h-[480px] absolute top-0 left-0 bg-black/50">
        {/* Slide content */}
        <div className="flex flex-col flex-1 gap-2 md:ml-16 md:items-start items-center md:mt-[300px] mt-[200px] ">
          <h1 className="md:text-4xl text-2xl font-bold text-white">
            {item.title} {/* Slide title */}
          </h1>
          <h1 className="font-bold text-white md:text-normal text-sm ">
            {item.titleSecond} {/* Secondary title */}
          </h1>
          {/* Link to the "shop" page */}
          <Link to="shop">
            <button
              className="bg-blue-700 hover:bg-white/10 text-white text-bold py-3 rounded-md px-6 text-sm
                w-[200px] flex flex-1  font-bold tracking-tighter items-center justify-center"
            >
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Slider component represents a carousel/slider of slides
const Slider = ({ slides }) => {
  // State to keep track of the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to manage the translation value for slide movement
  const [translateValue, setTranslateValue] = useState(0);

  // Function to handle click on dots (slide indicators)
  const handlseDotClick = (index) => {
    setCurrentIndex(index);
    // Calculate the new translate value based on the clicked dot index
    if (index === 0) {
      setTranslateValue(0);
    } else {
      let t = index * 100;
      setTranslateValue(-t);
    }
  };

  // Automatic slide transition with setInterval and useEffect
  useEffect(() => {
    let slider = setInterval(() => {
      if (currentIndex < slides.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setTranslateValue(-(currentIndex + 1) * 100);
      } else {
        setCurrentIndex(0);
        setTranslateValue(0);
      }
    }, 10000); // Slide transition interval: 10 seconds

    // Clean up the interval when the component unmounts or currentIndex changes
    return () => {
      clearInterval(slider);
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full overflow-hidden whitespace-nowrap">
      {/* Slide container */}
      <div
        className="realtive w-[100%]"
        style={{
          transform: `translateX(${translateValue}%)`, // Slide movement based on translateValue
          transition: "transform ease-out 0.4s", // Slide transition with ease-out effect and duration of 0.4s
          display: "hidden", // Initial display set to hidden (may be a typo, should be "display: hidden"?)
        }}
      >
        {/* Render each slide */}
        {slides.map((item) => {
          return <Slide key={item.id} item={item} />; // Pass the item object to the Slide component
        })}
      </div>
    </div>
  );
};

export default Slider;
