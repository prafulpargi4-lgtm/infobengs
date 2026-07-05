import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import WhyChoose from "./components/WhyChoose"; // 1. Import karein

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <Stats />
      <WhyChoose /> {/* 2. Yahan use karein */}
    </>
  );
}