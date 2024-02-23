import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PaymentForm from "@/components/Payment";
import { jost, syne } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

export default function ToolsPage() {
  return (
    <>
      <Navbar />
      <div>
        <div className="lg:w-[50%] mx-auto p-3 space-y-4">
          <h1 className={cn(syne.className, "font-bold text-2xl lg:text-4xl ")}>
            TradeStops®
          </h1>
          <p className={cn(jost.className)}>
            Trading Intellect flag ship investing tool demonstrates why this
            company has emerged as a fintech leader. Sync your investment
            portfolios and track the overall health and performance of every
            stock you own.
          </p>
          <p className={cn(jost.className)}>
            Learn to trade like an expert—maximizing your gains and keeping what
            you’ve earned –by taking emotion out of your investing process. Get
            daily alerts for stocks operating outside their normal volatility
            based on our proprietary analytics to tell you when you should sell
            – and when you should buy back in.
          </p>
          <p className={cn(jost.className)}>
            Get started today with the level of TradeStops best suited for your
            needs.
          </p>
        </div>
        <PaymentForm />
      </div>
      <Footer />
    </>
  );
}
