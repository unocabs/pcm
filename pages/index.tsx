import type { NextPage } from "next";
import Head from "next/head";
import NavigationBar from "../components/NavigationBar";
import Collection from "../components/Collection";
import Footer from "../components/Footer";
import "react-toastify/dist/ReactToastify.css";

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Phillipine Card Marketplace</title>
        <link rel="icon" href="/logo1.png" />
      </Head>

      <main>
        <NavigationBar />
        <Collection />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
