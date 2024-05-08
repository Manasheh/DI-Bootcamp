import React from "react";
import posts from '../data/data.json'

export function PostList() {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <h1>{post.title}</h1>
          <h2>{post.content}</h2>
          <p>{post.date}</p>
        </div>
      ))}
    </div>
  );
}


