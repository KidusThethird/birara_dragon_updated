// app/components/Navbar.tsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

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
        {/* Logo */}
        <div>
          <Image
            src="/logo/whitelogo.png"
            width={120}
            height={120}
            alt="Company logo"
          />
        </div>

        {/* Desktop Menu (Hidden on Mobile) */}

        <div className="hidden sm:block w-3/4 items-center">
          {" "}
          <div className="flex justify-end px-10 items-center gap-2">
            <Image
              src="/icons/email.png"
              width={20}
              height={20}
              alt="Email icon"
            />
            <h1>Email</h1>
          </div>
          <div className=" sm:flex w-3/4 items-center">
            <div className="flex w-3/4 justify-around relative">
              <div className="group">
                <Link className="cursor-pointer hover:text-gray-200" href="/">
                  <h1>Home</h1>
                </Link>
              </div>
              <div className="group">
                <a
                  href="/products"
                  className="cursor-pointer hover:text-gray-200"
                >
                  Products
                </a>
                <div className="absolute hidden group-hover:block bg-sky-700 text-white py-2 rounded-md shadow-lg min-w-[120px]">
                  <a
                    href="/products"
                    className="block px-4 py-2 hover:bg-sky-800"
                  >
                    All Products
                  </a>
                  <a
                    href="/products/furniture"
                    className="block px-4 py-2 hover:bg-sky-800"
                  >
                    Furniture
                  </a>
                </div>
              </div>
              <div className="group">
                <h1 className="cursor-pointer hover:text-gray-200">Cases</h1>
                <div className="absolute hidden group-hover:block bg-sky-700 text-white py-2 rounded-md shadow-lg min-w-[120px]">
                  <a
                    href="/oversea_cases"
                    className="block px-4 py-2 hover:bg-sky-800"
                  >
                    OverSea Cases
                  </a>
                </div>
              </div>
              <div className="group">
                <h1 className="cursor-pointer hover:text-gray-200">About</h1>
                <div className="absolute hidden group-hover:block bg-sky-700 text-white py-2 rounded-md shadow-lg min-w-[120px]">
                  <a href="/about" className="block px-4 py-2 hover:bg-sky-800">
                    About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu Button (Visible on Mobile) */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Hidden on Desktop) */}
      <div
        className={`sm:hidden fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-95 z-40 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Backdrop to close menu when clicking outside */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Panel */}
        <div className="relative w-3/4 h-full bg-sky-600 p-6 shadow-lg">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white mb-6 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav className="flex flex-col space-y-6">
            <Link
              href="/"
              className="text-xl text-white hover:text-gray-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div>
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="text-xl text-white hover:text-gray-200 focus:outline-none flex justify-between items-center w-full"
              >
                Products
                <svg
                  className={`w-4 h-4 ml-2 transition-transform ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isProductsOpen ? "max-h-20" : "max-h-0"
                }`}
              >
                <Link
                  href="/products"
                  className="block pl-4 py-2 text-white hover:text-gray-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  All Products
                </Link>
                <Link
                  href="/products/furniture"
                  className="block pl-4 py-2 text-white hover:text-gray-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Furniture
                </Link>
              </div>
            </div>
            <Link
              href="/oversea_cases"
              className="text-xl text-white hover:text-gray-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cases
            </Link>
            <Link
              href="/about"
              className="text-xl text-white hover:text-gray-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
