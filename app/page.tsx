import FourSection from "./components/common_components/homepage_components/four_section";
import Hero from "./components/common_components/homepage_components/hero";
import Mainservices from "./components/common_components/homepage_components/main_components";
import Ourservices from "./components/common_components/homepage_components/ourservices";
import Navbar from "./components/common_components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Ourservices />
      <FourSection />
      <Mainservices />
    </div>
  );
}
