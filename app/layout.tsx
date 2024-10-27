import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const sourceCodePro = Source_Code_Pro({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Josh Marchello",
  description: "My little patch of the internet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceCodePro.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
