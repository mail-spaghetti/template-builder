import React from "react";
import { useDrag } from "react-dnd";

import Cards from "../../../../components/molecules/Cards";
import { ITEMS } from "../../data";

const Structs = ({ struct }) => {
  const [{ opacity }, dragRef] = useDrag({
    item: {
      type: ITEMS.STRUCTURE,
      content: struct,
    },
    collect: (monitor) => ({
      opacity: !!monitor.isDragging() ? "0.5" : "1",
    }),
  });
  return (
    <span ref={dragRef} style={{ opacity }} className="card__blockWrapper">
      <Cards type="structure" struct={struct} />
    </span>
  );
};

export default Structs;
