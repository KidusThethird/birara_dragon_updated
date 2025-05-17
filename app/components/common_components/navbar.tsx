"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu items corresponding to ProductsPage.tsx and other components
  const productCategories = [
    { name: "Furniture", slug: "furniture" },
    {
      name: "Medical Supplies & Equipment",
      slug: "medical-supplies-equipment",
    },
    {
      name: "Cars, Machinery & Electronics",
      slug: "cars-machinery-electronics",
    },
    {
      name: "Fashion, Apparel & Human Hair",
      slug: "fashion-apparel-human-hair",
    },
    {
      name: "Home, Office, Commercial Furnishings & Building Materials",
      slug: "home-office-commercial-furnishings-building-materials",
    },
    {
      name: "General Trading & Wholesale Products",
      slug: "general-trading-wholesale-products",
    },
    {
      name: "Business Consulting & Sourcing Services",
      slug: "business-consulting-sourcing-services",
    },
    { name: "Coffee", slug: "coffee" },
    { name: "Gypsum member", slug: "gypsum-member" },
    { name: "Smart Lock", slug: "smart-lock" },
    { name: "Stainless steel partition", slug: "stainless-steel-partition" },
    { name: "Wall Decoration", slug: "wall-decoration" },
    { name: "Home Appliance", slug: "home-appliance" },
    { name: "Electrical Solutions", slug: "electrical-solutions" },
    { name: "Aluminum Celling", slug: "aluminum-ceiling" },
    { name: "Kitchen Cabinetry", slug: "kitchen-cabinetry" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full text-white py-5 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-sky-900" : "bg-transparent"
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
          <div className="flex justify-end px-10 items-center gap-2">
            <h1 className="text-sky-900">.</h1>
          </div>
          <div className="sm:flex w-3/4 items-center">
            <div className="flex w-3/4 justify-around relative">
              <div className="group">
                <Link
                  className={`cursor-pointer hover:text-gray-200 ${
                    pathname === "/" ? "underline" : ""
                  }`}
                  href="/"
                >
                  <h1>Home</h1>
                </Link>
              </div>
              <div className="group">
                <Link
                  href="/products"
                  className={`cursor-pointer hover:text-gray-200 ${
                    pathname.startsWith("/products") ? "underline" : ""
                  }`}
                >
                  Products
                </Link>
                <div className="absolute hidden group-hover:block bg-sky-700 text-white py-2 rounded-md shadow-lg min-w-[200px] max-h-96 overflow-y-auto">
                  <Link
                    href="/products"
                    className="block px-4 py-2 hover:bg-sky-800"
                  >
                    All Products
                  </Link>
                  {productCategories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/products/${category.slug}`}
                      className="block px-4 py-2 hover:bg-sky-800"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="group">
                <Link
                  className={`cursor-pointer hover:text-gray-200 ${
                    pathname === "/team" ? "underline" : ""
                  }`}
                  href="/team"
                >
                  <h1>Our Team</h1>
                </Link>
              </div>
              <div className="group">
                <Link
                  className={`cursor-pointer hover:text-gray-200 ${
                    pathname === "/about" ? "underline" : ""
                  }`}
                  href="/cases"
                >
                  <h1>Cases</h1>
                </Link>
              </div>

              <div className="group">
                <Link
                  className={`cursor-pointer hover:text-gray-200 ${
                    pathname === "/about" ? "underline" : ""
                  }`}
                  href="/about"
                >
                  <h1>About</h1>
                </Link>
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
        <div className="relative w-3/4 h-full bg-sky-900 p-6 shadow-lg">
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
              className={`text-xl text-white hover:text-gray-200 ${
                pathname === "/" ? "underline" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div>
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className={`text-xl text-white hover:text-gray-200 focus:outline-none flex justify-between items-center w-full ${
                  pathname.startsWith("/products") ? "underline" : ""
                }`}
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
                className={`overflow-y-auto transition-all duration-300 ${
                  isProductsOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                <Link
                  href="/products"
                  className="block pl-4 py-2 text-white hover:text-gray-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  All Products
                </Link>
                {productCategories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/products/${category.slug}`}
                    className="block pl-4 py-2 text-white hover:text-gray-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/team"
              className={`text-xl text-white hover:text-gray-200 ${
                pathname === "/team" ? "underline" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Team
            </Link>
            <Link
              href="/about"
              className={`text-xl text-white hover:text-gray-200 ${
                pathname === "/cases" ? "underline" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cases
            </Link>

            <Link
              href="/about"
              className={`text-xl text-white hover:text-gray-200 ${
                pathname === "/about" ? "underline" : ""
              }`}
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
