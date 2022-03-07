import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Navbar, Game, Footer, PopupsContainer } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wordl3</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>      
      <Navbar />
      <Game />
      <PopupsContainer />
      <Footer />
    </>
  );
};

export default Home;
