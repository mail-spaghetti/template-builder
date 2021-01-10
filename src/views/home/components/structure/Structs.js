import React, { useEffect } from "react";
import Cards from "../../../../components/molecules/Cards";

const Structs = ({ struct }) => {
  return <Cards type="structure" struct={struct} />;
};

export default Structs;
