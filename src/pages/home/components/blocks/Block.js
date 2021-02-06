import React from "react";
import { useDrag } from "react-dnd";
import { setSelected, setType } from "../../../../actions/options.action";

import Card from "../../../../common/components/molecules/Cards";
import { ITEMS } from "../../data";

const Block = ({ block, dispatch }) => {
  const [{ opacity }, dragRef] = useDrag({
    item: {
      type: ITEMS.BLOCK,
      content: block,
    },
    collect: (monitor) => ({
      opacity: !!monitor.isDragging() ? "0.5" : "1",
    }),
  });

  const setBlockSettings = () => {
    dispatch(
      setType({
        type:
          block.text[0].toUpperCase() + block.text.substring(1).toLowerCase(),
      })
    );
    dispatch(setSelected({ selected: true }));
  };
  return (
    <span
      ref={dragRef}
      style={{ opacity }}
      onClick={setBlockSettings}
      className="card__blockWrapper"
    >
      <Card {...block} />
    </span>
  );
};

export default Block;
