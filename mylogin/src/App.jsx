import React, { useState } from 'react';


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (data.success) {
      alert('Login successful');
    } else {
      alert('Login failed');
    }
    setUsername('');
    setPassword('');
  };

  return (
    <div className='container forms'>
      <div className='form login'>
      <div className='form-content'>
      <header>Login Page</header>
      <form onSubmit={handleSubmit}>
      <div className='field input-field'>
      <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className='input'
          required
        />
      </div>
        <div className='field input-field'>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className='password'
          required
        />
        </div>
        <div className='field button-field'>
        <button type="submit">Login</button>
        </div>
      </form>
      </div>
      
      </div>
      
    </div>
    
  );
}

export default App;