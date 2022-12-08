import React from "react";
import User from "../components/user";

export default function Users({ users }) {
  return (
    <div>
      <User users={users} />
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
