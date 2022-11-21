import React from "react";

function Image({
  src,
  alt,
  width = "100%",
  height = "auto",
  className,
  onClick,
}) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      style={{ width: `${width}`, height: `${height}` }}
      onClick={onClick}
    />
  );
}

export default Image;
