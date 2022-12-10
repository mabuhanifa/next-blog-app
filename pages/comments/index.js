import React from "react";

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const res = await fetch("http://localhost:3004/api/comments");
    const data = await res.json();
    setComments(data);
  };
  return (
    <div>
      <button onClick={fetchComments}>Load Comments</button>
      {comments &&
        comments.map((c) => (
          <div key={c.id}>
            <h2>{c.text}</h2>
          </div>
        ))}
    </div>
  );
}
