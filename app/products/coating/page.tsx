"use client";
import React from "react";
import ProductsHero from "../../herosections/products_hero";
import CoatingList from "@/app/components/common_components/products_components/coating_list";

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <CoatingList />
    </div>
  );
}
