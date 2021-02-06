import React, { Fragment } from "react";
import { connect } from "react-redux";

import Structs from "./Structs";
import { STRUCTURE_INDICES, STRUCT_HEADER } from "../../data";
import { setSelected, setType } from "../../../../actions/optionsAction";
import Settings from "../settings/Settings";

const Structure = ({ dispatch, selected, type }) => {
  const generateStructure = () => {
    const rows = [...Array(Math.ceil(STRUCTURE_INDICES.length / 2))];
    const structRows = rows.map((row, index) =>
      STRUCTURE_INDICES.slice(index * 2, index * 2 + 2)
    );
    const structs = structRows.map((row, index) => (
      <div className="a-row" key={index}>
        {row.map((struct, idx) => (
          <div
            className="a-col-1-of-2"
            onClick={onHandleStructSelection}
            key={`${index}-${idx}`}
          >
            <Structs struct={struct} />
          </div>
        ))}
      </div>
    ));
    return structs;
  };

  const onHandleStructSelection = () => {
    dispatch(setSelected({ selected: true }));
    dispatch(setType({ type: "Structure" }));
  };
  return (
    <Fragment>
      <div>
        {selected ? (
          <Settings type={type} />
        ) : (
          <div className="card__structWrapper">
            <div className="card__structHeader">{STRUCT_HEADER}</div>
            <div className="u-margin-top-light">{generateStructure()}</div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  selected: state.option.selected,
  type: state.option.type,
});

export default connect(mapStateToProps)(Structure);
