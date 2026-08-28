import Hero from "./components/Hero";
import LogoCarousel from "./components/LogoCarousel";
import About from "./components/About";
import VehicleTypes from "./components/VehicleTypes";
import BatteryCarousel from "./components/BatteryCarousel";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <VehicleTypes />
      <BatteryCarousel />
      <LogoCarousel />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
}
