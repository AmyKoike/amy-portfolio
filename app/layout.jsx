
import "bootstrap/dist/css/bootstrap.min.css";

import "./globals.css";
import Navbar from "../components/Navbar";
import { Outfit, Inter } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"], 
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-inter",
});

export const metadata = { title: 'Amy Portfolio' };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

