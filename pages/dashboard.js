import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3004/dashboard");
      const data = await res.json();
      setData(data);
      setLoading(false);
    }
    fetchData();
  }, []);
  return (
    <div>
      {loading && <h4>Loading ........</h4>}
      {data && (
        <div>
          <h2>{data.posts}</h2>
          <h2>{data.likes}</h2>
          <h2>{data.posts}</h2>
        </div>
      )}
    </div>
  );
}
