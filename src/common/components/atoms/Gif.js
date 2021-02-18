import React from "react";

const Gif = ({ content }) => {
  const inlineStyle = {
    marginTop: content?.properties.marginTop,
    marginRight: content?.properties.marginRight,
    marginBottom: content?.properties.marginBottom,
    marginLeft: content?.properties.marginLeft,
    textAlign: content?.properties.align,
  };
  return (
    <div
      id="block"
      className={`${!content.content ? "draft__gif" : null}`}
      style={inlineStyle}
    >
      {content.content && (
        <img style={{ width: "250px" }} src={content.content} />
      )}
    </div>
  );
};

export default Gif;
