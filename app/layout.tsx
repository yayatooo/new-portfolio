import "./globals.css";
import type { Metadata } from "next";
import Provider from "./hooks/Provider";
import { poppinsSans } from "./constant/font";

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
      <body className={poppinsSans.className}>
        <Provider defaultTheme="light" attribute="class">
          {children}
        </Provider>
      </body>
    </html>
  );
}
