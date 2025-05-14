"use client";
import React from "react";
import ProductsHero from "../../herosections/products_hero";

import ElectricalSolutionsList from "@/app/components/common_components/products_components/electrical_solutions_list";

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <ElectricalSolutionsList />
    </div>
  );
}
