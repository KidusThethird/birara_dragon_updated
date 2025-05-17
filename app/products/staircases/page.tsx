"use client";
import React from "react";
import ProductsHero from "../../herosections/products_hero";

import StairsList from "@/app/components/common_components/products_components/stairs_list";

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <StairsList />
    </div>
  );
}
