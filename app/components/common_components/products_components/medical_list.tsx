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

export default function MedicalList() {
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
        { name: "Disposable Medical Supplies:", productId: "104" },

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
    { name: "Scrubs & Medical Apparel", image: "/products/medical/100.jpeg" },
    { name: "Surgical Instruments", image: "/products/medical/101.jpeg" },

    { name: "Patient Monitoring Devices", image: "/products/medical/102.jpeg" },
    {
      name: "Diagnostic Imaging Equipment",
      image: "/products/medical/103.jpeg",
    },
    {
      name: "Disposable Medical Supplies",
      image: "/products/medical/104.jpeg",
    },
    { name: "Hospital Furniture & Beds", image: "/products/medical/105.jpeg" },
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
              <BreadcrumbLink href="/furniture">
                Medical Supplies and Equipment
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
                      <li key={subItem.productId}>
                        <a
                          href={`#${subItem.productId}`} // Optionally use productId in the href
                          className="block text-gray-600 hover:text-gray-800 p-2"
                        >
                          {subItem.name} {/* Render the name property */}
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
                product.image.match(/\/products\/medical\/(\d+)\.jpeg/)?.[1] ||
                "0";

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
