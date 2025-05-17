"use client";
import React from "react";
import ProductsHero from "../../herosections/products_hero";
import FirePlaceList from "@/app/components/common_components/products_components/fireplace_list";

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <FirePlaceList />
    </div>
  );
}
