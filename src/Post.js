// src/Post.js
import React from 'react';

const Post = ({ post }) => {
  return (
    <li>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </li>
  );
};

export default Post;