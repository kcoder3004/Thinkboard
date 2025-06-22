import React from "react";

const TagBadge = ({ tag }) => (
  <span
    className="badge badge-accent text-xs font-medium px-2 py-1 whitespace-nowrap"
    style={{ minWidth: "40px", textAlign: "center" }}
  >
    {tag || "Tag"}
  </span>
);

export default TagBadge;
