import React from "react";
import { Input } from "./ui/input";
import { syne } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";

export default function AddressForm() {
  return (
    <div>
      {/* flex  Email && Retype Email*/}
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="w-full py-6">
          <Label className={cn(syne.className, "font-bold")}>Email</Label>
          <Input
            placeholder="Enter your Preferred Email"
            className={cn(syne.className, "font-bold py-3 w-full")}
          />
        </div>
        <div className="w-full py-6">
          <Label className={cn(syne.className, "font-bold")}>
            Retype email
          </Label>
          <Input
            placeholder="Retype your Email"
            className={cn(syne.className, "font-bold py-3 w-full")}
          />
        </div>
      </div>
      {/* flex  First Name && Last Name*/}
      <div className="flex flex-col lg:flex-row gap-2">
        <div className=" w-full  py-6">
          <Label className={cn(syne.className, "font-bold")}>First Name</Label>
          <Input
            placeholder="Enter your Preferred Email"
            className={cn(syne.className, "font-bold py-3 w-full")}
          />
        </div>
        <div className=" w-full  py-6">
          <Label className={cn(syne.className, "font-bold")}>Last Name</Label>
          <Input
            placeholder="Retype your Email"
            className={cn(syne.className, "font-bold py-3 w-full")}
          />
        </div>
      </div>
      {/* Address */}
      <div className=" mx-auto py-6">
        <Label className={cn(syne.className, "font-bold")}>Address</Label>
        <Input
          placeholder="Enter Address"
          className={cn(syne.className, "font-bold py-3")}
        />
      </div>
      {/* Address 2 */}
      <div className=" mx-auto py-6">
        <Label className={cn(syne.className, "font-bold")}>Address 2</Label>
        <Input
          placeholder="Enter Second Address"
          className={cn(syne.className, "font-bold py-3")}
        />
        {/* City */}
        <div className=" mx-auto py-6">
          <Label className={cn(syne.className, "font-bold")}>City</Label>
          <Input className={cn(syne.className, "font-bold py-3")} />
        </div>
        {/* State */}
        <div className=" mx-auto py-6">
          <Label className={cn(syne.className, "font-bold")}>State</Label>
          <Input className={cn(syne.className, "font-bold py-3")} />
        </div>
        {/* Phone Number */}
        <div className=" mx-auto py-6">
          <Label className={cn(syne.className, "font-bold")}>
            Phone Number
          </Label>
          <Input className={cn(syne.className, "font-bold py-3")} />
        </div>
      </div>
    </div>
  );
}
