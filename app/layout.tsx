// import Pattern from "./components/Pattern";
import "./globals.css";
import type { Metadata } from "next";
import Provider from "./components/content/Provider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Rahmat Hidayat",
  description: "Made with ❤️ and NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="font-Poppins">
        <Provider defaultTheme="light" attribute="class">
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
