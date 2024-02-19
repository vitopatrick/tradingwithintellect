import { jost, syne } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

export default function OurProducts() {
  return (
    <div className="my-4">
      <div className="text-center space-y-3 p-4">
        <h1 className={cn(syne.className, "text-2xl font-bold underline")}>
          Our Products
        </h1>
        <p className={cn(jost.className, "font-light")}>
          Designed to help take the emotion out of investing, our data-driven
          software turns macro-trends into actionable insights.
        </p>
      </div>
    </div>
  );
}
