import React, { useState } from 'react';

export default function Profile() {
  const [name, setName] = useState('John');
  const [email, setEmail] = useState('john@example.com');
  const [password, setPassword] = useState('password');
  const [address, setAddress] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSave = (event) => {
    event.preventDefault();

  };

  return (
    <>
      <style>
        {`
            @import url(https://fonts.googleapis.com/css?family=Lato:100,300,400,700);
            @import url(https://fonts.googleapis.com/css?family=Montez);
            
            body{
              background-color: #f5f5f5;  
              font-family: Lato;
            }
            .profile,.content{
              -webkit-transition: 0.5s ease;
              -moz-transition: 0.5s ease;
                transition: 0.5s ease;
            }
            .profile{
              position: absolute;
              top: 100px;
              bottom: auto;
              left: 0;
              right: 0;
              min-height: 70%;
              height: auto;
              width: 85%;
              margin: 20px auto;
              margin-bottom: 100px;
              background-color: #fff;
              border-top: 5px solid rgb(131, 231, 242);
              border-radius: 0 0 5px 5px;
              box-shadow: 0 2.5px 5px #ccc;
            }
            .content{
              /* position: absolute; */
              min-height: 100%;
              height: 100%;
              width: 95%;
              margin: 2.5% auto;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              /*border: 1px solid #eee;*/
              /*background-color: yellow;*/
              overflow: hidden;
            }
            .short-info{
              position: relative;
              min-height: 100px;
              height: auto;
              width: 97.5%;
              margin: 1.5% auto;
              /*background-color: #f5f5f5;*/
              background-color: #fff;
              background-color: #f2ecee;
              /*border-top: 2px solid #39cb58;*/
              border-radius: 2.5px;
              /*box-shadow: inset 0 -1.5px #ddd;*/
            }
            .details{
              width: 97.5%;
              /*background-color: red;*/
              margin: 2.5px auto;
            }
            .tab-heads{
              color: #777;
              margin: 0 2.5px;
            }
            .tabs{
              height: 200px;
              width: 97.5%;
              margin: 0 auto;
              /* border-top: 2.5px solid #39cb58; */
              background-color: #f2ecee;
              border-radius: 2.5px;
              /* background-color: #f3f3f3; */
            }
            span.fa-envelope{
              position: absolute;
              top: 22%;
              left: 56%;
              color: #39cb58;
            }
            span.photo{
              position: relative;
              height: 80px;
              width: 80px;
              border-radius: 5px;
              margin: 10px 0 2.5px;
              display: block;
              top: 10%;
              left: 10%;
              overflow: hidden;
              background: #ddd url("https://www.adtechnology.co.uk/images/UGM-default-user.png");
              background-size: 100%;
              border-radius: 100%;
              border: 2px solid #ddd;
            }
            span.photo:after{
              content: " Add Profile Pic ";
              text-align: center;
              position: absolute;
              left: 0;
              z-index: 2;
              padding: 35% 0 65%;
              height: 0;
              width: 100%;
              opacity: 0;
              color: #222;
              background-color: rgba(0,0,0,0.25);
              background-size: 100%;
              transition: 0.35s ease-in-out;
              overflow: hidden;
              border-radius: 100%;
            }
            span.photo:hover:after{
              bottom: 0;
              opacity: 1;
              color: #fff;
            }
            
            span.name,span.links > h3,h4{
              font-family: Lato;
              /*font-weight: 200;*/
            }
            span.name{
              position: absolute;
              top: 20%;
              left: 25%;
              color: #555;
              font-size: 18px;
            }
            label{
              color: #555;
              line-height: 2.1em;
              margin-left: 10px;
            }
            label[for="avatar"]{
              line-height: 120px;
            }
            .btn{
              /* position: absolute; */
              top: 45%;
              left: 25%;
              /* color: #fff; */
              /* background-color: rgba(57,203,88,0.65); */
              background-color: #ddd;
              padding: 10px 15px;
              border-radius: 3px;
              box-shadow: inset 0 0 0 2px #39cb58,
                          0 2px 0 0 rgba(57,203,88,0.5);
              cursor: pointer;
              transition: 0.5s ease;
            }
            span.btn:hover{
              opacity: 1;
              color: #fff;
              background-color: rgba(57,203,88,1);
              /* background-color: #39cb58; */
            }
            .profile:hover .btn{
                opacity: 1;
            }
            .short-info span h3,h4{
              display: inline-block;
              margin: 0;
            }
            
            div.circles{
              width: 100%;
              margin: 0 auto;
            }
            span.fa-users{
              color: #777;
              margin-left: 1px;
              margin: 7px 7px 2.5px;
            }
            span.fa-users:after{
              content: "Circles";
              font-family: Lato;
              margin-left: 3px;
              color: #777;
            }
            .myCircle{
              height: 200px;
              width: 97.5%;
              margin: 0 auto;
              background-color: #f2ecee;
              border-radius: 2.5px;
            }
            
            
            /*Input Fields Styles
            =========================*/
            fieldset textarea,input{
              font-family: Open Sans;
              font-size: 15px;
              color: #333;
              background-color: #f7f7f7;
              box-shadow: 0 0 0 1px rgb(131, 231, 242);
              padding: 5px;
              width: 75%;
              margin: 5px auto;
              border: 0;
              border-radius: 2.5px;
              outline: 0;
              transition: 0.3s ease;
            }
            fieldset textarea{
              min-height: 40px;
              max-height: 60px;
            }
            fieldset textarea:hover,input:hover{
              box-shadow: 0 0 0 1px #39cb58;
              background-color: #fff;
            }
            fieldset textarea:focus,input:focus{
              box-shadow: 0 0 0 1px #39cb58,
                          inset 0 2px 5px -1px rgba(0,0,0,0.25);
            }
            
            .grid-35{
              width: 35%;
              float: left;
              font-weight: 500;
              color: #333;
              /* text-align: left; */
            }
            .grid-65{
              position: relative;
              width: 65%;
              float: right;
              font-family: Source Sans Pro;
              font-weight: 300;
              font-size: 17px;
            }
            #tabs-1 div,#tabs-2 div,#tabs-3 div{
              border-bottom: 1px solid #ddd;
            }
            
            /*Tabs Styles
            =========================*/
            #tabs {
              width: 97.5%;
              margin: 0 auto;
              position: relative;
              -webkit-transition: all 0.5s ease;
              -moz-transition: all 0.5s ease;
                transition: all 0.5s ease;
            }
            #tabs-1,#tabs-2,#tabs-3{
              width: 95%;
              margin: 0 auto;
              /*margin-top: 5px;*/
              padding: 5px 10px;
              line-height: 1.3em;
              padding-bottom: 10px;
              font-family: Open Sans;
              background-color: #f2ecee;
              border-radius: 0 2.5px 2.5px 2.5px;
              -webkit-transition: all 0.5s ease;
              -moz-transition: all 0.5s ease;
              transition: all 0.5s ease;
            } 
            #tabs ul{
              margin: 0 auto;
              padding: 0;
            }
            #tabs ul li{
              display: inline-block;
              margin: 0;
              padding: 0 7px;
              width: 65px;
              text-align: center;
              padding-bottom: 5px;
              -webkit-transition: all 0.5s ease;
              -moz-transition: all 0.5s ease;
                 transition: all 0.5s ease;  
            }
            #tabs ul li a{
              outline: 0;
              text-decoration: none;
              padding: 0 3px 0 0;
              /* background-color: #222; */
              font-family: Open Sans;
              margin: 0;
              -webkit-transition: all 0.5s ease;
              -moz-transition: all 0.5s ease;
                 transition: all 0.5s ease;
            }
            
            .ui-state-hover{
              border-bottom: 2.5px solid #aaa;
            }
            .ui-state-active{
              color: #38ccc0;
              border-bottom: 25px solid #000000;
            }
            
            /* #CLEARFIX HACK
            =========================*/
            .clear:after{
              content: " ";
              display: table;
              clear: both;
            }
            
            /* Edit View
            ======================*/
            .content h1{
              text-align: center;
              color: #555;
              font-family: Lato;
              font-size: 40px;
              font-weight: 200;
              margin: 5px auto 15px auto;
            }
            select{
              width: 80%;
              padding: 7px 10px;
              background-color: #f5f5f5;
              border: 1px solid #39cb58;
              border-radius: 2.5px;
              outline: 0;
            }
            select option{
              padding: 5px;
            }
            fieldset{
              text-align: center;
              /* background-color: rgba(0,0,0,0.01); */
              margin-bottom: 5px;
              padding: 5px;
              box-sizing: border-box;
              border-bottom: 1px solid rgba(0,0,0,0.07);
            }
            fieldset:last-child{
              border-bottom: none;
            }
            input.Btn{
              width: 48%;
              float: left;
              display: block;
              margin: 40px auto;
              margin-left: 1%;
              padding: 15px 0;
              font-size: 16px;
              color: #fff;
              cursor: pointer;
              background-color: rgb(57, 188, 203);
              box-shadow: inset 0 0 0 2px rgb(57, 188, 203),
                          0 2px 0 0 rgb(57, 188, 203);
              transition: 0.5s ease;
            }
            input.Btn:hover{
              background-color: rgb(57, 188, 203);
                box-shadow: 2px 2px 0 2px rgb(131, 231, 242),
                            2px 2px 0 2px rgb(131, 231, 242),;
            }
            /*Media Queries
            =========================*/
            @media only screen and (min-width: 768px){ /*Desktop*/
              .profile{ 
                width: 450px;
              }
              .search{
                float: none;
                /* top: 0; */
                left: 0;
                right: 0;
                margin: 0 auto;
              }
            }
            @media only screen and (max-width: 768px){ /*Tablet*/
              .profile{ 
                width: 70%;
              }
              .search{
                top: 0;
                left: 0;
                right: 0;
                display: block;
                margin: 0 auto;
              }
            }
            @media only screen and (min-width: 320px) and (max-width: 520px){ /*Phone*/
              .profile{
                width: 90%;
              }
            }
            
            .submit-style{
                width: 100%;
                margin: 0 auto;
                padding: 10px 0;
                background-color: #39cb58;
                color: #fff;
                font-size: 20px;
                font-family: Lato;
                font-weight: 300;
                border: 0;
                border-radius: 2.5px;
                cursor: pointer;
                transition: 0.5s ease;
            }
            
            `}
      </style>
      <div className="wrapper padding-correction">
        <div className="profile">
          <div className="content">
            <h1>Edit Profile</h1>
            <form action="">
              <fieldset>
                <div className="grid-35">
                  <label htmlFor="fname">Profile Name</label>
                </div>
                <div className="grid-65">
                  <input type="text" id="fname" value={name} onChange={handleNameChange} tabIndex={1} />
                </div>
              </fieldset>
              {/* Address */}
              <fieldset>
                <div className="grid-35">
                  <label htmlFor="location">Address</label>
                </div>
                <div className="grid-65">
                  <input type="text" id="address" value={address} onChange={handleAddressChange} tabIndex={4} />

                </div>
              </fieldset>
              {/* Email */}
              <fieldset>
                <div className="grid-35">
                  <label htmlFor="email">Email Address</label>
                </div>
                <div className="grid-65">
                  <input type="email" id="email" value={email} onChange={handleEmailChange} tabIndex={6} />
                </div>
              </fieldset>
              <fieldset>
                <div className="grid-35">
                  <label htmlFor="password">Password</label>
                </div>
                <div className="grid-65">
                  <input type="password" id="password" value={password} onChange={handlePasswordChange} tabIndex={6} />
                </div>
              </fieldset>
              <fieldset>
                {/* <input type="button" className="Btn cancel" defaultValue="Cancel" /> */}
                <input type="submit" className="Btn" id="submit-style" defaultValue="Save Changes" onClick={handleSave} />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>

  );
}