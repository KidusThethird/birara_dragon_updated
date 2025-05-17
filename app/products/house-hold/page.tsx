"use client";
import React from "react";
import ProductsHero from "../../herosections/products_hero";

import HouseHoldList from "@/app/components/common_components/products_components/house_hold_list";

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <HouseHoldList />
    </div>
  );
}
