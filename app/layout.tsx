import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Muhammed Anas — Full Stack Developer",
  description:
    "I build backend systems that run in production, not just on localhost. From modular Node.js APIs to Docker containers, automated CI/CD pipelines, and AWS deployments — I care about what happens after the code is written.",
  keywords: [
    "Full Stack Developer",
    "Backend Engineer",
    "Node.js",
    "React",
    "Docker",
    "AWS",
    "DevOps",
    "Muhammed Anas",
  ],
  authors: [{ name: "Muhammed Anas" }],
  openGraph: {
    title: "Muhammed Anas — Full Stack Developer",
    description:
      "Full Stack Developer building production-grade backend systems with Node.js, Docker, AWS, and CI/CD pipelines.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Anas — Full Stack Developer",
    description:
      "Full Stack Developer building production-grade backend systems with Node.js, Docker, AWS, and CI/CD pipelines.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.variable} ${jetbrainsMono.variable} bg-[#0a0a0a] text-[#ededed] antialiased overflow-x-hidden font-sans`}>
        {children}
      </body>
    </html>
  );
}
