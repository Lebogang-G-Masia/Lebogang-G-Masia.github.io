import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lebogang Masia — Software Engineer',
  description:
    'Portfolio of Lebogang Masia — software engineer specialising in high-performance C++, Python, and full-stack web development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-zinc-950 text-white min-h-screen selection:bg-purple-500/30`}>
        {children}
      </body>
    </html>
  );
}
