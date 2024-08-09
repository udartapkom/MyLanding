import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../vendor/_normalize.scss";
import styles from "./globals.module.scss";
import Header from "../components/Header/Header";
import Loading from "../components/Loading/Loading";
import {Suspense} from "react";

const inter = Inter (
    {weight: ["300", "400", "500", "700"],
            style: ['normal'],
            subsets: ["latin"],
            variable: "--font-inter"});
export const metadata: Metadata = {
  title: "Сделано Create Next App",
  description: "сгенерировано by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${styles.body} ${inter.className}`}>
      <Suspense fallback={<Loading />}>
          <Header />
          {children}
      </Suspense>

      </body>
    </html>
  );
}
