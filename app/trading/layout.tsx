import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trading Cycle",
  description: "Trading Cycle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-neutral-400">{children}</main>
      </body>
    </html>
  );
}
