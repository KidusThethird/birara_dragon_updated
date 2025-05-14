"use client";
import React, { useEffect } from "react";
import { Activity, LifeBuoy, Footprints, Home, Building } from "lucide-react";
import Navbar from "../components/common_components/navbar";

// Sample data for core offerings with assigned icons
const industries = [
  {
    id: 1,
    title: "Medical Supplies & Equipment",
    description:
      "Premium medical scrubs, diagnostic tools, surgical instruments, and hospital-grade equipment.",
    icon: Activity,
  },
  {
    id: 2,
    title: "Building Materials & Construction",
    description:
      "High-quality tiles, roofing, windows, doors, and structural materials for various projects.",
    icon: Building,
  },
  {
    id: 3,
    title: "Machinery & Technology Equipment",
    description:
      "Advanced automobiles, heavy machinery, industrial electronics, and IT infrastructure.",
    icon: LifeBuoy,
  },
  {
    id: 4,
    title: "Fashion & Beauty",
    description:
      "Stylish clothing, accessories, and 100% human hair products meeting global trends.",
    icon: Footprints,
  },
  {
    id: 5,
    title: "Home & Commercial Furnishings",
    description:
      "Modern and durable furniture solutions for residential, commercial, and hospitality spaces.",
    icon: Home,
  },
  {
    id: 6,
    title: "Business Consulting & Trade Solutions",
    description:
      "Expert guidance in procurement, logistics, compliance, and international trade operations.",
    icon: Activity,
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
        <section className="bg-gradient-to-r pt-40 from-sky-800 to-sky-900 text-white py-20 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl font-extrabold mb-4">
              About Us
            </h1>
            <p className="text-lg max-w-3xl mx-auto">
              At Birara Dragon Bridge General Trading, we redefine global trade
              by delivering exceptional products and world-class services to
              every corner of the world. With a presence across five continents,
              we bridge markets through seamless logistics, competitive pricing,
              and sustainable solutions. Our commitment to quality and
              reliability has established us as a trusted partner for
              governments, multinational corporations, the United Nations, and
              private sectors worldwide.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
              We are a global trading company specializing in high-quality
              sourcing, international tenders, and turnkey project solutions.
              Our extensive network enables us to supply products and services
              anywhere in the world, ensuring our clients receive the best,
              regardless of location. We proudly participate in government
              projects, United Nations initiatives, and large-scale
              infrastructure developments.
            </p>
          </div>
        </section>

        {/* Core Offerings */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Core Offerings
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry) => (
                <div
                  key={industry.id}
                  className="bg-white hover:scale-105 cursor-pointer rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="mb-4 w-20 h-20 relative">
                    <industry.icon size={80} className="mx-auto text-sky-900" />
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

        {/* Global Reach */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Global Reach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Global Excellence in Tender Projects
                </h3>
                <p className="text-gray-600">
                  We are proud to be key players in high-value tender projects
                  worldwide, spanning infrastructure development, healthcare,
                  urban construction, and industrial projects.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Delivering Worldwide
                </h3>
                <p className="text-gray-600">
                  From Dubai to New York, Addis Ababa to Shanghai, we deliver to
                  every region of the world. Our projects include government
                  contracts, United Nations initiatives, and global tenders
                  across Africa, Europe, the Middle East, Asia, and the
                  Americas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Truly Global Reach",
                  description:
                    "We deliver anywhere in the world—no borders, no limits.",
                },
                {
                  title: "Competitive Pricing",
                  description:
                    "Direct sourcing from manufacturers for the best prices.",
                },
                {
                  title: "End-to-End Solutions",
                  description:
                    "Complete service from procurement to installation and after-sales support.",
                },
                {
                  title: "Sustainable Practices",
                  description:
                    "Committed to eco-friendly materials and responsible sourcing.",
                },
                {
                  title: "On-Time Delivery",
                  description:
                    "Proven track record of meeting deadlines with efficiency and reliability.",
                },
                {
                  title: "Trusted by Global Leaders",
                  description:
                    "Delivering for major projects that shape communities.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 text-center"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Statement */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h2>
            <div className="space-y-4">
              <p className="mission-text text-lg text-gray-700">
                <strong>Mission Statement:</strong> To connect the world through
                trade by delivering high-quality products, competitive pricing,
                and unmatched service bridging global markets and empowering
                communities.
              </p>
              <p className="mission-text text-lg text-gray-700">
                <strong>Vision Statement:</strong> To become the world’s leading
                general trading company, recognized for our global reach,
                sustainable practices, and commitment to excellence.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
