"use client";
import React from "react";
import ProductsHero from "../../herosections/products_hero";

import CurtainList from "@/app/components/common_components/products_components/curtain_list";

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <CurtainList />
    </div>
  );
}
