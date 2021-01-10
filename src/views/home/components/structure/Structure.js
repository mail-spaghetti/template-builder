import React from "react";
import Structs from "./Structs";
import { STRUCTURE_INDICES, STRUCT_HEADER } from "../../data";

const Structure = () => {
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
    console.log("clicked");
  };
  return (
    <div className="card__structWrapper">
      <div>
        <div className="card__structHeader">{STRUCT_HEADER}</div>
        <div className="u-margin-top-light">{generateStructure()}</div>
      </div>
    </div>
  );
};

export default Structure;
