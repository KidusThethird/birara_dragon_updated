"use client";
import React from "react";
import ProductsHero from "../../herosections/products_hero";

import WardrobeList from "@/app/components/common_components/products_components/wardrobe_list";

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <WardrobeList />
    </div>
  );
}
