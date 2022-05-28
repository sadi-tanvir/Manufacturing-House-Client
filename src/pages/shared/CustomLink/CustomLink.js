import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  const customStyle = {
    backgroundColor: match ? "#0284c7" : '#f1f5f9',
    color: match ? '#fff' : "#0284c7",
    marginLeft: 5,
  };

  return (
    <div>
      <Link style={customStyle} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;
