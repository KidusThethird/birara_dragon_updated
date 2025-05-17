"use client";

import React, { useState } from "react";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "", // Added message field
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your submission logic here (e.g., API call)
  };

  return (
    <div className="bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">INQUIRY</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="border-b border-gray-300 py-2">
            <input
              type="text"
              name="name"
              placeholder="NAME"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent outline-none placeholder-gray-500 text-gray-800"
            />
          </div>
          <div className="border-b border-gray-300 py-2">
            <input
              type="text"
              name="phone"
              placeholder="MOBILE PHONES"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent outline-none placeholder-gray-500 text-gray-800"
            />
          </div>
          <div className="border-b border-gray-300 py-2">
            <input
              type="email"
              name="email"
              placeholder="E-MAIL"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent outline-none placeholder-gray-500 text-gray-800"
            />
          </div>
          <div className="border-b border-gray-300 py-2">
            <textarea
              name="message"
              placeholder="MESSAGE"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent outline-none placeholder-gray-500 text-gray-800 resize-none h-24"
            />
          </div>
          <button
            type="submit"
            className="bg-sky-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
