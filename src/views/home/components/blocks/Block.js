import React from "react";
import { useDrag } from "react-dnd";

import Card from "../../../../components/molecules/Cards";
import { ITEMS } from "../../data";

const Block = ({ block }) => {
  const [{ opacity }, dragRef] = useDrag({
    item: {
      type: ITEMS.BLOCK,
      content: block,
    },
    collect: (monitor) => ({
      opacity: !!monitor.isDragging() ? "0.5" : "1",
    }),
  });
  return (
    <span ref={dragRef} style={{ opacity }} className="card__blockWrapper">
      <Card {...block} />
    </span>
  );
};

export default Block;
