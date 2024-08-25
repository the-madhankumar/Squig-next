import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Roboto({weight : "300" , subsets : ["latin"]});

export const metadata: Metadata = {
  title: "Squig",
  description: "A Programming Language",
  // icons : "/squig.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
