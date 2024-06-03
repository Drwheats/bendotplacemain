import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/components/Header";
import CurrentSectionContextProvider from "@/context/currentSectionContext";
import {Toaster} from "react-hot-toast";
import Footer from "@/app/Footer";
import ThemeSwitcher from "@/components/themeSwitcher";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ben dot Place",
  description: "Ben's programming portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
    <body className={'${inter.className} bg-gray-100 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90'}>
    <div
        className="bg-green-200 absolute top-[-6rem] right[11rem] h-[32rem] w-[32rem] rounded-full blur-[10rem] sm:w-[69rem] dark:bg-[#900C3F]"></div>
    <div
        className="bg-blue-200 absolute top-[-1rem] -z-10 left[-35rem] h-[32rem] w-[50rem] rounded-full blur-[10rem] sm:w-[69rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
    <ThemeContextProvider>
    <CurrentSectionContextProvider >
    <Header />
    {children}
    <Toaster position="bottom-left"/>
    </CurrentSectionContextProvider>
    <Footer />
    <ThemeSwitcher />
    </ThemeContextProvider>

    </body>
    </html>
  );
}
