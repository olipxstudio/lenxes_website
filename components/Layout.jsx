import React from "react";
import Head from "next/head";
// import Image from 'next/future/image'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Lenxes</title>
        <meta name="description" content="Lenxes App" />
        <link rel="icon" href="/logos/lenxes_icon_sm_white.png" />
      </Head>
      <div className="w-full">
        {/* <Image src={"/logos/lenxes_logo_bg_millik_black.png"} layout="raw" alt="" width={110} height={26.6} className="mx-auto" /> */}
      </div>
      <div>{children}</div>
      <footer></footer>
    </div>
  );
};

export default Layout;
