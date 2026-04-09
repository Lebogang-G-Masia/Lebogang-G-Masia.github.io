import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Masia | Systems & Machine Learning Developer",
  description: "Portfolio of Lebogang Masia, a Systems & Machine Learning Developer specializing in high-performance computing, C++, and machine learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
