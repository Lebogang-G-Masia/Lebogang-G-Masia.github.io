import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Masia | Systems & Machine Learning Developer",
  description: "Portfolio of Lebogang Masia, a Systems & Machine Learning Developer specializing in high-performance computing, C++, and machine learning.",
  keywords: ["Systems Engineering", "Machine Learning", "C++", "High Performance Computing", "SIMD", "CUDA"],
  authors: [{ name: "Lebogang Masia" }],
  openGraph: {
    title: "Masia | Systems & Machine Learning Developer",
    description: "Portfolio of Lebogang Masia, a Systems & Machine Learning Developer specializing in high-performance computing, C++, and machine learning.",
    url: "https://masia.dev",
    siteName: "Masia Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Masia | Systems & Machine Learning Developer",
    description: "Systems & Machine Learning Developer specializing in high-performance computing and bespoke neural architectures.",
    creator: "@masia_dev",
  },
  robots: {
    index: true,
    follow: true,
  },
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
