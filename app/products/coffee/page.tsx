import CoffeeDetails from "@/app/components/common_components/products_components/coffee_details";
import ProductsHero from "@/app/herosections/products_hero";
import React from "react";

export default function CoffePage() {
  return (
    <div>
      <ProductsHero />
      <CoffeeDetails />
    </div>
  );
}
