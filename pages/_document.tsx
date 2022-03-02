import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Wordle clone - A d̶a̶i̶l̶y̶ word game" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Cousine:wght@400;700&family=Roboto+Mono&display=swap" as="style" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Cousine:wght@400;700&family=Roboto+Mono&display=swap" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}