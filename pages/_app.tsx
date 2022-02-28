import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { PopupsContext } from '../contexts/PopupsContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PopupsContext>
      <Component {...pageProps} />
    </PopupsContext>
  )
}

export default MyApp
