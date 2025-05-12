// app/components/Ourservices.tsx
"use client";
import React from "react";
import Image from "next/image";

// Sample data for services
const services = [
  {
    id: 1,
    icon: "/icons/002.png",
    title: "Floor plan",
    number: "01",
  },
  {
    id: 2,
    icon: "/icons/001.png",
    title: "Decoration Style",
    number: "02",
  },
  {
    id: 3,
    icon: "/icons/004.png",
    title: "Mood Board",
    number: "03",
  },
  {
    id: 4,
    icon: "/icons/007.png",
    title: "3D Render",
    number: "04",
  },
  {
    id: 5,
    icon: "/icons/005.png",
    title: "BOQ",
    number: "05",
  },
  {
    id: 6,
    icon: "/icons/003.png",
    title: "Production",
    number: "06",
  },
  {
    id: 7,
    icon: "/icons/004.png",
    title: "Loading",
    number: "07",
  },
  {
    id: 8,
    icon: "/icons/001.png",
    title: "After Sales",
    number: "08",
  },
];

export default function Ourservices() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Explore the comprehensive range of services we offer to bring your
            vision to life, from planning to after-sales support.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 flex">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid cursor-pointer grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                {/* Service Icon with Flip Effect */}
                <div className="mb-3">
                  <Image
                    src={service.icon}
                    alt={`${service.title} icon`}
                    width={64}
                    height={64}
                    className="mx-auto transform [transform-style:preserve-3d] transition-transform duration-500 hover:[transform:rotateY(180deg)]"
                    onError={(e) => (e.currentTarget.src = "/placeholder.jpg")} // Fallback image
                  />
                </div>

                {/* Service Number */}
                <span className="text-gray-900 mb-2">{service.number}</span>

                {/* Service Title */}
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
