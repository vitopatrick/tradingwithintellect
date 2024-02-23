"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductsAbout from "@/components/ProductsAbout";
import JoinOurNewsletter from "@/components/join-our-newsletter";
import OurProducts from "@/components/our-products";
import { useChatSupport } from "@/hooks/useChatSupport";

export default function HomePage() {
  useChatSupport();
  return (
    <>
      <Navbar />
      <Hero />
      <OurProducts />
      <ProductsAbout
        imageUrl="/image.webp"
        title="Predictive Alpha"
        subtitle="Access Wall Street-caliber A.I. stock predictions designed specifically for the everyday investor"
        about="Predictive Alpha uses Trading Intellect's own A.I.-powered stock prediction system to provide price forecasts on thousands of stocks. These forecasts could enable you to avoid losses and make big monthly gains with a level of certainty that’s rarely — if ever — been achieved before."
        order={0}
      />
      <ProductsAbout
        imageUrl="/tradestop.svg"
        title="TradeStops"
        subtitle="Know precisely when to buy and when to sell."
        about="Trading Intellect's flagship product, TradeStops helps investors effectively and efficiently manage their investments. With powerful risk-based tools, TradeStops is designed to help you invest with risk parity."
        order={1}
      />
      <ProductsAbout
        imageUrl="/options360.svg"
        title="Options360"
        subtitle="Options-based opportunities without all the hassle."
        about="Use pre-built screeners to find options opportunities based on probability of profit, return on investment, and more. Or build your own custom screener to match any strategy you follow."
        order={0}
      />
      <JoinOurNewsletter />
      <Footer />
    </>
  );
}
