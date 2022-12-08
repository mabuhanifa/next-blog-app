import Link from "next/link";
import React from "react";
import Post from "../../components/post";

export default function PostList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <>
          <Link href={`/posts/${post.id}`}>
            <a>Go</a>
          </Link>
          <Post post={post} key={post.id} />
        </>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await posts.json();
  return {
    props: {
      posts: result.slice(0,15),
    },
  };
}
