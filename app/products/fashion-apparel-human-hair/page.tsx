"use client";
import React from "react";
import ProductsHero from "../../herosections/products_hero";

import FashionList from "@/app/components/common_components/products_components/fashion_list";

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <FashionList />
    </div>
  );
}
