import Head from "next/head";
import "./globals.css";
import { Providers } from "@src/provider";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  metadataBase: new URL("https://webfudgeagency.com"),
  title: {
    default: "Webfudge",
    template: "%s | Webfudge",
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
        url: "./opengraph-image.png",
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
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
