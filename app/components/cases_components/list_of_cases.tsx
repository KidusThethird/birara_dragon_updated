"use client";

import { useState } from "react";
import Link from "next/link";
import casesData from "../../../lib/cases.json";
import Image from "next/image"; // Import next/image

interface CaseItem {
  id: number;
  title: string;
  image: string;
  location: string;
}

export default function CasesList() {
  const [cases] = useState<CaseItem[]>(casesData);
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <div className=" mx-5 p-4">
      <h1 className="text-2xl font-bold mb-4">Cases</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cases.map((caseItem) => (
          <Link href={`/cases/${caseItem.id}`} key={caseItem.id} passHref>
            <div className="relative border rounded-lg overflow-hidden shadow-md cursor-pointer">
              {/* <img
                src={caseItem.image}
                alt={caseItem.title}
                className="w-full h-64 object-cover"
              /> */}

              <Image
                src={caseItem.image}
                alt={caseItem.title}
                className="w-full h-64 object-cover"
                width={200}
                height={200}
              />

              <div className="p-4">
                <p className="font-semibold">{caseItem.title}</p>
              </div>
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                onClick={() => setConsultationOpen(true)}
              >
                💬
              </button>
            </div>
          </Link>
        ))}
      </div>
      {consultationOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={() => setConsultationOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-lg font-semibold">online consultation</h2>
            <p>Please enter the required content</p>
          </div>
        </div>
      )}
    </div>
  );
}
