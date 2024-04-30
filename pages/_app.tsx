import Header from '@/components/Header/Header';
import type { AppProps } from 'next/app';
import Footer from '@/components/Footer/Footer';
import '../app/globals.css';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className='min-h-[70vh]'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
