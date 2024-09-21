import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Fitness App",
  description: "Fitness App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <div className="max-w-[1160px] mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
