import React from "react";
import ImageRed from "../../utils/icons/ImageRed";

const Gif = ({ onHandleChange, content }) => {
  const inlineStyle = {
    marginTop: content?.properties.marginTop,
    marginRight: content?.properties.marginRight,
    marginBottom: content?.properties.marginBottom,
    marginLeft: content?.properties.marginLeft,
  };
  return (
    <div
      className="draft__gif"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => onHandleChange(e, "GIF")}
      style={inlineStyle}
    >
      {content.content ? (
        <img style={{ width: "250px" }} src={content} />
      ) : (
        <div>
          <ImageRed />
          <div className="draft__gif--text">Drop your image here or browse</div>
        </div>
      )}
    </div>
  );
};

export default Gif;
