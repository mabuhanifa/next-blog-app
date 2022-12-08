import React from "react";

export default function Users({ users }) {
  console.log(users);
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

export async function getStaticProps() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await users.json();
  return {
    props: { users: data },
  };
}
