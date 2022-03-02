// Disabled as this is a single page app
/* eslint-disable @next/next/no-page-custom-font */

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
      </Head>      
      <Navbar />
      <Game />
      <PopupsContainer />
      <Footer />
    </>
  );
};

export default Home;
