import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { jost, syne } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

export default function TradingPage() {
  return (
    <>
      <div className=" h-screen flex items-center mx-2">
        <div className="lg:w-[50%] mx-auto p-3 bg-white space-y-6 rounded-md">
          <h1
            className={cn(
              syne.className,
              "font-bold text-2xl lg:text-4xl text-center underline"
            )}
          >
            Yes! I want to know more about Trade Cycles!
          </h1>
          <p className={cn(jost.className, " text-2xl text-center ")}>
            Trade Cycles currently retails for $3500.
          </p>
          <p className={cn(jost.className, " text-xl text-center ")}>
            To best serve you, please contact our customer success team to learn
            more about this or any of our other services. Thank you!
          </p>
        </div>
      </div>
    </>
  );
}
