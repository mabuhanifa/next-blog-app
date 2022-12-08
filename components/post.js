import React from "react";

export default function Post({post}) {
  return (
    <div>
      <div key={post.id}>
        <h2>post</h2>
      </div>
    </div>
  );
}
