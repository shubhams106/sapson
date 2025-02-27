import type { Metadata } from "next";
import localFont from "next/font/local";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

import "./globals.css";
import { auth } from "@/auth";
import { Toaster } from "@/components/ui/toaster";
import ThemeProvider from "@/context/Theme";

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 700 800 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 700",
});

export const metadata: Metadata = {
  title: "SapsonPharma",
  description:
  "Your trusted pharmaceutical partner. Browse our extensive range of pharmaceutical products including tablets, injections, syrups, and softgels for both wholesale and retail customers. Inquire about our products, get detailed information, and connect with us for your pharmaceutical needs.",
  icons: {
    icon: "/images/sapson-icon.jpg", 
  },
  keywords: [
    "pharmaceutical products",
    "wholesale medicines",
    "retail medicines",
    "buy medicines online",
    "tablets supplier",
    "injections supplier",
    "syrups wholesale",
    "softgel capsules",
    "third-party pharma manufacturing",
    "contract pharma manufacturing",
    "generic medicines supplier",
    "pharmaceutical distributor",
    "bulk medicine supply",
    "B2B pharmaceutical",
    "pharma wholesale market",
    "trusted pharma supplier",
    "ethical pharma products",
    "best medicine supplier",
    "pharma business inquiries",
    "PCD PHARMA FRANCHISE COMPANY",
    "BEST PCD COMPANY",
    "PCD PHARMA COMPANY IN AMBALA",
    "PCD PHARMA FRANCHISE",
    "Pharma franchise company in india",
    "Pharma franchise company in Chandigarh",
    "How to start PCD Pharma company",
    "PCD Pharma company price list",
    "PCD Pharma companies list",
    "PCD Pharma franchise with own manufacturing",
    "Best pharmaceutical company in india",
    "Pharma franchise company in Delhi",
    "Pharma franchise company in Gujarat",
    "Pharma franchise company in j&k",
    "Pharma franchise company in Himachal pradesh",
    "Pharma franchise company in Baddi",
    "Pharma franchise company in kurukshetra",
    "Pharma franchise company in telengana",
    "Pharma franchise company in Assam",
    "Pharma franchise company in west bengal",
    "Pharma franchise company in Kerala",
    "Pharma franchise company in Hyderabad",
    "Pharma franchise company in Maharashtra",
    "Pharma franchise company in jharkhand",
    "Pharma franchise company in uttrakhand"
  ],
  authors: [
    {
      name: "SapsonPharma",
      url: "https://www.sapsonpharma.com",
    },
  ],
  
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <SessionProvider session={session}>
        <body
          className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
};

export default RootLayout;
