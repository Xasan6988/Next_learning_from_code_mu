import type { Metadata } from "next";
import "./globals.css";
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: "Next App from course",
  description: "I learn Next",
};

export default function RootLayout({
  children,
  infopost,
  infouser,
}: Readonly<{
  children: React.ReactNode;
  infopost: React.ReactNode,
  infouser: React.ReactNode,
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <section>
          {infopost}
          {infouser}
        </section>
        <Footer />
      </body>
    </html>
  );
}
