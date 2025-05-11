"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full text-white py-5 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-sky-600" : "bg-transparent"
      }`}
    >
      <div className="justify-between flex w-full max-w-7xl mx-auto px-4">
        <div>
          <Image
            src="/logo/whitelogo.png"
            width={120}
            height={120}
            alt="Company logo"
          />
        </div>
        <div className="w-3/4">
          <div className="flex justify-end px-10 items-center gap-2">
            <Image
              src="/icons/email.png"
              width={20}
              height={20}
              alt="Email icon"
            />
            <h1>Email</h1>
          </div>
          <div className="flex w-3/4 justify-around relative">
            <div className="group">
              <a href="/" className="cursor-pointer hover:text-gray-200">
                Home
              </a>
            </div>
            <div className="group">
              <a
                href="/products"
                className="cursor-pointer hover:text-gray-200"
              >
                Products
              </a>
              <div className="absolute hidden group-hover:block bg-sky-700 text-white py-2 rounded-md shadow-lg min-w-[120px]">
                <a href="#" className="block px-4 py-2 hover:bg-sky-800">
                  All Products
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-sky-800">
                  Features
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-sky-800">
                  Pricing
                </a>
              </div>
            </div>
            <div className="group">
              <h1 className="cursor-pointer hover:text-gray-200">Cases</h1>
              <div className="absolute hidden group-hover:block bg-sky-700 text-white py-2 rounded-md shadow-lg min-w-[120px]">
                <a href="#" className="block px-4 py-2 hover:bg-sky-800">
                  Case Studies
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-sky-800">
                  Testimonials
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-sky-800">
                  Success Stories
                </a>
              </div>
            </div>
            <div className="group">
              <h1 className="cursor-pointer hover:text-gray-200">News</h1>
              <div className="absolute hidden group-hover:block bg-sky-700 text-white py-2 rounded-md shadow-lg min-w-[120px]">
                <a href="#" className="block px-4 py-2 hover:bg-sky-800">
                  Latest News
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-sky-800">
                  Press Releases
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-sky-800">
                  Blog
                </a>
              </div>
            </div>
            <div className="group">
              <h1 className="cursor-pointer hover:text-gray-200">About</h1>
              <div className="absolute hidden group-hover:block bg-sky-700 text-white py-2 rounded-md shadow-lg min-w-[120px]">
                <a href="#" className="block px-4 py-2 hover:bg-sky-800">
                  Our Team
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-sky-800">
                  Mission
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-sky-800">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
