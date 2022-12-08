import Link from "next/link";
import { useRouter } from "next/router";
import Random from "../components/Random";

export default function Home() {
  const { push } = useRouter();
  return (
    <div>
      <h1 className="text-3xl">Home</h1>
      <button onClick={() => push("/users")}>Get Users</button>
      <Link href="/posts">
        <a>posts</a>
      </Link>
      <Random/>
    </div>
  );
}
