import '@mantine/core/styles.css';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Taiwan Social Media Corpus Admin Dashboard',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" translate="no">
      <body>{children}</body>
    </html>
  );
}
