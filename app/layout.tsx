import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({ src: "./fonts/GeistVF.woff2", variable: "--font-geist", display: "swap" });
const geistMono = localFont({ src: "./fonts/GeistMonoVF.woff2", preload: false, variable: "--font-geist-mono", display: "swap" });

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#142f23" };
const title = "Muhammed Anas — Software Engineer | Backend, Cloud & CI/CD";
const description = "Software engineer at Camerin Innovate and co-builder of ZoeConnect, used by 10+ hospital clients. Available for backend, integration and deployment projects.";
const shareImage = {
  url: "https://www.anasdev.software/share/portfolio.jpg",
  width: 1200,
  height: 630,
  alt: "Muhammed Anas, software engineer. Selected projects: ZoeConnect and DevConnect.",
};

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Muhammed Anas" }],
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://www.anasdev.software/",
    siteName: "Muhammed Anas",
    images: [shareImage],
  },
  twitter: { card: "summary_large_image", title, description, images: [shareImage] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${geist.variable} ${geistMono.variable}`}><body>{children}</body></html>; }
