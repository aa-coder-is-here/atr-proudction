"use client";
import AtrAbout from "@/Components/AtrAbout";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import HeroSection from "@/Components/HeroSection";
import PortfolioGrid from "@/Components/Services";
import ServicesSection from "@/Components/ServiceSection";
import Lenis from "lenis";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);
  return (
    <div className={`w-full h-auto`}>
      <Header />
      <HeroSection />
      <AtrAbout />
      <ServicesSection />
      <PortfolioGrid />
      <Footer />
    </div>
  );
};

export default Home;
