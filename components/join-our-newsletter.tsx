import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { syne } from "@/lib/fonts";

export default function JoinOurNewsletter() {
  return (
    <div className="bg-neutral-100 p-4 space-y-3 mt-4">
      <h1
        className={cn(
          syne.className,
          "font-bold underline text-2xl lg:text-3xl text-center"
        )}
      >
        Join Our Newsletter
      </h1>
      <div className="space-y-3 lg:w-[50%] mx-auto py-6">
        <Input
          placeholder="Enter your Preferred Email"
          className={cn(syne.className, "font-bold py-3")}
        />
        <Button className={cn(syne.className, "font-bold")} size={"lg"}>
          Subscribe Now
        </Button>
      </div>
    </div>
  );
}
