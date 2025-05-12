// app/components/Footer.tsx
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Sample data for footer links
const footerLinks = {
  about: [
    { name: "Our Story", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Careers", href: "/careers" },
  ],
  services: [
    { name: "Interior Design", href: "/services/interior-design" },
    { name: "Custom Furniture", href: "/services/custom-furniture" },
    { name: "Consulting", href: "/services/consulting" },
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
    icon: "/icons/facebook.png",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: "/icons/twitter.png",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: "/icons/instagram.png",
  },
];

export default function Footer() {
  return (
    <footer className="bg-sky-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info / Logo */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Birara Dragon Bridge</h2>
            <p className="text-gray-400">
              Crafting beautiful spaces with innovative design and quality
              furniture. Let us bring your vision to life.
            </p>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
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
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              {footerLinks.contact.map((link) => (
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
                <Image
                  src={social.icon}
                  alt={`${social.name} icon`}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  onError={(e) => (e.currentTarget.src = "/placeholder.jpg")} // Fallback image
                />
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
