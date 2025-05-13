"use client";
import React from "react";
import Image from "next/image";

export default function OurTeamDetails() {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Feven Birara",
      position: "General Manager",
      image: "/team/img04.jpg",
    },
    {
      id: 2,
      name: "Daniele Pinti",
      position: "Chief Operating Officer",
      image: "/team/img03.jpg",
    },
    {
      id: 3,
      name: "Tiziana Huang",
      position: "Logestics and Supply Chain Coordinator",
      image: "/team/img02.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Title and Subtitle Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Team
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated professionals driving our success with expertise
            and passion.
          </p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex flex-col items-center text-center bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
              >
                {/* Team Member Image */}
                <div className="relative w-full h-64 overflow-hidden rounded-t-xl">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.position}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                    onError={(e) => (e.currentTarget.src = "/placeholder.jpg")} // Fallback image
                  />
                </div>

                {/* Name and Position */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
