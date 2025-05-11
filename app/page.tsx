import Image from "next/image";
import Navbar from "./components/common_components/navbar";
import Hero from "./components/common_components/homepage_components/hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}
