"use client";
import React from "react";
import ProductsHero from "../../herosections/products_hero";
import FurniturePage from "@/app/components/common_components/products_components/furniture_list";

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <FurniturePage />
    </div>
  );
}
