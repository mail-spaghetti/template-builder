import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Choice from "./components/Choice";
import Draft from "./components/layout/Draft";

const Home = () => (
  <div className="home">
    <DndProvider backend={HTML5Backend}>
      <div className="home__left">
        <Choice />
      </div>
      <div className="home__right">
        <Draft />
      </div>
    </DndProvider>
  </div>
);

export default Home;
