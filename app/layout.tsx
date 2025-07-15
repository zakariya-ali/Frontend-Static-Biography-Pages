import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StagewiseToolbarWrapper from "./StagewiseToolbar.tsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Bio Pages",
  description:
    "Beautiful, customizable bio pages for creators and professionals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {process.env.NODE_ENV === "development" && <StagewiseToolbarWrapper />}
        {children}
      </body>
    </html>
  );
}
