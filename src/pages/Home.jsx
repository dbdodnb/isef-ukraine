import React from "react";
import Header from "../components/Header";
import Updates from "../components/Updates";
import Timeline from "../components/Timeline";
import Materials from "../components/Materials";

const Home = () => {
    return(
        <main className="home-page">
            <Header />
            <Updates />
            <Timeline />
            <Materials />
        </main>
    );
};

export default Home;