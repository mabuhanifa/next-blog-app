import { useRouter } from "next/router";
import React from "react";

export default function Post({ post }) {
  const router = useRouter();
  //   console.log(router);
  return (
    <div>
      {router.isFallback ? (
        "loading"
      ) : (
        <div>
          <h2>{post.id}</h2>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}

export async function getStaticPaths() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await posts.json();
  const paths = result.slice(0, 15).map((post) => {
    return {
      params: { postId: `${post.id}` },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { postId } }) {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await post.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
}
