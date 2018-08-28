import React, { Fragment } from "react";
// import Link from "next/link";



// import Head from '../components/head'
import Layout from "../components/Layout";
import HeroSection from "../components/Home/HeroSection";
import HireMeSection from "../components/Home/HireMeSection";
import BlogSection from "../components/Home/BlogSection";
import BlankSection from "../components/Home/BlankSection";

const Home = () => (
  <Fragment>
    <Layout>
      {/* <Head title="Home" /> */}
      {/* <Nav /> */}
      <HeroSection />
      <HireMeSection />
      <BlogSection />
      <BlankSection />
    </Layout>
  </Fragment>
);

export default Home;
