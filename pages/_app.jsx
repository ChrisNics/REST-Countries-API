import '@/styles/globals.css';
import { Nunito_Sans } from 'next/font/google';
import Header from '@/components/Header';
import { ThemeProvider } from 'next-themes';

const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['300', '600', '800']
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <main
        className={`${nunito.variable} text-light-mode-text font-sans text-[14px] dark:text-white`}>
        <Header />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
