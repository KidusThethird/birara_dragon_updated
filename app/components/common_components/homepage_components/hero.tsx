"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const slides = [
    {
      image: "/hero/hero1.jpeg",
      title: "Providing One-stop Solutions",
      description: "European design, Master Bedroom, Living Room, Bathroom",
    },
    {
      image: "/hero/hero2.jpeg",
      title: "Unmatched Quality",
      description: "Premium products",
    },
    {
      image: "/hero/hero3.jpeg",
      title: "Join Community",
      description: "Be part of us",
    },
    {
      image: "/hero/hero4.jpeg",
      title: "Empower Future",
      description: "Innovate today",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={`Hero slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0} // Prioritize the first image for faster loading
          />
          <div className="mx-9 absolute top-0 left-0 h-full w-1/2  flex flex-col justify-center text-white pl-6 pr-4">
            <h1 className="text-xl md:text-4xl  mb-2 text-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-lg md:text-6xl font-bold text-shadow-lg">
              {slide.description}
            </p>
          </div>
        </div>
      ))}
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
