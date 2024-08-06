import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "mood2music",
  description: "personalized music recommendations based on your mood",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Analytics />
      </body>
    </html>
  );
}
