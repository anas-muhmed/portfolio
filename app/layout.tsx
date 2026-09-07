import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({ src: "./fonts/GeistVF.woff", variable: "--font-geist", display: "swap" });
const geistMono = localFont({ src: "./fonts/GeistMonoVF.woff", variable: "--font-geist-mono", display: "swap" });

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#17191d" };
export const metadata: Metadata = { title: "Muhammed Anas — Software Engineer, Backend & Platform", description: "Muhammed Anas is a software engineer focused on backend systems and the deployment, automation, and diagnosis that keep them running.", authors: [{ name: "Muhammed Anas" }], openGraph: { title: "Muhammed Anas — Software Engineer, Backend & Platform", description: "Software engineer building web systems and taking responsibility for their deployment, automation, and diagnosis.", type: "website", url: "https://www.anasdev.software/", siteName: "Muhammed Anas" }, twitter: { card: "summary", title: "Muhammed Anas — Software Engineer, Backend & Platform", description: "Software engineer building web systems and taking responsibility for their deployment, automation, and diagnosis." } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${geist.variable} ${geistMono.variable}`}><body>{children}</body></html>; }
