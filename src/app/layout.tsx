import { VT323 } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const vt323 = VT323({
  weight: "400", // VT323 hanya memiliki weight 400
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: {
    template: "%s | fyHub",
    default: "fyHub",
  },
  description: "The social media app for gamers and developers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${vt323.variable} antialiased`}>{children}</body>
    </html>
  );
}
