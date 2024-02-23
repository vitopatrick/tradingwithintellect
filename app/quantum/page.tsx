import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PaymentForm from "@/components/Payment";
import { jost, syne } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

export default function QuantumPage() {
  return (
    <>
      <Navbar />
      <div>
        <div className="space-y-3 bg-neutral-300 p-4">
          <h1
            className={cn(
              syne.className,
              "font-bold text-2xl lg:text-4xl text-center underline"
            )}
          >
            My System does the heavy lifting
          </h1>
          <p
            className={cn(
              syne.className,
              "font-bold text-2xl text-center underline"
            )}
          >
            (All you have to do is follow along)
          </p>
          <ol className="lg:w-[50%] p-3 mx-auto space-y-4 list-decimal">
            <li className={cn(jost.className)}>
              I’ve called every major market top (and bottom) of the last
              decade...
            </li>
            <li className={cn(jost.className)}>
              I’ve predicted the rise of countless blue-chips, YEARS in
              advance...
            </li>
            <li>I’ve helped other people get richer for 20+ years...</li>
            <li className={cn(jost.className)}>
              I’ve called every major market top (and bottom) of the last
              decade...
            </li>
            <li className={cn(jost.className)}>
              And now, I’m offering the opportunity to help YOU.
            </li>
          </ol>
        </div>
        <div className="lg:w-[50%] p-4 mx-auto space-y-4">
          <p className={cn(jost.className)}>Hi, I’m Jason Bodner.</p>
          <p className={cn(jost.className)}>
            I’m an ex-Wall Street pro who was heading a trading desk at Cantor
            Fitzgerald in 2010.
          </p>
          <p className={cn(jost.className)}>
            My whole focus was to match big institutional buyers with sellers. I
            was the guy who people trusted to move millions of shares around
            that could’ve been worth hundreds of millions of dollars.
          </p>
          <p className={cn(jost.className)}>
            At that point of my life, I learned how the inflow of “Big Money”
            could influence stock prices and started working on a system that
            can detect it in real-time. That way, it would provide an edge as I
            wouldn’t have to wait to see quarterly filings...
          </p>
          <p className={cn(jost.className)}>
            I would know what is happening in real-time.
          </p>
          <p className={cn(jost.className)}>
            I decided to leave Wall Street...
          </p>
          <p className={cn(jost.className)}>
            And now, I’m bringing my system — Quantum Edge Pro — to everyday
            Americans... I’m bringing it to YOU!
          </p>
          <p className={cn(jost.className)}>
            My 3-tier tracking system behind Quantum Edge Pro detects the kinds
            of multi-billion-dollar transactions that are almost impossible to
            trace... and go unnoticed by 99.9% of the population...
          </p>
          <p className={cn(jost.className)}>
            But can also move stock prices more so than any other force out
            there.
          </p>
          <p className={cn(jost.className)}>
            This is how I’ve been able to call every major market top (and
            bottom) of the last decade.
          </p>
          <p className={cn(jost.className)}>
            It’s how I predicted the market’s recent uptick, weeks before it
            happened.
          </p>
          <div>
            <img
              src="https://s3.amazonaws.com/marketingassets.cloudsna.com/prod/images/tradestops/retail/graphic9-transparent.png"
              alt="graph"
            />
          </div>
          <p className={cn(jost.className)}>Hi, I’m Jason Bodner.</p>
          <p className={cn(jost.className)}>
            Because the thing is… you don’t have to be an expert at computer
            programming...
          </p>
          <p className={cn(jost.className)}>Understanding algorithms...</p>
          <p className={cn(jost.className)}>
            Or spend all day staring at a screen, poring over price movements
            and data.
          </p>
          <p className={cn(jost.className)}>
            My system does all the hard work, making it so that the only thing
            you have to do is make sure you keep an eye out for my emails that
            contain trades to make as well as critical updates.
          </p>
          <p className={cn(jost.className)}>
            I know your time is valuable, so let me get right into it.
          </p>
          <p className={cn(jost.className)}>
            With your membership to Quantum Edge Pro, you will receive:
          </p>
        </div>
        <PaymentForm />
      </div>
      <Footer />
    </>
  );
}
