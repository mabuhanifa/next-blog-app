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
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await posts.json();
  const paths = result.map((post) => {
    return {
      params: { postId: `${post.id}` },
    };
  });
  
  return {
    paths,
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
