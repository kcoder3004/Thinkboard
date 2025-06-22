import React from 'react';

const TagBadge = ({ tag }) => {
  const displayTag = tag || "No Tag";
  return (
    <span className="badge badge-accent text-xs font-medium px-2 py-1">
      {displayTag}
    </span>
  );
};


export default TagBadge;