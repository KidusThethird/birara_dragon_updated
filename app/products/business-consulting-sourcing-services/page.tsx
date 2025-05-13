"use client";
import React from "react";
import ProductsHero from "../../herosections/products_hero";

import BusinessList from "@/app/components/common_components/products_components/business_list";

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <BusinessList />
    </div>
  );
}
