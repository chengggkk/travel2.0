import React, { useEffect, useState } from 'react';
import './App.css';

async function register(address, password, name, email) {
  const response = await fetch('http://localhost:5000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ address, password, name, email }),
  });
  console.log(await response.json());
};

function RegisterPage() {
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    register(address, password, name, email);
  };

  useEffect(() => {
    fetch('/get-session-message')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <body style={{ backgroundImage: "url(img/griday.jpg)", overflow: "hidden" }}>
      <div className="main-content" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <form onSubmit={handleSubmit}>
          <h1 align="center">註冊</h1>
          <label htmlFor="address">Address:</label>
          <input onChange={e => setAddress(e.target.value)} className="address" style={{ marginLeft: "20px" }} type="text" id="address" name="address" /><br />
          <label style={{ marginLeft: "-3px" }} htmlFor="password">Password:</label>
          <input onChange={e => setPassword(e.target.value)} className="address" style={{ marginLeft: "15px" }} type="password" id="password" name="password" /><br />
          <label style={{ marginLeft: "1px" }} htmlFor="name">Name:</label>
          <input onChange={e => setName(e.target.value)} className="address" style={{ marginLeft: "36px" }} type="text" id="name" name="name" /><br />
          <label style={{ marginLeft: "3px" }} htmlFor="email">Email:</label>
          <input onChange={e => setEmail(e.target.value)} className="address" style={{ marginLeft: "35px" }} type="email" id="email" name="email" /><br />
          {message && <div style={{ color: "red", textAlign: "center" }}>{message}</div>}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input style={{ marginTop: "20px" }} id="regis-check" className="button" type="submit" value="註冊帳號" />
          </div>
        </form>
      </div>
    </body>
  );
}

export default RegisterPage;