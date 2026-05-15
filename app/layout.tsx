import type { Metadata } from "next";

// Fonts
import { Geist, Geist_Mono } from "next/font/google";

//Styles
import './styles/globals.scss';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bluehue — A Creative Research Lab Exploring New Ideas from New York",
  description: "A Creative Research Lab Exploring New Ideas from New York",
  openGraph: {
    images: [
      {
        url: 'https://comforting-palmier-7d8f71.netlify.app/og.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
    locale: 'en_US',
    url: 'https://joelbidal.com.ar/bluehue',
    siteName: 'Bluehue',
    title: 'Bluehue — A Creative Research Lab Exploring New Ideas from New York',
    description: 'A Creative Research Lab Exploring New Ideas from New York',
  },
  robots:{
    index: false,
    follow: false
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
