import '@/styles/reset.css'
import '@/styles/fonts.css'
import '@/styles/colors.css'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
