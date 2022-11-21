import React from "react";
import { Link as BaseLink } from "react-router-dom";

function Link({ url, title, children, className }) {
  return (
    <BaseLink
      className={`text-secondary text-decoration-none ${className}`}
      to={url}
    >
      {title || children}
    </BaseLink>
  );
}

export default Link;
