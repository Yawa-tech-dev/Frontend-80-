import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
          const response = await fetch('http://localhost:8081/admin/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });
          const data = await response.json();
          if (data.success) {
            navigate('/Admin');
          } else {
            setMessage('No');
          }
        } catch (error) {
          console.error('Error:', error);
          setMessage('Error occurred');
        }
      };

    return (


        <div className='w-screen h-screen bg-green-200'>
                <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white py-2 px-4"
        onClick={handleLogin}
      >
        Check Login
      </button>
      {message && <p className="mt-4">{message}</p>}
    </div>
            
        </div>
    );
}

export default AdminLogin;
