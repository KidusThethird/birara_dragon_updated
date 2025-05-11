import Image from "next/image";

import Hero from "./components/common_components/homepage_components/hero";
import Navbar from "./components/common_components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}
