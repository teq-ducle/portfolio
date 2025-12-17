
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import { ThemeProvider } from "next-themes";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200","300","400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Duc App",
  description: "Duc next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={notoSans.className}>
          <ThemeProvider>
            <Header />
            <div className="wrap"> {children}</div>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
