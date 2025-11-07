import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LumaStay Concierge AI | Hospitality Employee Assistant",
  description:
    "LumaStay Hospitality equips every associate with an AI concierge inside Salesforce to deliver unforgettable guest experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lumastay-app">
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}
