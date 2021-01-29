import React from "react";
import ImageRed from "../../utils/icons/ImageRed";

const Gif = ({ onHandleChange, content }) => (
  <div
    className="draft__gif"
    onDragOver={(e) => e.preventDefault()}
    onDrop={(e) => onHandleChange(e, "GIF")}
  >
    {content ? (
      <img style={{width: "250px"}} src={content} />
    ) : (
      <div>
        <ImageRed />
        <div className="draft__gif--text">Drop your image here or browse</div>
      </div>
    )}
  </div>
);

export default Gif;
