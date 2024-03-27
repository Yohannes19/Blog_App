// src/PostList.js
import React from 'react';
import Post from './Post';
import  isLoggedIn  from './App.js'; 

const PostList = ({ posts }) => {
  return (
    <ul>
      {isLoggedIn ? ( // Conditionally render the list if user is logged in
        posts.map((post) => (
          <Post key={post.id} post={post} />
        ))
      ) : (
        <p>Please log in to view posts.</p>
      )}
    </ul>
  );
};

export default PostList;
