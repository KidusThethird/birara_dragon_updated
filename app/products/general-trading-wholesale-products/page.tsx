"use client";
import React from "react";
import ProductsHero from "../../herosections/products_hero";
import GeneralList from "@/app/components/common_components/products_components/genral_list";

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <GeneralList />
    </div>
  );
}
