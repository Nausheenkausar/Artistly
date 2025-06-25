// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-orbitron',
});

export const metadata: Metadata = {
  title: 'Artistly',
  description: 'Performing Artist Booking Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={orbitron.variable}>
      <body className="font-orbitron">{children}</body>
    </html>
  );
}
