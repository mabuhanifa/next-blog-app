import React from "react";

export default function Post({ post }) {
  //   const router = useRouter();
  //   console.log(router);
  return (
    <div>
      <div>
        <h2>{post.id}</h2>
        <h2>{post.title}</h2>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
      {
        params: { postId: "4" },
      },
      {
        params: { postId: "5" },
      },
      {
        params: { postId: "6" },
      },
      {
        params: { postId: "7" },
      },
      {
        params: { postId: "8" },
      },
      {
        params: { postId: "9" },
      },
      {
        params: { postId: "10" },
      },
      {
        params: { postId: "11" },
      },
      {
        params: { postId: "12" },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await post.json();
  return {
    props: {
      post: data,
    },
  };
}
