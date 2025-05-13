"use client";
import Link from "next/link";
import { useState } from "react";

interface MenuItem {
  category: string;
  subItems: { name: string; productId: string }[];
}

interface MenuSidebarProps {
  menuItems: MenuItem[];
}

export default function MenuSidebar({ menuItems }: MenuSidebarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (category: string) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  return (
    <aside className="w-full md:w-1/4 bg-gray-50 p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-white bg-gradient-to-r from-sky-900 to-blue-700 p-4 mb-6 rounded-xl">
        PRODUCTS
      </h2>
      <ul className="space-y-1">
        {menuItems.map((item) => (
          <li key={item.category}>
            <button
              onClick={() => toggleDropdown(item.category)}
              className="w-full flex justify-between items-center text-left text-gray-900 hover:bg-gray-100 p-3 rounded-lg transition-colors duration-200"
            >
              <Link
                href={`/products/${item.category
                  .toLowerCase()
                  .replace(/ & /g, "-")
                  .replace(/, /g, "-")
                  .replace(/ /g, "-")}`}
                className="flex items-center space-x-2"
              >
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7h18M3 12h18M3 17h18"
                  />
                </svg>
                <span className="font-medium">{item.category}</span>
              </Link>
              {item.subItems.length > 0 && (
                <svg
                  className={`w-4 h-4 text-gray-500 transform transition-transform duration-200 ${
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
              <ul className="pl-6 mt-2 space-y-1 border-l-2 border-gray-200 transition-all duration-300 ease-in-out">
                {item.subItems.map((subItem) => (
                  <li key={subItem.productId}>
                    <Link
                      href={`/product_details/${subItem.productId}`}
                      className="block text-gray-600 hover:text-blue-600 hover:bg-gray-100 p-2 rounded-md text-sm transition-colors duration-200"
                    >
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
