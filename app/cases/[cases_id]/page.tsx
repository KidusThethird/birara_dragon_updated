"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import CasesHero from "@/app/herosections/cases_hero";
import casesData from "../../../lib/cases.json";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

interface CaseItem {
  id: number;
  title: string;
  image: string;
  location: string;
  gallery: string[];
  project_type?: string;
  text01?: string;
  text02?: string;
  text03?: string;
  text04?: string;
}

export default function CasesDetail() {
  // All hooks declared at the top
  const params = useParams();
  const caseId = params.cases_id;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const controls = useAnimation();

  // Reset image index and animation on caseId change
  useEffect(() => {
    setCurrentImageIndex(0);
    controls.start({ opacity: 1, x: 0 });
  }, [caseId, controls]);

  // Find case item
  const caseItem = casesData.find(
    (item: CaseItem) => item.id === Number(caseId)
  );

  // Early return after all hooks
  if (!caseItem) return <div>Case not found</div>;

  // Image gallery logic
  const allImages = caseItem.gallery.includes(caseItem.image)
    ? caseItem.gallery
    : [caseItem.image, ...caseItem.gallery];
  const currentImage = allImages[currentImageIndex];

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    controls
      .start({ x: "-100%", opacity: 0 })
      .then(() => controls.start({ x: 0, opacity: 1 }));
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );
    controls
      .start({ x: "100%", opacity: 0 })
      .then(() => controls.start({ x: 0, opacity: 1 }));
  };

  const handleThumbnailClick = (index: number) => {
    if (index !== currentImageIndex) {
      controls
        .start({ x: index > currentImageIndex ? "-100%" : "100%", opacity: 0 })
        .then(() => {
          setCurrentImageIndex(index);
          controls.start({ x: 0, opacity: 1 });
        });
    }
  };

  return (
    <div>
      <CasesHero />
      <div className="mx-5 p-4">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600 bg-white p-4 rounded shadow-md">
          {caseItem.location}
        </h1>
        <div className="min-h-screen flex items-center justify-center mb-6 relative">
          <button
            onClick={handlePrev}
            className="absolute left-2 bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition-all duration-300 z-10"
          >
            <ChevronLeft />
          </button>
          <motion.img
            src={currentImage}
            alt={`${caseItem.title} main image`}
            className="max-w-full max-h-[500px] object-contain rounded-lg shadow-md"
            initial={{ opacity: 0, x: 0 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          />
          <button
            onClick={handleNext}
            className="absolute right-2 bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition-all duration-300 z-10"
          >
            <ChevronRight />
          </button>
        </div>
        <div
          className="flex space-x-4 pb-4 overflow-x-auto"
          style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}
        >
          {allImages.map((img, index) => (
            // <img
            //   key={index}
            //   src={img}
            //   alt={`${caseItem.title} thumbnail ${index + 1}`}
            //   className={`max-w-[150px] object-contain rounded-lg cursor-pointer flex-shrink-0 ${
            //     index === currentImageIndex ? "border-4 border-blue-600" : ""
            //   }`}
            //   onClick={() => handleThumbnailClick(index)}
            // />

            <Image
              src={img}
              width={120}
              height={120}
              key={index}
              alt={`${caseItem.title} thumbnail ${index + 1}`}
              className={`max-w-[150px] object-contain rounded-lg cursor-pointer flex-shrink-0 ${
                index === currentImageIndex ? "border-4 border-blue-600" : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </div>

      <div className="mx-7 space-y-5 my-7">
        <h1 className="text-2xl underline">Details</h1>
        <h1>Country: {caseItem.location}</h1>
        <h1>Project Type: {caseItem.project_type || "N/A"}</h1>
        <h1>{caseItem.text01 || ""}</h1>
        <h1>{caseItem.text02 || ""}</h1>
        <h1>{caseItem.text03 || ""}</h1>
        <h1>{caseItem.text04 || ""}</h1>
      </div>
    </div>
  );
}
