import { useRouter } from "next/router";

export default function Home() {
  const { push } = useRouter();
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => push("/users")}>Get Users</button>
    </div>
  );
}
