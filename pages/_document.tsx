import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Wordle clone - A d̶a̶i̶l̶y̶ word game" />
        <meta name="keywords" content="Keywords" />
        <meta name="theme-color" content="#1a1a1a" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />

        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png" />

        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Cousine:wght@400;700&family=Roboto+Mono&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Cousine:wght@400;700&family=Roboto+Mono&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
