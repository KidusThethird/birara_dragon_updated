// app/components/main_components.tsx
"use client";
import React from "react";
import Image from "next/image";

// Manually defined array of 20 items (images with short text)
const items = [
  {
    id: 1,
    image: "/homepageImages/01.jpeg",
    text: "Archtechural design",
  },
  {
    id: 2,
    image: "/homepageImages/02.jpeg",
    text: "Flooring Solution",
  },
  {
    id: 3,
    image: "/homepageImages/03.jpeg",
    text: "Sanitary Ware",
  },
  {
    id: 4,
    image: "/homepageImages/04.jpeg", // Updated to match the pattern
    text: "Kitchen Cabinetry ",
  },
  {
    id: 5,
    image: "/homepageImages/05.jpeg", // Updated to match the pattern
    text: "Wardrobe Walkin",
  },
  {
    id: 6,
    image: "/homepageImages/06.jpeg", // Updated to match the pattern
    text: "Aluminum Products",
  },
  {
    id: 7,
    image: "/homepageImages/07.jpeg", // Updated to match the pattern
    text: "Modern Doors",
  },
  {
    id: 8,
    image: "/homepageImages/08.jpeg", // Updated to match the pattern
    text: "Staircases",
  },
  {
    id: 9,
    image: "/homepageImages/09.jpeg", // Updated to match the pattern
    text: "Electrical Solutions",
  },
  {
    id: 10,
    image: "/homepageImages/10.jpeg", // Updated to match the pattern
    text: "Wall Decoration",
  },
  {
    id: 24,
    image: "/homepageImages/23.jpeg", // Updated to match the pattern
    text: "Home Appliance",
  },
  {
    id: 11,
    image: "/homepageImages/11.jpeg", // Updated to match the pattern
    text: "Coating",
  },

  {
    id: 13,
    image: "/homepageImages/12.jpeg", // Updated to match the pattern
    text: "Gypsum Member",
  },
  {
    id: 14,
    image: "/homepageImages/13.jpeg", // Updated to match the pattern
    text: "Stainless Steel",
  },
  {
    id: 15,
    image: "/homepageImages/14.jpeg", // Updated to match the pattern
    text: "Smaert Lock",
  },
  {
    id: 16,
    image: "/homepageImages/15.jpeg", // Updated to match the pattern
    text: "Elevator",
  },
  {
    id: 17,
    image: "/homepageImages/16.jpeg", // Updated to match the pattern
    text: "Light Steel House",
  },
  {
    id: 18,
    image: "/homepageImages/17.jpeg", // Updated to match the pattern
    text: "Aluminum Celling",
  },
  {
    id: 19,
    image: "/homepageImages/18.jpeg", // Updated to match the pattern
    text: "Fire Place",
  },
  {
    id: 20,
    image: "/homepageImages/19.jpeg", // Updated to match the pattern
    text: "Curtian Fabric",
  },
  {
    id: 21,
    image: "/homepageImages/20.jpeg", // Updated to match the pattern
    text: "Roof Tiles",
  },
  {
    id: 22,
    image: "/homepageImages/21.jpeg", // Updated to match the pattern
    text: "Furniture",
  },
  {
    id: 23,
    image: "/homepageImages/22.jpeg", // Updated to match the pattern
    text: "House Hold",
  },
];

export default function Mainservices() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Title and Subtitle Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Collection
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated selection of 20 unique items, each designed to
            inspire and elevate your space.
          </p>
        </div>
      </section>

      {/* Grid of Images */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center text-center"
              >
                {/* Image with Hover Scale Effect */}
                <div className="relative w-full aspect-square overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                  <Image
                    src={item.image}
                    alt={item.text}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => (e.currentTarget.src = "/placeholder.jpg")} // Fallback image
                  />
                </div>

                {/* Short Text Below Image */}
                <p className="mt-4 text-base text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
