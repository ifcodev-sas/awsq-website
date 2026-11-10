import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AWSQ | Advanced Web Software & Quality - Cloud Architecture & Engineering',
  description: 'Firma especializada en arquitectura en la nube (AWS), desarrollo de software web de alto rendimiento y aseguramiento de calidad (QA).',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
