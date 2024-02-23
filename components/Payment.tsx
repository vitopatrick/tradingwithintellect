"use client";

import { jost, syne } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import AddressForm from "./AddressForm";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { X } from "lucide-react";

const methods = ["Crypto", "ACH Transfers", "Wire Transfer"];

export default function PaymentForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");
  function openModal(e: any, id: string) {
    e.preventDefault();
    setId(id);
    setIsOpen(true);
  }
  return (
    <>
      <div className="lg:w-[50%] mx-auto p-3">
        <h1
          className={cn(
            syne.className,
            "font-bold text-2xl text-center underline"
          )}
        >
          Your Order Is Private and Secure
        </h1>
        <p className={cn(jost.className, "text-center")}>
          This checkout page is secured by powerful 128-bit encryption — This
          means your information will be safe & protected, and never shared with
          third parties.
        </p>
        <div className="my-3">
          <AddressForm />
          <div>
            <h1
              className={cn(
                syne.className,
                "font-bold text-2xl text-center underline"
              )}
            >
              Payment Information
            </h1>
            {/* Name on the card */}
            <div className=" mx-auto py-6">
              <Label className={cn(syne.className, "font-bold")}>
                Name on the card
              </Label>
              <Input className={cn(syne.className, "font-bold py-3")} />
            </div>
            {/* Credit Card Number*/}
            <div className=" mx-auto py-6">
              <Label className={cn(syne.className, "font-bold")}>
                Credit Card Number
              </Label>
              <Input className={cn(syne.className, "font-bold py-3")} />
            </div>
            {/* expiration date and CVV */}
            <div className="flex flex-col lg:flex-row gap-2">
              <div className="w-full py-6">
                <Label className={cn(syne.className, "font-bold")}>
                  Expiration Date
                </Label>
                <Input
                  className={cn(syne.className, "font-bold py-3 w-full")}
                />
              </div>
              <div className="w-full py-6">
                <Label className={cn(syne.className, "font-bold")}>CVV</Label>
                <Input
                  className={cn(syne.className, "font-bold py-3 w-full")}
                />
              </div>
            </div>
            <Button
              variant={"default"}
              size={"lg"}
              className={cn(syne.className, "font-bold w-full")}
            >
              Place Order
            </Button>
          </div>
          {/* other options */}
          <div className="my-2">
            <h1
              className={cn(
                syne.className,
                "font-bold text-2xl text-center underline"
              )}
            >
              Other Payment Options
            </h1>
            <div className="flex flex-col md:flex-row my-3 gap-4 justify-center items-center">
              {methods.map((method) => (
                <Button
                  key={method}
                  onClick={(e) => openModal(e, method)}
                  variant={"outline"}
                  className={cn(syne.className, "font-bold w-full")}
                >
                  {method}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <DetailsModal open={isOpen} method={id} close={setIsOpen} />
    </>
  );
}

const DetailsModal = ({ open, close, method }: any) => {
  return (
    <div
      className={
        open
          ? "fixed p-3 flex items-center justify-center bg-black/30 w-full h-full top-0 bottom-0 left-0 right-0"
          : "hidden"
      }
    >
      <div className="bg-white p-3 rounded-md font-body mx-auto  md:w-[60%]">
        <button onClick={() => close(false)}>
          <X />
        </button>
        {method == "Crypto" && <Crypto />}
        {method == "ACH Transfers" && <ACH />}
        {method == "Wire Transfer" && <WireTransfer />}
      </div>
    </div>
  );
};

const Crypto = () => {
  return (
    <div>
      <h4
        className={cn(
          syne.className,
          "font-bold text-2xl text-center underline"
        )}
      >
        Bitcoin Address
      </h4>
      <div className="text-xl font-mono text-center bg-neutral-200/30 rounded my-3 p-3 break-words">
        <h4>bc1qz7p9xvpavtzqt7dqtcedltwxhz4jeh97jvdpqk</h4>
      </div>
      <div className="w-[50%] mx-auto">
        <img src="/barcode.jpeg" alt="btc barcode" className="w-full" />
      </div>
    </div>
  );
};

const ACH = () => {
  return (
    <div className="[&_h3]:font-head [&_h3]:font-bold space-y-6">
      <div>
        <p
          className={cn(
            syne.className,
            "font-bold text-2xl text-center underline"
          )}
        >
          JP Morgan Chase Bank
        </p>
      </div>
      <div>
        <h3 className={cn(syne.className, "font-bold text-lg underline")}>
          Account Number
        </h3>
        <p className={cn(jost.className)}>558713825</p>
      </div>
      <div>
        <h3 className={cn(syne.className, "font-bold text-lg underline")}>
          ACH Routing Number
        </h3>
        <p className={cn(jost.className)}>071000013</p>
      </div>
      <div>
        <h3 className={cn(syne.className, "font-bold text-lg underline")}>
          Bank Address
        </h3>
        <p className={cn(jost.className)}>
          7501 Lemont Road L1 Woodridge, IL 60517-2653
        </p>
      </div>
    </div>
  );
};
const WireTransfer = () => {
  return (
    <div className="[&_h3]:font-head [&_h3]:font-bold space-y-6">
      <div>
        <p
          className={cn(
            syne.className,
            "font-bold text-2xl text-center underline"
          )}
        >
          JP Morgan Chase Bank
        </p>
      </div>
      <div>
        <h3 className={cn(syne.className, "font-bold text-lg underline")}>
          Account Number
        </h3>
        <p className={cn(jost.className)}>558713825</p>
      </div>
      <div>
        <h3 className={cn(syne.className, "font-bold text-lg underline")}>
          Wire routing Number
        </h3>
        <p className={cn(jost.className)}>021000021</p>
      </div>
      <div>
        <h3 className={cn(syne.className, "font-bold text-lg underline")}>
          Bank Address
        </h3>
        <p className={cn(jost.className)}>
          7501 Lemont Road L1 Woodridge, IL 60517-2653
        </p>
      </div>
    </div>
  );
};
