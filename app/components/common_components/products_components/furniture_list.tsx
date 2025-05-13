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
import MenuSidebar from "../product_menu_list";

export default function FurniturePage() {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // 12 products per page

  // Menu data
  const menuItems = [
    {
      category: "Furniture",
      subItems: [
        { name: "Outdoor Furniture", productId: "52" },
        { name: "Dining Table", productId: "49" },
        { name: "Sofa Bed", productId: "50" },
        { name: "Sofa", productId: "53" },
        { name: "Hotel Guest Room Furniture", productId: "54" },
        { name: "Office Furniture", productId: "55" },
        { name: "Childeren's Furniture", productId: "56" },
      ],
    },
    {
      category: "Medical Supplies & Equipment",
      subItems: [
        { name: "Scrubs & Medical Apparel", productId: "100" },
        { name: "Surgical Instruments", productId: "101" },
        { name: "Patient Monitoring Devices", productId: "102" },
        { name: "Diagnostic Imaging Equipment", productId: "103" },
        { name: "Disposable Medical Supplies", productId: "104" },
        { name: "Hospital Furniture & Beds", productId: "105" },
      ],
    },
    {
      category: "Cars, Machinery & Electronics",
      subItems: [
        { name: "Passenger Vehicles", productId: "106" },
        { name: "Commercial Trucks & Vans", productId: "107" },
        { name: "Construction Machinery", productId: "108" },
        { name: "Home & Office Electronics", productId: "109" },
        { name: "Industrial Equipment", productId: "110" },
        { name: "Car Tires & LED Lighting", productId: "111" },
      ],
    },
    {
      category: "Fashion, Apparel & Human Hair",
      subItems: [
        { name: "Women’s Fashion", productId: "112" },
        { name: "Men’s Fashion", productId: "113" },
        { name: "Accessories & Footwear", productId: "114" },
        { name: "Human Hair Extensions & Wigs", productId: "115" },
        { name: "Children’s Apparel", productId: "116" },
      ],
    },
    {
      category: "Home, Office, Commercial Furnishings & Building Materials",
      subItems: [
        { name: "Home Furniture", productId: "117" },
        { name: "Office Desks & Seating", productId: "118" },
        { name: "Construction Materials", productId: "119" },
        { name: "Home Decor & Lighting", productId: "120" },
        { name: "Commercial Fixtures & Displays", productId: "121" },
      ],
    },
    {
      category: "General Trading & Wholesale Products",
      subItems: [
        { name: "Consumer Electronics", productId: "122" },
        { name: "Household Goods", productId: "123" },
        { name: "Industrial Raw Materials", productId: "124" },
        { name: "Agricultural Produce", productId: "125" },
        { name: "Cosmetic & Skincare Products", productId: "126" },
      ],
    },
    {
      category: "Business Consulting & Sourcing Services",
      subItems: [
        { name: "Market Entry Consulting", productId: "127" },
        { name: "Supplier & Vendor Sourcing", productId: "128" },
        { name: "Supply Chain Management", productId: "129" },
        { name: "Quality Control Services", productId: "130" },
        { name: "Export & Import Support", productId: "131" },
      ],
    },
    {
      category: "Coffee",
      subItems: [],
    },
  ];

  // New products array with only furniture items, starting from /products/furniture/49.jpeg
  const products = [
    { name: "Dining table", image: "/products/furniture/49.jpeg" },
    { name: "Sofa bed", image: "/products/furniture/50.jpeg" },
    { name: "Side Table", image: "/products/furniture/51.jpeg" },
    { name: "Out Door Furniture", image: "/products/furniture/52.jpeg" },
    { name: "Sofa", image: "/products/furniture/53.png" },
    {
      name: "Hotel Guest Room Furniture",
      image: "/products/furniture/54.jpeg",
    },
    { name: "Office Furniture", image: "/products/furniture/55.jpeg" },
    {
      name: "Childeren's Furniture",
      image: "/products/furniture/56.jpeg",
    },
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
              <BreadcrumbLink href="/furniture">Furniture</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Sidebar - Menu */}
        <MenuSidebar menuItems={menuItems} />

        {/* Right Content - Product Grid */}
        <main className="w-full md:w-3/4 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => {
              // Extract the number from the image path (e.g., "/products/furniture/49.jpeg" -> "49")
              const imageNumber =
                product.image.match(
                  /\/products\/furniture\/(\d+)\.(jpeg|png)/
                )?.[1] || "0";

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
