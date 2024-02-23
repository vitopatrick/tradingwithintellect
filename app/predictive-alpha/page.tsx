import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PaymentForm from "@/components/Payment";
import Sales from "@/components/Sales";
import { jost, syne } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

export default function PredictiveAlphaPage() {
  return (
    <>
      <Navbar />
      <div>
        {/* hero */}
        <div className="p-5 space-y-5 bg-neutral-200">
          <h1
            className={cn(
              syne.className,
              "font-bold text-2xl text-center underline"
            )}
          >
            Welcome to Trading Intellect BRAND—NEW A.I.-Driven Research Service:
          </h1>
          <h1
            className={cn(
              syne.className,
              "font-bold text-2xl lg:text-6xl text-center underline"
            )}
          >
            Predictive Alpha
          </h1>
          <h3
            className={cn(
              syne.className,
              "font-bold text-2xl text-center underline"
            )}
          >
            By Becoming a Member Right Now, You’ll Receive…
          </h3>
          <div className="lg:w-[40%] mx-auto bg-white p-3 rounded border border-green-900">
            <img
              src="https://s3.amazonaws.com/marketingassets.cloudsna.com/prod/images/tradestops/retail/PRP_Predictive_Alpha_Front_End_GFX77part3.png"
              alt="the cover art"
            />
            <ol className="list-inside space-y-4 my-5">
              <li className={cn(jost.className, "text-xl font-bold")}>
                ONE FULL YEAR MEMBERSHIP to Predictive Alpha
              </li>
              <li className={cn(jost.className, "text-xl")}>
                Special Report #1: The Predictive A.I. Playbook
              </li>
              <li className={cn(jost.className, "text-xl")}>
                Special Report #2: A.I. Investing Revolution
              </li>
            </ol>
          </div>
        </div>
        {/* write ups */}
        <div className="lg:w-[50%] p-4 mx-auto space-y-4">
          <p className={cn(jost.className)}>
            What would you do if you had next month’s stock prices, today?
          </p>
          <p className={cn(jost.className)}>
            That’s the investor’s dream… isn’t it?
          </p>
          <p className={cn(jost.className)}>
            To know what’s going to happen in the markets in the near-future
            with a high degree of certainty.
          </p>
          <p className={cn(jost.className)}>
            If you had this kind of information, you’d be able to target winner
            after winner… and avoid the losers.
          </p>
          <p className={cn(jost.className)}>
            And it wouldn’t be long before you stacked up some serious profits.
          </p>
          <p className={cn(jost.className)}>
            Well, now Trading Intellect, the company behind some of the world’s
            most cutting-edge financial innovations, is turning that dream into
            reality..
          </p>
          <p className={cn(jost.className)}>
            They’ve found a way to put the power to predict stock prices with
            incredible accuracy squarely in your hands!
          </p>
        </div>
        <div className="lg:w-[50%] p-4 mx-auto space-y-4">
          <h1
            className={cn(
              syne.className,
              "font-bold text-xl text-center text-green-700"
            )}
          >
            Here’s a Detailed Breakdown of <br /> Everything You’ll Get Right
            Now…
          </h1>
          <h1 className={cn(syne.className, "font-bold text-2xl text-center")}>
            One Full Year Membership to Predictive Alpha - $199
          </h1>
          <p className={cn(jost.className)}>
            As a member, you’ll have access to research from a team of the top
            market analysts and data scientists in the country who will be
            interpreting An-E’s findings and issuing two new stock
            recommendations every month.{" "}
          </p>
          <p className={cn(jost.className)}>
            Not only that, you’ll be able to look up one stock per week to see
            what An-E’s saying the future price of that stock will be in one
            month. 
          </p>

          <p className={cn(jost.className)}>
            And because Predictive Alpha will contain all of An-E’s stock
            forecasts, updated daily, for nearly 3,000 stocks, funds, and
            ETFs... you’ll have many stocks to choose from...
          </p>
          <p className={cn(jost.className)}>
            And we plan on adding even more in the future.{" "}
          </p>
        </div>
        {/* products */}
        <div className="lg:w-[50%] p-4 mx-auto space-y-4">
          <Sales
            image="https://s3.amazonaws.com/marketingassets.cloudsna.com/prod/images/tradestops/2306PRA+-+Predictive+Alpha+Front+End+Launch/PRP_Predictive_Alpha_GFX140.png"
            title="The Predictive A.I. Playbook"
            price="(Value $99 | Yours FREE)"
            report="Special Report #1"
            t1="This “playbook” is the ultimate starter guide to begin investing using An-E’s recommendations. "
            t2="It will tell you step-by-step how to use our predictive software, how to interpret our recommendations and how to place your trades. "
            t3="It doesn’t matter if you’ve never bought a stock before in your life… you can use this service."
          />
          <Sales
            image="https://s3.amazonaws.com/marketingassets.cloudsna.com/prod/images/tradestops/2306PRA+-+Predictive+Alpha+Front+End+Launch/PRP_Predictive_Alpha_GFX73.png"
            title="A.I. Investing Revolution"
            price="(Value $99 | Yours FREE)"
            report="Special Report #2"
            t1="This brand-new special report is all about what’s going on today in the world of A.I. and machine learning.  "
            t2="It dives into the history of A.I. with interesting stories and anecdotes of early breakthroughs in this cutting-edge field… "
            t3="Taking you all the way up to the present day, bringing you up-to-speed on the latest news, tech, and behind-the-scenes projects that are in the works today… especially in the field of finance."
          />
          <Sales
            image="https://s3.amazonaws.com/marketingassets.cloudsna.com/prod/images/tradestops/2306PRA+-+Predictive+Alpha+Front+End+Launch/PRP_Predictive_Alpha_GFX112.png"
            title="The Foundations of Wealth E-Book"
            price="(Value $99 | Yours FREE)"
            report="Special Report"
            t1="This E-book walks you through the investing world step-by-step… everything from building a portfolio to risk management to asset allocation… it’s all in there."
            t2="And best of all, there’s no jargon, no complicated charts and graphs, it’s written in simple, plain language that anyone can follow. "
          />
        </div>
        {/* writes ups */}
        <div className="lg:w-[50%] p-4 mx-auto space-y-4">
          <p className={cn(jost.className)}>
            I hope you recognize the rare opportunity you have before you today…
          </p>
          <p className={cn(jost.className)}>
            To try a brand-new research service from Trading Intellect — a Wall
            Street caliber, A.I.-driven stock forecasting system — the only one
            of its kind we know of on the market…
          </p>

          <p className={cn(jost.className)}>
            And you can try it for the retail price of $199.
          </p>
          <p className={cn(jost.className)}>
            And if you’re unsatisfied with your purchase for any reason, simply
            call our friendly, U.S.-based customer care team within 60 days and
            they’ll issue you a full refund of the purchase price.
          </p>
          <p className={cn(jost.className)}>
            So, if you’re serious about harnessing the power of A.I. and machine
            learning to predict stock prices with incredible accuracy, so you
            can make massive gains and avoid big losses month after month… then
            I encourage you to become a member of Predictive Alpha today.
          </p>
          <p className={cn(jost.className)}>
            To get started, simply fill out the secure order form below.
          </p>
          <p className={cn(jost.className)}>
            Once completed, you’ll gain access to everything mentioned above.
          </p>
          <p className={cn(jost.className)}>
            And again, congratulations on making this wise financial decision!
          </p>
          <p className={cn(jost.className)}>
            To get started, fill out the secure order form below.
          </p>
        </div>
        {/* Payment gateway */}
        <PaymentForm />
      </div>
      <Footer />
    </>
  );
}
