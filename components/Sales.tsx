import { jost, syne } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

interface ISales {
  report: string;
  title: string;
  price: string;
  image: string;
  t1: string;
  t2: string;
  t3?: string;
}

export default function Sales({
  report,
  title,
  price,
  image,
  t1,
  t2,
  t3,
}: ISales) {
  return (
    <div className="flex items-center">
      <div className="flex-1">
        <img src={image} alt="cover art" />
      </div>
      <div className="space-y-3 flex-1">
        <span
          className={cn(
            syne.className,
            "font-bold bg-teal-300 text-white p-2 rounded inline-block"
          )}
        >
          {report}
        </span>
        <h1 className={cn(syne.className, "font-bold text-xl")}>{title}</h1>
        <div className="space-y-3">
          <p className={cn(jost.className, "text-lg")}>{t1}</p>
          <p className={cn(jost.className, "text-lg")}>{t2}</p>
          <p className={cn(jost.className, "text-lg")}>{t3}</p>
        </div>
      </div>
    </div>
  );
}
