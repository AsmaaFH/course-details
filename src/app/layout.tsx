import type { Metadata } from "next";
import { League_Spartan, Cairo } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });
const cairo = Cairo({ 
  subsets: ["arabic"],
  variable: "--font-cairo"
});

export const metadata: Metadata = {
  title: "CORZEX - Course Details",
  description: "Learn with CORZEX - Professional online courses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.className} ${cairo.variable}`}>
        {children}
      </body>
    </html>
  );
}