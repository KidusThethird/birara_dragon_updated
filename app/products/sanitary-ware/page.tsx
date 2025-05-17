"use client";
import React from "react";
import ProductsHero from "../../herosections/products_hero";
import SanitaryList from "@/app/components/common_components/products_components/sanitary_list";

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <SanitaryList />
    </div>
  );
}
