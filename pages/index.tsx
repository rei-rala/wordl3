import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Navbar, Game, Footer } from "../components";
import PopupsContainer from "../components/PopupsContainer/PopupsContainer";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Wordl3</title>
        <meta name="description" content="Wordle clone - A daily word game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PopupsContainer />
      <Navbar />
      <Game />
      <Footer />
    </>
  );
};

export default Home;
