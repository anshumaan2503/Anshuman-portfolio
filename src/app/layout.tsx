import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Anshuman Tiwari | Software Developer",
  description: "Software Developer specializing in Java, Spring Boot & Full-Stack architecture.",
};

import { RoleProvider } from "@/lib/RoleContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-background text-foreground antialiased selection:bg-primary-container selection:text-white">
        <RoleProvider>
          {children}
        </RoleProvider>
      </body>
    </html>
  );
}

