"use client";
import Image from "next/image";
import { useState } from "react";
import leftArrow from "../../public/left-arrow.png"; // Adjust the path as necessary
import rightArrow from "../../public/right-arrow.png"; // Adjust the path as necessary

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="relative w-full overflow-hidden mt-10"
      style={{ height: "600px" }}
    >
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full object-cover"
              style={{
                height: "600px",
                objectFit: "contain",
                borderRadius: "5px",
              }}
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300 z-10"
      >
        <Image src={leftArrow} alt="Previous" width={24} height={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300 z-10"
      >
        <Image src={rightArrow} alt="Next" width={24} height={24} />
      </button>
    </div>
  );
};

export default Carousel;
