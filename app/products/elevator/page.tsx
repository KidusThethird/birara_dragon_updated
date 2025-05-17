"use client";
import React from "react";
import ProductsHero from "../../herosections/products_hero";

import ElevatorList from "@/app/components/common_components/products_components/elevator_list";

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <ElevatorList />
    </div>
  );
}
