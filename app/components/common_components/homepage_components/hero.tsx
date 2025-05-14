"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const slides = [
    {
      image: "/hero/hero3.jpeg",
      title: "Furniture",
      description:
        "Offering a diverse range of high-quality furniture for homes, offices, and commercial spaces, including modern, classic, and custom designs to suit every style and need.",
    },
    {
      image: "/hero/hero4.jpeg",
      title: "Building Materials",
      description:
        "Providing durable, high-quality building materials like cement, steel, and timber for construction and renovation projects.",
    },
    {
      image: "/hero/img05.jpg",
      title: "Medical Supplies & Equipment",
      description:
        "Supplying a wide range of medical products, including medial diagnostic machineries, premium-quality scrubs for top brands, medical devices, and essential equipment for hospitals and clinics.",
    },
    {
      image: "/hero/img07.jpg",
      title: "Cars, Machinery & Electronics",
      description:
        "Sourcing and providing automobiles, heavy machinery, and electronics for industrial, commercial, and personal use, including advanced technology and gadgets.",
    },

    {
      image: "/hero/img01.jpg",
      title: "Coffee Beans and oil seeds Importer",
      description:
        "We specialize in the import of exceptional Ethiopian coffee and a range of high-quality oil seeds.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
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
          <div className="absolute top-0 left-0 h-full w-full sm:w-1/2 flex flex-col justify-center text-sky-900 px-4 sm:pl-6 sm:pr-4 mx-auto max-w-[90%] sm:max-w-[50%]">
            <div
              className=" space-y-5 p-6 rounded"
              style={{ backgroundColor: "rgba(12, 74, 110, 0.7)" }}
            >
              <h1 className="text-3xl text-white sm:text-5xl font-semibold font-serif">
                {" "}
                {slide.title}
              </h1>
              <p className="text-xl text-white sm:text-xl">
                {slide.description}
              </p>
            </div>
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
