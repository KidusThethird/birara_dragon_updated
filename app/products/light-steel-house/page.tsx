"use client";
import React from "react";
import ProductsHero from "../../herosections/products_hero";
import LightList from "@/app/components/common_components/products_components/light_list";

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <LightList />
    </div>
  );
}
