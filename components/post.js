import React from "react";

export default function Post({post:{title,id,body}}) {
  return (
    <div>
      <div key={id}>
        <h2>{id} ) {title}</h2>
      </div>
    </div>
  );
}
