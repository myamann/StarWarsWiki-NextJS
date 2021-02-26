import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>StarWars Wiki</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
