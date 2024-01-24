import "./globals.css";
import { Providers } from "../src/redux/provider";

import { Footer, Navbar } from "../src/components/common";

export const metadata = {
  title: "Webfudge",
  description: "It's an Product based Agency!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
