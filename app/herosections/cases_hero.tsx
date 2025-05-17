// components/ProductsHero.tsx
import React from "react";
import Image from "next/image";
import Navbar from "../components/common_components/navbar";

export default function CasesHero() {
  return (
    <div>
      <Navbar />
      <div className="relative w-full h-[400px] overflow-hidden">
        <Image
          src="/hero/casehero.jpeg"
          alt="Products Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-shadow-lg">
            Cases
          </h1>
        </div>
      </div>
    </div>
  );
}
