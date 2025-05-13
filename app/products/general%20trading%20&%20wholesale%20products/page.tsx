"use client";
import React from "react";
import ProductsHero from "../../herosections/products_hero";
import MedicalList from "@/app/components/common_components/products_components/medical_list";
import { Car } from "lucide-react";
import CarsAndMachineryList from "@/app/components/common_components/products_components/carandmachinery_list";
import GeneralList from "@/app/components/common_components/products_components/genral_list";

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <GeneralList />
    </div>
  );
}
