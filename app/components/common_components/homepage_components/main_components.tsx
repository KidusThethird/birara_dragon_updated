"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Manually defined array of items with links
const items = [
  {
    id: 1,
    image: "/products/furniture/50.jpeg",
    text: "Furniture",
    link: "/products/furniture",
  },
  {
    id: 2,
    image: "/products/medical/104.jpeg",
    text: "Medical Supplies & Equipment",
    link: "/products/medical-supplies-equipment",
  },
  {
    id: 3,
    image: "/products/car/106.jpeg",
    text: "Cars, Machinery & Electronics",
    link: "/products/cars-machinery-electronics",
  },
  {
    id: 4,
    image: "/products/fashion/112.jpeg",
    text: "Fashion, Apparel & Human Hair",
    link: "/products/fashion-apparel-human-hair",
  },
  {
    id: 5,
    image: "/products/home/120.jpeg",
    text: "Home, Office, Commercial Furnishings & Building Materials",
    link: "/products/home-office-commercial-furnishings-building-materials",
  },
  {
    id: 6,
    image: "/products/general/124.jpeg",
    text: "General Trading & Wholesale Products",
    link: "/products/general-trading-wholesale-products",
  },
  {
    id: 7,
    image: "/products/business/128.jpeg",
    text: "Business Consulting & Sourcing Services",
    link: "/products/business-consulting-sourcing-services",
  },
  {
    id: 8,
    image: "/products/coffee/img06.png",
    text: "Coffee",
    link: "/products/coffee",
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
            Explore our curated selection of unique items, each designed to
            inspire and elevate your space.
          </p>
        </div>
      </section>

      {/* Grid of Images */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {items.map((item) => (
              <Link href={item.link} key={item.id} className="block">
                <div className="flex flex-col items-center text-center">
                  {/* Image with Hover Scale Effect */}
                  <div className="relative w-full aspect-square overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                    <Image
                      src={item.image}
                      alt={item.text}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover rounded-xl"
                      onError={(e) =>
                        (e.currentTarget.src = "/placeholder.jpg")
                      } // Fallback image
                    />
                  </div>

                  {/* Short Text Below Image */}
                  <p className="mt-4 text-base text-gray-700">{item.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
