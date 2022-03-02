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
        <meta name="description" content="Wordle clone - A d̶a̶i̶l̶y̶ word game" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" />
      </Head>
      
      <Navbar />
      <Game />
      <PopupsContainer />
      <Footer />
    </>
  );
};

export default Home;
