"use client";
import React from "react";
import ProductsHero from "../../herosections/products_hero";

import CarsAndMachineryList from "@/app/components/common_components/products_components/carandmachinery_list";

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <CarsAndMachineryList />
    </div>
  );
}
