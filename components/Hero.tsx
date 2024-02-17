import { jost, syne } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="h-screen bg-blue-950 text-blue-50 flex justify-center flex-col px-[2rem]">
      <div className="space-y-6 p-5">
        <h1
          className={cn(
            syne.className,
            "text-3xl lg:text-6xl font-bold underline"
          )}
        >
          Trust World class ,Trust Trading Intellect Today
        </h1>
        <p className={cn(jost.className, "font-light leading-relaxed text-xl")}>
          Discover hedge fund-level insights designed for the individual
          investor, like you.
        </p>
        <Button
          asChild
          size={"lg"}
          variant={"secondary"}
          className={cn(syne.className, "font-bold text-xl")}
        >
          <Link href="products">Discover More</Link>
        </Button>
      </div>
    </section>
  );
}
