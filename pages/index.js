import Link from "next/link";
import { useRouter } from "next/router";
import Random from "../components/Random";

export default function Home() {
  const { push } = useRouter();
  return (
    <div>
      <h1 className="text-3xl">Home</h1>
      <br />
      <button onClick={() => push("/users")}>Get Users</button>
      <br />
      <Link href="/posts">
        <a>posts</a>
      </Link>
      <br />
      <Link href="/events">
        <a>events</a>
      </Link>
      <br />
      <Random />
    </div>
  );
}
