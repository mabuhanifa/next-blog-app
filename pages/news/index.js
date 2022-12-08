import React from "react";

export default function NewsArticleList({ articles }) {
  return (
    <div>
      <h2>News Article List</h2>
      {articles.map((articles) => (
        <div key={articles.id}>
          <h4>{articles.title}</h4>
        </div>
      ))}
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
