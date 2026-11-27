import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Fix My Old Backyard | Learn Before You Build: Backyard Remodeling Guides",
  description:
    "Free articles, practical PDF guides and real projects on outdoor kitchens, patio covers, pools, decks and driveways: costs, materials and mistakes to avoid. From the team behind BBQing with Billy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased flex min-h-screen flex-col">
        <Nav />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
