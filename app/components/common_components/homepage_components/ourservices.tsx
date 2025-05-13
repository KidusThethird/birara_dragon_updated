// app/components/Ourservices.tsx
"use client";
import React from "react";

// Sample data for services

export default function Ourservices() {
  return (
    <div className=" bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-800 to-sky-900 text-white py-16">
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
    </div>
  );
}
