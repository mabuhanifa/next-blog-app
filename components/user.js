import React from "react";

export default function User({ users }) {
  return (
    <div>
      <div className="user">
        {users.map(({ name, id, username }) => (
          <div key={id} className="single-user">
            <h4>{name}</h4>
            <h4>{username}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
