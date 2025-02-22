import React, { useState } from "react";
import PostComponent from "./PostComponent";

function Post() {
  const [posts, setPosts] = useState([]);

  const PostComponent = posts.map((post) => (
    <PostComponent
      name={post.name}
      substitle={post.subtitle}
      time={post.time}
      content={post.content}
    />
  )); 
}

function addPost() {
  setPosts([
    ...posts,
    {
      name: "Kunal Khare",
      subtitle: "15k followers",
      time: "10m ago",
      content: "This is the sample post",
    },
  ]);
}

return (
  <div style={{ background: "#dfdfdf", height: "100vh" }}>
    <button onClick={addPost}>Add post</button>
    <div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        {PostComponent}
      </div>
    </div>
  </div>
);

export default addPost;
