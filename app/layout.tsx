import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import ReduxProvider from "@/store/Provider";
import styles from '@/styles/page.module.scss';
import "@/styles/globals.scss";
import { Inter } from "next/font/google";
import CurrencySelectorOptions from "@/components/CurrencySelectorOptions";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Currency Converter | Foreign Exchange Rates",
  description: "Use our free currency converter. Get accurate and reliable foreign exchange rates",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Header >
          <CurrencySelectorOptions />
          </Header>
            <main className={styles.main}>
              {children}
            </main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
