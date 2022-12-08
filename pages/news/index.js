import React from "react";

export default function NewsArticleList() {
  return (
    <div>
      <div>NewsArticleList</div>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3004/news");
  const data = await response.json();
  return {
    props: {
      articles: data,
    },
  };
}
