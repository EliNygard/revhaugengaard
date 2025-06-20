import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Revhaugen Gård",
  description: "En trivselsgård for alle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grid grid-rows-[80px_1fr_auto] min-h-screen`}
      >
        <header>Revhaugen Gård</header>
        <main>{children}</main>
        <footer>
          <div className="bg-green-700 p-16">Footer</div>
        </footer>
      </body>
    </html>
  );
}
