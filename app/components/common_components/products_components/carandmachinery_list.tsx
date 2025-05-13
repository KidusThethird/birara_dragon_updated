// components/ProductsPage.tsx
"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function CarsAndMachineryList() {
  // State to manage dropdown visibility
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // 12 products per page

  const toggleDropdown = (category: string) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  // Sample menu data
  const menuItems = [
    {
      category: "Furniture",
      subItems: [
        "Outdoor Furniture",
        "Dining Table",
        "Side Bed",
        "Sofa",
        "Hotel Guest Room Furniture",
        "Office Furniture",
        "Childeren's Furniture",
      ],
    },
    { category: "Flooring", subItems: ["Hardwood", "Tile", "Vinyl"] },
    { category: "Smart lock", subItems: [] },
    { category: "Sanitary ware", subItems: ["Toilets", "Sinks", "Faucets"] },
    {
      category: "Sauna Room / FAR Infrared Sauna",
      subItems: ["Sauna Kits", "Infrared Units"],
    },
    { category: "Room", subItems: [] },
  ];

  // New products array with only furniture items, starting from /products/furniture/49.jpeg
  const products = [
    { name: "Passenger Vehicles", image: "/products/car/106.jpeg" },
    { name: "Commercial Trucks & Vans", image: "/products/car/107.jpeg" },

    { name: "Construction Machinery", image: "/products/car/108.jpeg" },
    {
      name: "Home & Office Electronics",
      image: "/products/car/109.jpeg",
    },
    {
      name: "Industrial Equipment",
      image: "/products/car/110.jpeg",
    },
    { name: "Car Tires & LED Lighting", image: "/products/car/111.jpeg" },
  ];

  // Pagination logic
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on page change
  };

  return (
    <div>
      <div className="px-4 py-2 bg-gray-100">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                Cars , Machinary and Electronics
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Sidebar - Menu */}
        <aside className="w-full md:w-1/4 bg-gray-100 p-6">
          <h2 className="text-3xl font-bold text-white bg-blue-600 p-4 mb-4">
            PRODUCTS
          </h2>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.category}>
                <button
                  onClick={() => toggleDropdown(item.category)}
                  className="w-full text-left text-gray-800 hover:bg-gray-200 p-2 flex justify-between items-center"
                >
                  <a href={`${item.category.toLowerCase()}`}>
                    <span>{item.category}</span>
                  </a>
                  {item.subItems.length > 0 && (
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        openDropdown === item.category ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>
                {openDropdown === item.category && item.subItems.length > 0 && (
                  <ul className="pl-4 mt-2 space-y-1">
                    {item.subItems.map((subItem) => (
                      <li key={subItem}>
                        <a
                          href="#"
                          className="block text-gray-600 hover:text-gray-800 p-2"
                        >
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </aside>

        {/* Right Content - Product Grid */}
        <main className="w-full md:w-3/4 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => {
              // Extract the number from the image path (e.g., "/products/furniture/49.jpeg" -> "49")
              const imageNumber =
                product.image.match(/\/products\/car\/(\d+)\.jpeg/)?.[1] || "0";

              return (
                <Link
                  href={`/product_details/${imageNumber}`}
                  key={product.name}
                  className="block"
                >
                  <div className="relative bg-gray-50 pb-3 rounded shadow-md hover:shadow-lg transition-shadow">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover p-2 rounded-lg transition-transform transform hover:scale-105"
                    />
                    <h3 className="mt-2 text-center font-semibold text-gray-800">
                      {product.name}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded ${
                  currentPage === 1
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Previous
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded ${
                      currentPage === page
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded ${
                  currentPage === totalPages
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
