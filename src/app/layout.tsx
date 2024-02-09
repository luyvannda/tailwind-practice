import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tailwind Practice',
  description: 'Practice tailwind on next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      <body>{children}</body>
    </html>
  );
}
