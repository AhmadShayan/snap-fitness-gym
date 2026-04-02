import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Snap Fitness Gym | Johar Town, Lahore",
  description:
    "Snap Fitness Gym — your premier fitness destination in Johar Town, Lahore. Personal training, group classes, and state-of-the-art equipment. Join today.",
  keywords: "gym Lahore, fitness center Johar Town, personal training Lahore, gym membership Lahore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
