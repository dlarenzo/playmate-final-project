import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import BannerMessage from "./components/BannerMessage";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Playmate - Gamer Website",
  description: "Gamer website for all your gaming needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <BannerMessage />
        <Footer />
      </body>
    </html>
  );
}
