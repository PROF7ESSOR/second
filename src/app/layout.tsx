import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-400 p-5 flex gap-20 ">
          <Link href="/home">Home</Link>
          <Link href="/dashboard">dashboard</Link>
          <Link href="blog">Blog</Link>
          <Link href="/team">Team</Link>
          <Link href="/settings">Settings</Link>
          <Link href="/about">About</Link>
        </header>
        {children}
        <footer className="bg-gray-400 p-5 flex gap-5"> I am footer</footer>
      </body>
      ,
    </html>
  );
}
