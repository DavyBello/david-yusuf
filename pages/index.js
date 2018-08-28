import React, { Fragment } from "react";
// import Link from "next/link";



// import Head from '../components/head'
import Layout from "../components/Layout";
import HeroSection from "../components/Home/HeroSection";
import HireMeSection from "../components/Home/HireMeSection";

const Home = () => (
  <Fragment>
    <Layout>
      {/* <Head title="Home" /> */}
      {/* <Nav /> */}
      <HeroSection />
      <HireMeSection />
    </Layout>
  </Fragment>
);

export default Home;
