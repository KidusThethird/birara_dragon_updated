"use client";
import React from "react";
import ProductsHero from "../../herosections/products_hero";

import DoorsList from "@/app/components/common_components/products_components/doors_list";

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <DoorsList />
    </div>
  );
}
