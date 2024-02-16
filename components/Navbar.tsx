"use client";

import { syne } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  {
    id: 1,
    title: "See Our Products",
    url: "/products",
  },
];

interface IMobileNav {
  active: boolean;
}

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav className="bg-blue-950 py-4 text-blue-50">
        {/* container */}
        <div className="flex w-[90%] mx-auto py-3 justify-between lg:items-center">
          <div>
            <Link
              href="/"
              className={cn(syne.className, "font-bold text-2xl lg:text-4xl")}
            >
              TradingIntellect
            </Link>
          </div>
          <div className="hidden lg:flex">
            {links.map((link) => (
              <Link
                href={link.url}
                key={link.id}
                className={cn(
                  syne.className,
                  "font-bold hover:underline hover:underline-offset-2"
                )}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <button
            className="block lg:hidden"
            onClick={() => setIsActive(!isActive)}
          >
            {isActive ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      <MobileNav active={isActive} />
    </>
  );
}

const MobileNav = ({ active }: IMobileNav) => {
  return (
    <div className={active ? "bg-blue-800 text-blue-50 lg:hidden" : "hidden"}>
      <div>
        {links.map((link) => (
          <Link
            href={link.url}
            key={link.id}
            className={cn(
              syne.className,
              "hover:bg-blue-300 font-bold transition-all hover:text-blue-900 p-6 w-full inline-block"
            )}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
