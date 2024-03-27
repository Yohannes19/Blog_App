// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PostList from './PostList';
import Login from './Login';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from './firebaseConfig';

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const handleLogin = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', userCredential);
      // Update state or perform actions based on successful login
    } catch (error) {
      console.error('Login error:', error.message);
      setError(error.message);
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/" element={<PostList posts={posts} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
