import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/NavbarGagal";
import Navbar2 from "./components/Navbar2";
import NavbarCadangan from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BINAL Socio.Creative | Company Profile",
  description: "Social Creative Company",
  openGraph: {
    title: "BINAL Socio.Creative | Company Profile",
    description: "Social Creative Company",
    images:
      "https://cdn.discordapp.com/attachments/1168934257230626936/1181939883380580454/logobinalsocio.png?ex=6582e24b&is=65706d4b&hm=c005ed6935962ce1359cbc58f9414ecffa09e7f6eacb3c2787303a6e5b087ab4&",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
