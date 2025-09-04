import type { Metadata } from "next";
import "@/index.css";
import { Navigation } from "@/components/Navigation";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://talklikealocal.org"),
  title: { default: "Talk Like a Local", template: "%s • Talk Like a Local" },
  description: "Documenting local pronunciations, Indigenous languages, and regional terms across the U.S.",
  openGraph: { siteName: "Talk Like a Local", type: "website" },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
