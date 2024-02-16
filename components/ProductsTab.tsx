import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { jost, syne } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import AllProducts from "./Products";

export default function ProductsTab() {
  return (
    <section>
      {/* header */}
      <div className="text-center space-y-3">
        <h3 className={cn(syne.className, "text-3xl font-bold underline")}>
          Our Products
        </h3>
        <p
          className={cn(
            jost.className,
            "font-light capitalize lg:text-xl lg:w-[80%] mx-auto"
          )}
        >
          Our proprietary software has been designed, engineered, and tested to
          perform to give the individual investor an edge in today’s market.
        </p>
      </div>
      <div className="my-4">
        <Tabs defaultValue="all_products">
          <TabsList className={cn(syne.className, "w-full")}>
            <TabsTrigger value="all_products">All Products </TabsTrigger>
            <TabsTrigger value="AI">A.I</TabsTrigger>
            <TabsTrigger value="investment_tools">Investment Tools</TabsTrigger>
            <TabsTrigger value="trading_income">Trading & Income</TabsTrigger>
            <TabsTrigger value="quantum">Quantum</TabsTrigger>
          </TabsList>
          <TabsContent value="all_products">
            <AllProducts />
          </TabsContent>
          <TabsContent value="AI">
            <AllProducts category="AI" />
          </TabsContent>
          <TabsContent value="investment_tools">
            <AllProducts category="investment_tools" />
          </TabsContent>
          <TabsContent value="trading_income">
            <AllProducts category="trading_income" />
          </TabsContent>
          <TabsContent value="quantum">
            <AllProducts category="quantum" />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
