"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Manually defined array of items with links
const items = [
  {
    id: 1,
    image: "/products/furniture/50.jpeg",
    text: "Furniture",
    link: "/products/furniture",
  },
  {
    id: 2,
    image: "/products/medical/104.jpeg",
    text: "Medical Supplies & Equipment",
    link: "/products/medical-supplies-equipment",
  },
  {
    id: 3,
    image: "/products/car/106.jpeg",
    text: "Cars, Machinery & Electronics",
    link: "/products/cars-machinery-electronics",
  },
  {
    id: 4,
    image: "/products/fashion/112.jpeg",
    text: "Fashion, Apparel & Human Hair",
    link: "/products/fashion-apparel-human-hair",
  },
  {
    id: 5,
    image: "/products/home/120.jpeg",
    text: "Home, Office, Commercial Furnishings & Building Materials",
    link: "/products/home-office-commercial-furnishings-building-materials",
  },
  {
    id: 6,
    image: "/products/general/124.jpeg",
    text: "General Trading & Wholesale Products",
    link: "/products/general-trading-wholesale-products",
  },
  {
    id: 7,
    image: "/products/business/128.jpeg",
    text: "Business Consulting & Sourcing Services",
    link: "/products/business-consulting-sourcing-services",
  },
  {
    id: 8,
    image: "/products/coffee/img06.png",
    text: "Coffee",
    link: "/products/coffee",
  },
  {
    id: 9,
    image: "/products/gypsum/132.jpeg",
    text: "Gypsum Member",
    link: "/products/gypsum-member",
  },
  {
    id: 10,
    image: "/products/lock/133.jpeg",
    text: "Smart Lock",
    link: "/products/smart-lock",
  },
  {
    id: 11,
    image: "/products/stainless/134.jpeg",
    text: "Stainless Steel Partition",
    link: "/products/stainless-steel-partition",
  },
  {
    id: 12,
    image: "/products/wall/139.jpeg",
    text: "Wall Decoration",
    link: "/products/wall-decoration",
  },
  {
    id: 13,
    image: "/products/homeappliance/141.jpeg",
    text: "Home Appliance",
    link: "/products/home-appliance",
  },
  {
    id: 14,
    image: "/products/electrical/148.jpeg",
    text: "Electrical Solutions",
    link: "/products/electrical-solutions",
  },
  {
    id: 15,
    image: "/products/aluminum/151.jpeg",
    text: "Aluminum Celling",
    link: "/products/aluminum-ceiling",
  },
  {
    id: 16,
    image: "/products/kitchen/153.jpeg",
    text: "Kitchen Cabinetry",
    link: "/products/kitchen-cabinetry",
  },
  {
    id: 17,
    image: "/products/otherproducts/flooring.jpg",
    text: "Flooring",
    link: "/products",
  },
  {
    id: 18,
    image: "/products/otherproducts/sanitary.png",
    text: "Sanitary ware",
    link: "/products",
  },
  {
    id: 19,
    image: "/products/otherproducts/coating.jpg",
    text: "Coating",
    link: "/products",
  },
  {
    id: 20,
    image: "/products/otherproducts/fabric.jpg",
    text: "Curtain Fabric",
    link: "/products",
  },
  {
    id: 21,
    image: "/products/otherproducts/fireplace.jpg",
    text: "Fireplace",
    link: "/products",
  },
  {
    id: 22,
    image: "/products/otherproducts/arc.png",
    text: "Architectural Design",
    link: "/products",
  },
  {
    id: 23,
    image: "/products/otherproducts/steelhouse.jpg",
    text: "Light Steel House",
    link: "/products",
  },
  {
    id: 24,
    image: "/products/otherproducts/Wardrobe.jpg",
    text: "Wardrobe Walkin Closet",
    link: "/products",
  },
  {
    id: 25,
    image: "/products/otherproducts/roof.jpg",
    text: "Roof Tiles",
    link: "/products",
  },
  {
    id: 26,
    image: "/products/otherproducts/stairs.png",
    text: "Staircases",
    link: "/products",
  },
  {
    id: 27,
    image: "/products/otherproducts/door.jpeg",
    text: "Modern Doors",
    link: "/products",
  },
  {
    id: 28,
    image: "/products/otherproducts/elevator.jpg",
    text: "Elevator",
    link: "/products",
  },

  {
    id: 30,
    image: "/products/otherproducts/household.jpg",
    text: "House Hold",
    link: "/products",
  },
];

export default function Mainservices() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Title and Subtitle Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Collection
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated selection of unique items, each designed to
            inspire and elevate your space.
          </p>
        </div>
      </section>

      {/* Grid of Images */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {items.map((item) => (
              <Link href={item.link} key={item.id} className="block">
                <div className="flex flex-col items-center text-center">
                  {/* Image with Hover Scale Effect */}
                  <div className="relative w-full aspect-square overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                    <Image
                      src={item.image}
                      alt={item.text}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover rounded-xl"
                      onError={(e) =>
                        (e.currentTarget.src = "/placeholder.jpg")
                      } // Fallback image
                    />
                  </div>

                  {/* Short Text Below Image */}
                  <p className="mt-4 text-base text-gray-700">{item.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
