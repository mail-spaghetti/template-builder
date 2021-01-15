import React from "react";
import { connect } from "react-redux";

import Block from "./Block";
import Settings from "../settings/Settings";

import { CARDS, ITEMS, OPTIONS } from "../../data";

const Blocks = ({ dispatch, selection, selected, type }) => {
  const generateBlocks = () => {
    const rows = [...Array(Math.ceil(CARDS.length / 3))];
    const blockRows = rows.map((row, index) =>
      CARDS.slice(index * 3, index * 3 + 3)
    );
    const blocks = blockRows.map((row, index) => (
      <div className="a-row" key={index}>
        {row.map((block, idx) => (
          <div className="a-col-1-of-3" key={`${index}-${idx}`}>
            <Block block={block} dispatch={dispatch} />
          </div>
        ))}
      </div>
    ));
    return blocks;
  };

  return (
    <div className="u-padding-custom-1">
      {selection === OPTIONS[0] && selected ? (
        <Settings type={type} />
      ) : (
        generateBlocks()
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  selection: state.option.selection,
  selected: state.option.selected,
  type: state.option.type,
});

export default connect(mapStateToProps)(Blocks);
