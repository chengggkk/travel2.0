import React, { useEffect, useState } from 'react';
import './App.css';

const login = async (address, password) => {
    let response;
    let data
    if (!address || !password) {
        response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        data = await response.json()
    } else {
        response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ address, password }),
        });
        data = await response.json()
    }
    console.log(data)
    if (data?.error !== undefined) {
        console.error(data.error)
        return false
    }
    return true
};

function LoginPage() {
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const sessionMessage = sessionStorage.getItem('message');
        const msgType = sessionStorage.getItem('msg_type');

        if (sessionMessage && msgType) {
            setMessage({ text: sessionMessage, type: msgType });
            sessionStorage.removeItem('message');
            sessionStorage.removeItem('msg_type');
        }
    }, []);

    const handleRegisterClick = (event) => {
        event.preventDefault();
        // Navigate to register page
    };

    const handleTestClick = async (event) => {
        event.preventDefault();
        const address = document.getElementById('address').value;
        const password = document.getElementById('password').value;
        await login(address, password);
        // Navigate to register page
    };


    const LoginClick = async (event) => {
        event.preventDefault();
        const address = document.getElementById('address').value;
        const password = document.getElementById('password').value;
        const success = await login(address, password);
        if (success) {
            window.location.href = '/home';
        }
        // Navigate to register page
    };

    return (
        <div className="main-content" style={{ backgroundImage: "url(img/griff.jpg)" }}>
            <button onClick={handleTestClick}>TEST</button>
            <div align="center">
                <div>
                    <h2>Login</h2>

                    <label htmlFor="address">Address:</label>
                    <input type="text" className="address" id="address" name="address" style={{ marginLeft: "8px" }} /><br />
                    <div style={{ marginTop: "30px" }}>
                        <label htmlFor="password">Password:</label>
                        <input className="address" type="password" id="password" name="password" /><br />
                    </div>
                    {message && <div id="accountno" className={message.type} style={{ color: "red" }}>{message.text}</div>}
                </div>
                <div style={{ marginTop: "50px" }}>
                    <a href="register">Register</a>
                    <button name="login" onClick={LoginClick}>Login</button>
                </div>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ width: "50%", justifyContent: "center", textAlign: "center", marginTop: "100px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <p>如何使用?</p>
                    <div className="intro"><label>1.註冊</label></div>
                    <div className="intro"><label>2.登入</label></div>
                    <div className="intro"><label>3.創建旅程</label></div>
                    <div className="intro"><label>4.規劃行程</label></div>
                </div>
                <div style={{ width: "50%", justifyContent: "center", textAlign: "center", marginTop: "100px", display: "flex", flexDirection: "column", alignItems: "center", fontSize: "40px" }}>
                    <p>This is some meaningless text.</p>
                    <p>Just to fill the space.</p>
                    <p>Feel free to replace it with your own content.</p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;