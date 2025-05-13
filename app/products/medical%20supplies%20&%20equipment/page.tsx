"use client";
import React from "react";
import ProductsHero from "../../herosections/products_hero";
import MedicalList from "@/app/components/common_components/products_components/medical_list";

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <MedicalList />
    </div>
  );
}
