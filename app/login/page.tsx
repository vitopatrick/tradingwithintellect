"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { syne } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import React from "react";

export default function LoginPage() {
  return (
    <div className="h-screen flex items-center w-[90%] lg:w-[40%] mx-auto ">
      {/* card */}
      <Card className="flex-1">
        <CardHeader>
          <CardTitle className={cn(syne.className, "text-center underline")}>
            Welcome back
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Label htmlFor="email" className={cn(syne.className, "font-bold")}>
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              className={cn(syne.className, "font-semibold w-full")}
            />
          </div>
          <div className="space-y-3">
            <Label
              htmlFor="password"
              className={cn(syne.className, "font-bold")}
            >
              Password
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="password"
              className={cn(syne.className, "font-semibold w-full")}
            />
          </div>
          <Button
            variant={"destructive"}
            size={"lg"}
            className={cn(syne.className, "font-bold w-full my-3")}
          >
            Log In
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
