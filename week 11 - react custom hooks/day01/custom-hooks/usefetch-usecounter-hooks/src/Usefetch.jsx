import React, { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";

function Usefetch() {
  const [currentPost, setCurrentPost] = useState(1);
  const { finalData, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + currentPost
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <button onClick={() => setCurrentPost(1)}>1</button>
      <button onClick={() => setCurrentPost(2)}>2</button>
      <button onClick={() => setCurrentPost(3)}>3</button>
      {JSON.stringify(finalData)}
    </div>
  );
}

export default Usefetch;
