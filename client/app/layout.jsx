import "./globals.css";
import { Providers } from "@/src/redux/provider";

export const metadata = {
  metadataBase: new URL("https://webfudgeagency.com"),
  title: "Webfudge",
  description:
    "Build Brand Fast! Leading creative, media, and technology-driven digital agency based in Pune. Specializing in brand strategy and marketing, Web-design, transforming ideas into captivating online experiences.",
  twitter: {
    card: "summary_large_image",
    site: "@Webfudge",
  },
  openGraph: {
    title: "Webfudge",
    images: [
      {
        url: "./opengraph-image.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
