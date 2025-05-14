"use client";
import React from "react";
import ProductsHero from "../../herosections/products_hero";

import KitchenList from "@/app/components/common_components/products_components/kitchen_list";

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <KitchenList />
    </div>
  );
}
