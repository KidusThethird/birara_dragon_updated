"use client";
import React from "react";
import ProductsHero from "../../herosections/products_hero";
import RoofList from "@/app/components/common_components/products_components/roof_list";

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <RoofList />
    </div>
  );
}
