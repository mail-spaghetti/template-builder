import React from "react";

import Block from "./Block";
import { CARDS, ITEMS } from "../../data";

const Blocks = () => {
  const generateBlocks = () => {
    const rows = [...Array(Math.ceil(CARDS.length / 3))];
    const blockRows = rows.map((row, index) =>
      CARDS.slice(index * 3, index * 3 + 3)
    );
    const blocks = blockRows.map((row, index) => (
      <div className="a-row" key={index}>
        {row.map((block, idx) => (
          <div className="a-col-1-of-3" key={`${index}-${idx}`}>
            <Block block={block} />
          </div>
        ))}
      </div>
    ));
    return blocks;
  };

  return <div className="u-padding-custom-1">{generateBlocks()}</div>;
};

export default Blocks;
