import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Adventure',
  description: 'App to organize and plan your next solo or group adventure.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
