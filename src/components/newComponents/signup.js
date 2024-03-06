import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom";

export default function signUp() {
    const backStyle = {
        background: '#e2e2e2',
        width: '100%',
        position: 'absolute',
        top: 0,
        bottom: 0,
    };

    const divCenterStyle = {
        width: '400px',
        height: '400px',
        backgroundColor: '#fff',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: 'auto',
        maxWidth: '100%',
        maxHeight: '100%',
        overflow: 'auto',
        padding: '1em 2em',
        borderBottom: '2px solid #ccc',
        display: 'table',
    };

    const contentStyle = {
        display: 'table-cell',
        verticalAlign: 'middle',
    };

    const [message, setMessage] = useState('');
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    return (
        <div style={backStyle} className='padding-correction'>
            <div style={divCenterStyle}>
                <div style={contentStyle}>
                    <h3>SignUp</h3>
                    <h1 style={{margin: '50px'}}></h1>
                    <div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword" placeholder="Password" />
                        </div>
                        <h1 style={{margin: '40px'}}></h1>

                        <Link to={'/login'} type="button" className="btn btn-link">LogIn</Link>
                        <button className="btn btn-primary" onClick={() => {
                            let email = document.getElementById('email').value;
                            let password = document.getElementById('password').value;
                            fetch('http://localhost:8080/user/login', {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    "Accept": "application/json",

                                },
                                body: JSON.stringify({ email, password })
                            }).then(res => res.json()).then(data => {
                                if (data.auth === true) {
                                    setLogin(true);
                                    console.log(data);
                                    routeChange('/');
                                    setMessage('');
                                }
                                else {
                                    setMessage(data.message);
                                    console.log(data);
                                }
                            }).catch(err => {
                                console.log(err);
                            });
                            //    console.log('Logged in');
                        }}>Sign Up</button>
                        <h1 style={{margin: '40px'}}></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};