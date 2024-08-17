import type { Metadata } from "next";
import { montserrat } from "./ui/fonts";
import "./globals.scss";
import { AppContextProvider } from "./customHooks/context/AppContext";

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
      <AppContextProvider>
        <body className={`${montserrat.className} antialiased`}>
          {children}
        </body>
      </AppContextProvider>
    </html>
  );
}
