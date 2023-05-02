import React from "react";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="produtos" />
      <Categories />
      <FeaturedProducts type="tendências" />
      <Contact />
    </div>
  );
};

export default Home;
