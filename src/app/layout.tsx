import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Contact from with Next.js",
  description: "Contact us to get more details about our team!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${karla.variable} antialiased font-karla bg-primary-green-200`}
      >
        {children}
      </body>
    </html>
  );
}
