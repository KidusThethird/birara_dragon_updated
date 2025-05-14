"use client";
import React from "react";
import ProductsHero from "../../herosections/products_hero";

import AluminumList from "@/app/components/common_components/products_components/aluminum_list";

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <AluminumList />
    </div>
  );
}
