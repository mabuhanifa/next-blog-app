import React from "react";

export default function ArticleListByCategory({ articles, category }) {
  return (
    <div>
      <h2>Category {category}</h2>
      <div>
        {articles.map((articles) => (
          <div key={articles.id}>
            <h4>{articles.title}</h4>
            <h4>{articles.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps({ params: { category }, req, res }) {
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["name-shourov"]);
  const response = await fetch(
    `http://localhost:3004/news?category=${category}`
  );
  const data = await response.json();
  return {
    props: {
      articles: data,
      category,
    },
  };
}
