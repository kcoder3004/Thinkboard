import React from "react";


const TagBadge = ({ tag }) => {
  if (!tag) return null;

  return (
    <span className="badge badge-accent text-xs font-medium px-2 py-1">
      {tag}
    </span>
  );
};

export default TagBadge;
