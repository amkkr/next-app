import '../styles/globals.css'
import type { AppProps } from 'next/app'

// eslint-disable-next-line @typescript-eslint/naming-convention
function myApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default myApp
