// app/layout.tsx or app/layout.js
import Header from '@/components/Header';
import './globals.css';
import { ReactNode } from 'react';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'My App',
  description: 'Build modern apps with ease.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Header/>
      <body>
        {children}
      </body>
      <Footer/>
    </html>
  );
}
