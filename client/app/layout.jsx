import "./globals.css";
import Head from "next/head";
import Script from "next/script";
import { Providers } from "@src/provider";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  metadataBase: new URL("https://webfudge.in"),
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
    <html lang="en" className="dark">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RM3QJ4WR9T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RM3QJ4WR9T');
          `}
        </Script>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
