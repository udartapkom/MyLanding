import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "../vendor/_normalize.scss";
import styles from "./globals.module.scss";
import Header from "../components/Header/Header";

const ubuntu = Ubuntu(
    {weight: ["300", "400", "500", "700"],
            style: ['normal', 'italic'],
            subsets: ["latin"],
            variable: "--font-ubuntu"});
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
      <body className={`${styles.body} ${ubuntu.className}`}>
      <Header />
      {children}
      </body>
    </html>
  );
}
