"use client";
import React from "react";
import ProductsHero from "../../herosections/products_hero";
import MedicalList from "@/app/components/common_components/products_components/medical_list";
import WallList from "@/app/components/common_components/products_components/wall_list";
import HomeApplianceList from "@/app/components/common_components/products_components/home_applience_list";

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <HomeApplianceList />
    </div>
  );
}
