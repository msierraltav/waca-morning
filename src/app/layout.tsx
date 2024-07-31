import type { Metadata } from "next";
import { montserrat } from "./ui/fonts";
import "./globals.css";
import { Header } from "./components/Header";

export const metadata: Metadata = {
  title: "Wacamoclima",
  description: "El clima en el reino aguacte",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
