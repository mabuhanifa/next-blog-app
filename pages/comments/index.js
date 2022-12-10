import React from "react";

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  
  return (
    <div>
      <button onClick={fetchComments}>Load Comments</button>
      
    </div>
  );
}
