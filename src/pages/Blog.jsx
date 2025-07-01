// src/pages/Blog.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../data/blogData';

const Blog = () => {
  return (
    <div className="page-content">
      <h1>SafeNet Blog</h1>
      {blogPosts.map(post => (
        <div key={post.id} className="blog-preview">
          <h2>{post.title}</h2>
          <p><em>{post.date}</em></p>
          <p>{post.summary}</p>
          <Link to={`/blog/${post.id}`}>Read More →</Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Blog;
