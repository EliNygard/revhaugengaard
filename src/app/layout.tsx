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
        <header className="p-2 text-green-dark">
          <div>Revhaugen Gård</div>
        </header>
        <main className="px-2 py-8">{children}</main>
        <footer className="bg-green-dark text-green-x-light p-14">
          <div className="mb-4">Revhaugen Gård</div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <p>Kontakt:</p>
              <a href="mailto:christinalande@gmail.com" className="">
                christinalande@gmail.com
              </a>
              <a href="tel:+4747330760" className="">
                +47 473 30 760
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <p>Adresse:</p>
              <a
                href="https://maps.app.goo.gl/s2pw169GZsthy8fd8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Laukvikveien 152</p>
                <p>8315 Laukvik</p>
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
