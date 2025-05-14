"use client";
import React from "react";
import ProductsHero from "../../herosections/products_hero";
import GypsumList from "@/app/components/common_components/products_components/gypsum_list";

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <GypsumList />
    </div>
  );
}
