import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function SignUp({setLogin, setUserId}) {
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
                    <h1 style={{ margin: '50px' }}></h1>
                    <div>
                        
                        <div className="form-group">
                            <label htmlFor="exampleInputName1">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Name" />
                        </div>
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
                        <div className="form-group">
                            <label htmlFor="exampleInputPhone1">Phone</label>
                            <input type="text" className="form-control" id="phone" placeholder="Phone Number" />
                        </div>
                        {
                            message.length > 0 ?
                                <div>
                                    <p>{message}</p>
                                </div> : <></>
                        }
                        <h1 style={{ margin: '40px' }}></h1>

                        <Link to={'/login'} type="button" className="btn btn-link">LogIn</Link>
                        <button className="btn btn-primary" onClick={() => {
                            let name = document.getElementById('name').value;
                            let email = document.getElementById('email').value;
                            let password = document.getElementById('password').value;
                            let confirmPassword = document.getElementById('confirmPassword').value;
                            let phone = document.getElementById('phone').value;
                            if (!/^\d{10}$/.test(phone)) {
                                setMessage('Phone number should be 10 digits');
                                return;
                            }
                            if (password !== confirmPassword) {
                                setMessage('Password does not match');
                                return;
                            }
                            fetch('https://cute-gray-angelfish-slip.cyclic.app/user/signup', {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    "Accept": "application/json",

                                },
                                body: JSON.stringify({ name, email, password, phone})
                            })
                            .then(res => res.json())
                            .then(data => {
                                if (data.created === true) {
                                    setLogin(true);
                                    setUserId(data.id);
                                    console.log(data);
                                    routeChange('/');
                                    setMessage('');
                                }
                                else {
                                    setMessage(data.message);
                                    console.log(data);
                                }
                            })
                            .catch(err => {
                                console.log(err);
                            });
                        }}>Sign Up</button>
                        <h1 style={{ margin: '40px' }}></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};