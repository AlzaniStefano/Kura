import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:1337/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Errore durante la chiamata API:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Lista dei Post</h1>
      <ul>
        {posts.map(post => (
          <li>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
