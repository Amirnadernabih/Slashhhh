
import React from 'react';

async function fetchPost(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  return response.json();
}

export default async function Post({ params }) {
  const post = await fetchPost(params.id);

  return (
    <div className="blogbox container">
      <h1 className="blogtitle">{post.title}</h1>
      <p className="blogbody">{post.body}</p>
    </div>
  );
}
