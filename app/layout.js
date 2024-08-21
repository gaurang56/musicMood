import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "mood2music",
  description: "personalized music recommendations based on your mood",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
        <meta name="monetag" content="996ac697b09dc65e011834c0491f9a66" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
