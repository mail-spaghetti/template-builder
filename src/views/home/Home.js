import React from "react";

import Choice from "./components/Choice";
import Draft from "./components/layout/Draft";

const Home = () => (
  <div className="home">
    <div className="home__left"><Choice /></div>
    <div className="home__right"><Draft /></div>
  </div>
);

export default Home;
