import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { GameConditionsContext, PopupsContext } from 'contexts'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <PopupsContext>
            <GameConditionsContext>
                <Component {...pageProps} />
            </GameConditionsContext>
        </PopupsContext>
    )
}

export default MyApp
