import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import useDarkTheme from "../hooks/useDarkTheme";
import Game from "../components/Game";

const Home: NextPage = () => {
  const { darkTheme, toggleDarkTheme } = useDarkTheme()

  return (
    <>
      <Head>
        <title>Wordl3</title>
        <meta name="description" content="Wordle clone - A daily word game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button onClick={toggleDarkTheme}>{darkTheme ? 'test light' : 'test dark'}</button>

      <Game />
    </>
  );
};

export default Home;