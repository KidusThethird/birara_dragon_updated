"use client";
import React from "react";
import ProductsHero from "../../herosections/products_hero";

import WallList from "@/app/components/common_components/products_components/wall_list";

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <WallList />
    </div>
  );
}
