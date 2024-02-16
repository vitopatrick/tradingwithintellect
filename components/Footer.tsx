import { syne } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-50 py-4">
      {/* container */}
      <div className="w-[90%] mx-auto p-4 flex gap-4 lg:items-center justify-between lg:flex-row flex-col">
        <div className="space-y-3 py-5">
          <Link
            href="/"
            className={cn(
              syne.className,
              "font-bold text-2xl lg:text-4xl underline"
            )}
          >
            TradingIntellect
          </Link>
          <p className={cn(syne.className, "font-bold text-neutral-400")}>
            © 2024 Trading Intellect. All rights reserved. 1125 N. Charles St,
            Baltimore, MD 21201.
          </p>
        </div>
        <div className={cn(syne.className, "font-bold")}>
          <p className="text-neutral-400">
            Have a question about your service?
          </p>
          <p>
            or reach out to{" "}
            <span className="underline">support@tradingintellect.com</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
