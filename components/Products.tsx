import { jost, syne } from "@/lib/fonts";
import products from "@/lib/products";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

interface IProducts {
  category?: string;
}

export default function AllProducts({ category }: IProducts) {
  const filteredList =
    category && products.filter((product) => product.category == category);

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 p-2 md:place-items-center md:place-content-center w-[80%] lg:w-[90%] mx-auto">
      {!category
        ? products.map((product) => (
            <div key={product.id} className="rounded shadow-sm">
              <div>
                <img src={product.image} alt={product.title} />
              </div>
              <div className="p-3 space-y-3">
                <h2
                  className={cn(
                    syne.className,
                    "font-bold text-xl md:text-2xl"
                  )}
                >
                  {product.title}
                </h2>
                <p
                  className={cn(
                    jost.className,
                    "font-light md:text-lg leading-loose line-clamp-2"
                  )}
                >
                  {product.about}
                </p>
                <Button
                  asChild
                  variant={"ghost"}
                  className={cn(syne.className, "font-bold")}
                >
                  <Link href={"/login"}>Visit Website</Link>
                </Button>
              </div>
            </div>
          ))
        : filteredList &&
          filteredList.map((product) => (
            <div key={product.id} className="rounded shadow-sm">
              <div>
                <img src={product.image} alt={product.title} />
              </div>
              <div className="p-3 space-y-3">
                <h2
                  className={cn(
                    syne.className,
                    "font-bold text-xl md:text-2xl"
                  )}
                >
                  {product.title}
                </h2>
                <p
                  className={cn(
                    jost.className,
                    "font-light md:text-lg leading-loose line-clamp-2"
                  )}
                >
                  {product.about}
                </p>
                <Button
                  asChild
                  variant={"link"}
                  className={cn(syne.className, "font-bold")}
                >
                  <Link href={"/login"}>Visit Website</Link>
                </Button>
              </div>
            </div>
          ))}
    </div>
  );
}
