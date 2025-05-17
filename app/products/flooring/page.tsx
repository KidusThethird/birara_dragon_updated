"use client";
import React from "react";
import ProductsHero from "../../herosections/products_hero";
import FlooringList from "@/app/components/common_components/products_components/flooring_list";

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <FlooringList />
    </div>
  );
}
