"use client";
import React from "react";
import ProductsHero from "../../herosections/products_hero";

import ArcList from "@/app/components/common_components/products_components/arc_list";

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <ArcList />
    </div>
  );
}
