import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";

const Home = () => {
  return (
    <div class="Home-container">
      <Header />

      <Search />
      <div className="cards-container"></div>
    </div>
  );
};

export default Home;
