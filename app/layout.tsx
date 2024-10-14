import { Nunito } from 'next/font/google';

import type { Metadata } from "next";
import "./globals.css";
import Navbar from './components/navbar/Navbar';

export const metadata: Metadata = {
  title: "Strava API Exploration",
  description: "Strava API exploration",
};

const font = Nunito ({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en">
          <body
            className={font.className}
          >
            <Navbar/>
            {children}
          </body>
        </html>
  );
}
