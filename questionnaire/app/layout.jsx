import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://questionnaire.webfudge.in/"),
  title: {
    default: "Webfudge Sales Questionnaire",
    template: "%s | Webfudge Sales",
  },
  description:
    "Build Brand Fast! Webfudge is Leading creative, media, and technology-driven digital agency based in Pune. Specializing in brand strategy and marketing, Web-design, transforming ideas into captivating online experiences.",
  twitter: {
    card: "summary_large_image",
    site: "@Webfudge",
  },
  openGraph: {
    title: "Webfudge",
    description:
      "Build Brand Fast! Webfudge is Leading creative, media, and technology-driven digital agency based in Pune. Specializing in brand strategy and marketing, Web-design, transforming ideas into captivating online experiences.",
    images: [
      {
        url: "https://www.webfudge.in/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Webfudge",
      },
    ],
  },
  keywords: [
    "Webfudge",
    "Webfudge Agency",
    "Entreprenure",
    "Social Media Management",
  ],
};
export default function RootLayout({ children }) {
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
