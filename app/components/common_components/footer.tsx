// app/components/Footer.tsx
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";

// Sample data for footer links
const footerLinks = {
  about: [
    { name: "Our Story", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Products", href: "/products" },
  ],
  services: [
    { name: "Healthcare & Medical Solutions", href: "" },
    { name: "Automotive & Industrial Solutions", href: "" },
    { name: "Fashion & Lifestyle Products", href: "" },
    { name: "Home, Office & Business Services", href: "" },
  ],
  contact: [
    { name: "Email Us", href: "mailto:info@example.com" },
    { name: "Call Us", href: "tel:+1234567890" },
    { name: "Visit Us", href: "/contact" },
  ],
};

// Social media links
const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    //  icon: "/icons/facebook.png",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    //  icon: "/icons/twitter.png",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    // icon: "/icons/instagram.png",
  },
];

export default function Footer() {
  return (
    <footer className="bg-sky-900 text-white py-12">
      <div className="  mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info / Logo */}
          <div className="mb-8 md:mb-0">
            <Image
              src="/logo/whitelogo.png"
              width={150}
              height={150}
              alt="Company logo"
            />
            <h2 className=" font-bold mb-4">Birara Dragon Bridge</h2>
            <p className="text-gray-400">
              Our mission is to enhance lives and empower businesses by
              delivering high-quality products
            </p>

            <div className="flex space-x-5 my-5 ">
              <a href="">
                <Image
                  src="/icons/facebook.png"
                  width={50}
                  height={50}
                  alt="Company logo"
                  className="bg-white p-2 rounded-2xl hover:scale-105 hover:bg-sky-800"
                />
              </a>

              <a href="">
                <Image
                  src="/icons/telegram.png"
                  width={50}
                  height={50}
                  alt="Company logo"
                  className="bg-white p-2 rounded-2xl hover:scale-105 hover:bg-sky-800"
                />
              </a>

              <a href="">
                <Image
                  src="/icons/instagram.png"
                  width={50}
                  height={50}
                  alt="Company logo"
                  className="bg-white p-2 rounded-2xl hover:scale-105 hover:bg-sky-800"
                />
              </a>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-lg mx-auto font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:underline transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:underline transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="flex space-x-4">
              <Phone />{" "}
              <div>
                {" "}
                <h1>+8619700356386</h1> <h1>+8613098393670</h1>
              </div>
            </div>
            <div className="flex space-x-4">
              <MapPin size={50} />{" "}
              <h1 className="col-span-3">
                China: 深圳市南山区同方科兴科学园F区3201 Hongkong Branch: 2301,
                BAYFIELD BUILDING 99 HENNESSY ROAD WANCHAI
              </h1>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-transform duration-200 hover:scale-110"
              >
                {/* <Image
                  src={social.icon}
                  alt={`${social.name} icon`}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  onError={(e) => (e.currentTarget.src = "/placeholder.jpg")} // Fallback image
                /> */}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Birara Dragon Bridge. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
