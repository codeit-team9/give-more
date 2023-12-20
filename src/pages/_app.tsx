/* eslint-disable react/jsx-props-no-spreading */
import '@/styles/reset.css'
import '@/styles/font.css'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
