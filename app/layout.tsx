import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({ src: "./fonts/GeistVF.woff", variable: "--font-geist", display: "swap" });
const geistMono = localFont({ src: "./fonts/GeistMonoVF.woff", variable: "--font-geist-mono", display: "swap" });

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#142f23" };
export const metadata: Metadata = { title: "Muhammed Anas — Software Engineer, Backend & Platform", description: "Software engineer building hospital applications, backend APIs and deployment workflows. Available for scoped freelance web, backend and cloud projects.", authors: [{ name: "Muhammed Anas" }], openGraph: { title: "Muhammed Anas — Software Engineer, Backend & Platform", description: "Hospital application experience, backend engineering and deployment automation. Discuss a scoped freelance project with Muhammed Anas.", type: "website", url: "https://www.anasdev.software/", siteName: "Muhammed Anas" }, twitter: { card: "summary", title: "Muhammed Anas — Software Engineer, Backend & Platform", description: "Hospital application experience, backend engineering and deployment automation. Discuss a scoped freelance project with Muhammed Anas." } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${geist.variable} ${geistMono.variable}`}><body>{children}</body></html>; }
