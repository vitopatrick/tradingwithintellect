import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Predictive Alpha",
  description: "Login to use feature",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen p-4 bg-slate-900">{children}</main>
      </body>
    </html>
  );
}
