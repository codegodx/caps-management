import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caps Management",
  description: "Software Untuk Para Teknisi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ID"
      className="scrollbar-thumb-orange-700 scrollbar-track-black scrollbar scrollbar-w-1 overflow-y-scroll overflow-x-hidden scrollbar-thumb-rounded-full"
    >
      <body className={`!bg-black ${inter.className}`}>{children}</body>
    </html>
  );
}
