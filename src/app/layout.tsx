import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FaWhatsapp } from "react-icons/fa";
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
  title: "MegaOnlineMall",
  description:
    "Shop smartly with MegaOnlineMall — your one-stop online store for all your needs!",
  icons: {
    icon: "/favicon.ico", // 👈 make sure this file is in your /public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
          {children}

          {/* Floating WhatsApp FAB (responsive + always on top) */}
          <div
            className="fixed inset-x-0 bottom-0 flex justify-end p-4 md:p-6 pointer-events-none z-[9999]"
            // Keeps it above iOS notch/home indicator
            style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 16px)" }}
          >
            <a
              href="https://wa.me/923044015774"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Chat on WhatsApp"
              className="
                pointer-events-auto inline-flex items-center justify-center
                rounded-full bg-green-500 text-white shadow-lg
                hover:bg-green-600 active:scale-95 transition
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600
                focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black
                w-12 h-12 md:w-14 md:h-14
              "
            >
              {/* use two sizes for responsiveness */}
              <span className="md:hidden"><FaWhatsapp size={24} /></span>
              <span className="hidden md:inline"><FaWhatsapp size={30} /></span>
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
