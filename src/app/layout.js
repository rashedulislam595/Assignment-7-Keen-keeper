import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import Providers from "./lib/providers";


const geist = Geist({
  subsets: ["latin"],
});


export const metadata = {
  title: "Keen-Keeper",
  description: "A friendship management web app that helps you track and maintain meaningful relationships by logging interactions, monitoring contact frequency, and visualizing your social habits.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geist.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
