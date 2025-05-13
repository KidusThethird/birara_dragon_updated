"use client";
import React from "react";
import ProductsHero from "../../herosections/products_hero";

import HomeOfficeList from "@/app/components/common_components/products_components/home_office_list";

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <HomeOfficeList />
    </div>
  );
}
