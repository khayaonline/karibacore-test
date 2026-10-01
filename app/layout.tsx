import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KaribaCore Test',
  description: 'A Next.js starter app for KaribaCore Test',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
