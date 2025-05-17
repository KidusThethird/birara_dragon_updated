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
import { menuItems } from "@/lib/menuItems";

export default function ProductsPage() {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // 12 products per page

  // Menu data with corrected typos

  // Products data with fourth page added
  const products = [
    { name: "Solid Wood Wall Panels", image: "/products/1.jpeg" },
    { name: "Dining table", image: "/products/2.jpeg" },
    { name: "Sofa bed", image: "/products/50.jpeg" },
    { name: "Fence Main Gate", image: "/products/4.jpeg" },
    { name: "Side Table", image: "/products/5.jpeg" },
    { name: "Cast Aluminium", image: "/products/6.jpeg" },
    { name: "French Door", image: "/products/7.jpeg" },
    { name: "Aluminum / stainless steel / ...", image: "/products/8.jpeg" },
    { name: "Floor Lamp", image: "/products/9.jpeg" },
    { name: "CCTV", image: "/products/10.jpeg" },
    { name: "Generator", image: "/products/11.jpeg" },
    { name: "Home Theater", image: "/products/12.jpeg" },
    { name: "Massage Chair", image: "/products/13.jpeg" },
    { name: "Folding Door", image: "/products/14.jpeg" },
    { name: "Sliding Door", image: "/products/15.jpeg" },
    { name: "Plywood Wood Door", image: "/products/16.png" },
    { name: "Wpc Door", image: "/products/17.jpeg" },
    { name: "Veneer Wood Door", image: "/products/18.jpeg" },
    { name: "HDF Wooden Door", image: "/products/19.jpeg" },
    { name: "Solid Wood Door", image: "/products/20.jpeg" },
    { name: "Lighting Switch", image: "/products/21.jpeg" },
    { name: "EV Charging Station", image: "/products/22.jpeg" },
    { name: "Pool Table / Table Soccer / AI / ...", image: "/products/23.png" },
    { name: "PS5", image: "/products/24.jpeg" },
    { name: "Sauna Room / FAR Infrared Sauna", image: "/products/26.jpeg" },
    { name: "Shower Flooring", image: "/products/27.jpeg" },
    { name: "Colorful Stone Coated Metal", image: "/products/28.jpeg" },
    { name: "Polished Glazed Tile", image: "/products/30.jpeg" },
    { name: "Eco-friendly Door", image: "/products/31.jpeg" },
    { name: "Container House", image: "/products/32.jpeg" },
    { name: "Track System / Accessories", image: "/products/33.jpeg" },
    { name: "Blinds", image: "/products/34.jpeg" },
    { name: "Panoramic Elevator", image: "/products/35.jpeg" },
    { name: "Escalator", image: "/products/36.jpeg" },
    { name: "Home Elevator / Villa Elevator", image: "/products/37.jpeg" },
    { name: "Hospital Elevator", image: "/products/38.jpeg" },
    { name: "Building structure", image: "/products/39.jpeg" },
    { name: "Transportation Buildings", image: "/products/40.jpeg" },
    { name: "Industrial", image: "/products/41.jpeg" },
    { name: "Commercial Buildings", image: "/products/42.jpeg" },
    { name: "Residential Buildings", image: "/products/43.png" },
    { name: "Outdoor wall lamp", image: "/products/44.jpeg" },
    { name: "Track Light", image: "/products/45.jpeg" },
    { name: "Water Vapor Fireplace", image: "/products/46.jpeg" },
    { name: "Electric Fireplace", image: "/products/47.jpeg" },
    { name: "Wood-Burning Fireplace", image: "/products/48.jpeg" },
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
              <BreadcrumbLink href="/products">All Products</BreadcrumbLink>
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
              // Extract the number from the image path (e.g., "/products/1.jpeg" -> "1")
              const imageNumber =
                product.image.match(/\/products\/(\d+)\.(jpeg|png)/)?.[1] ||
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
                    : "bg-sky-900 text-white hover:bg-sky-800"
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
                        ? "bg-sky-800 text-white"
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
                    : "bg-sky-900 text-white hover:bg-sky-800"
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
