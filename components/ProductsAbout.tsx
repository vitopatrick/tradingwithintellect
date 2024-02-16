import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { jost, syne } from "@/lib/fonts";
import { cn } from "@/lib/utils";

interface IProductAbout {
  imageUrl: string;
  title: string;
  subtitle: string;
  about: string;
  order: number;
}

export default function ProductsAbout({
  imageUrl,
  about,
  subtitle,
  title,
  order,
}: IProductAbout) {
  return (
    <div className="my-[10rem]">
      <div className="p-4 lg:p-0 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="lg:p-[4rem] space-y-6 order-last">
          <h2
            className={cn(
              syne.className,
              "font-bold uppercase underline text-blue-700/70"
            )}
          >
            {title}
          </h2>
          <h3
            className={cn(
              syne.className,
              "font-bold text-2xl lg:text-4xl capitalize"
            )}
          >
            {subtitle}
          </h3>
          <p className={cn(jost.className, "font-light")}>{about}</p>
          <Button
            variant={"link"}
            className={cn(syne.className, "font-bold text-lg")}
          >
            <Link href="/products">Learn More</Link>
          </Button>
        </div>
        <div className={order == 1 ? "order-first" : "order-last"}>
          <img src={imageUrl} alt="the image" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
