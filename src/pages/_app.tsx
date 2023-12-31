import '@/styles/css/reset.css';
import '@/styles/css/fonts.css';
import '@/styles/css/colors.css';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
