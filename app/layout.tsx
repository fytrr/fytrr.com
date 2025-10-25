import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// This is where you would import your font if you were self-hosting
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "CWC - Core Warrior Challenge",
  description:
    "The ultimate hybrid fitness race. 8 KM of running combined with 8 functional workout stations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* The <body> tag has your global styles.
        The Header and Footer components will wrap *every* page.
        The {children} prop is where your page.jsx files will be rendered.
      */}
      <body>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        {/* The Registration Modal can be here or in the Header, managed by React Context for global state */}
      </body>
    </html>
  );
}
