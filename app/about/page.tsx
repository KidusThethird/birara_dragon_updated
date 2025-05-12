// app/components/AboutUs.tsx
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/common_components/navbar";

// Sample data for industry highlights
const industries = [
  {
    id: 1,
    title: "Medical Supplies",
    description:
      "High-quality scrubs and equipment for healthcare professionals.",
    image: "/icons/medical.png", // Replace with your medical icon/image path
  },
  {
    id: 2,
    title: "Machinery & Electronics",
    description:
      "Latest automobiles and heavy machinery with cutting-edge technology.",
    image: "/icons/machinery.png", // Replace with your machinery icon/image path
  },
  {
    id: 3,
    title: "Fashion",
    description: "Stylish clothing, accessories, and 100% human hair products.",
    image: "/icons/fashion.png", // Replace with your fashion icon/image path
  },
  {
    id: 4,
    title: "Furnishings",
    description: "Modern furnishings for residential and commercial spaces.",
    image: "/icons/furniture.png", // Replace with your furniture icon/image path
  },
  {
    id: 5,
    title: "Consulting",
    description: "Expert services to optimize operations and boost efficiency.",
    image: "/icons/consulting.png", // Replace with your consulting icon/image path
  },
];

export default function AboutUs() {
  // Animation effect for mission text
  useEffect(() => {
    const missionText = document.querySelectorAll(".mission-text");
    missionText.forEach((text, index) => {
      text.classList.add("opacity-0");
      setTimeout(() => {
        text.classList.remove("opacity-0");
        text.classList.add("opacity-100");
      }, index * 200); // Staggered animation with 200ms delay per line
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-sky-500 text-white py-20 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              About Us
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Discover the heart of Birara Dragon Bridge General Trading, where
              quality and innovation meet across diverse industries.
            </p>
          </div>
        </section>

        {/* Industry Highlights */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Industries
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry) => (
                <div
                  key={industry.id}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="mb-4 w-20 h-20 relative">
                    <Image
                      src={industry.image}
                      alt={`${industry.title} icon`}
                      width={80}
                      height={80}
                      className="object-contain"
                      onError={(e) =>
                        (e.currentTarget.src = "/placeholder.jpg")
                      } // Fallback image
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 text-base">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <div className="space-y-4">
              <p className="mission-text text-lg text-gray-700">
                At Birara Dragon Bridge General Trading, our mission is to
                enhance lives and empower businesses by delivering high-quality
                products and exceptional services across a wide range of
                sectors.
              </p>
              <p className="mission-text text-lg text-gray-700">
                We are committed to sourcing and supplying everything from
                medical supplies and advanced machinery to fashionable apparel
                and modern furnishings.
              </p>
              <p className="mission-text text-lg text-gray-700">
                Through innovative solutions and expert consulting, we strive to
                foster growth, optimize operations, and connect our customers
                with the best global suppliers.
              </p>
              <p className="mission-text text-lg text-gray-700">
                Our dedication to quality, reliability, and customer
                satisfaction drives us to be a trusted partner in every
                endeavor, ensuring that we meet the evolving needs of our
                clients with integrity and excellence.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
