import React, { useState } from 'react'
import "./Login.css"
import { Link ,useHistory} from 'react-router-dom'
import {auth} from "./firebase"

function Login() {
    const history=useHistory();
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const signIn = e => {
        e.preventDefault();
        //some fancy firebase login..
    }
    const register = e =>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //successfully created a new user with email and password
            console.log(auth);
            if(auth){
                history.push("/")
            }
        })
        .catch(error => alert(error.message))
        //some fancy firebase register
    }
  return (
    <div className='login'>
        <Link to="/">
            <img className="login_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG12.png" alt='' />

        </Link>
        <div className='login_conatiner'>
            <h1>
                Sign In
            </h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.ariaValueText)} />
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type='submit' onClick={signIn} className='login_signInButton'>Sign In</button>
            </form>
            <p>
                By signing-in you agree to Amazon's Condition of Use & Sale.Please see our Privacy Notice, our
                Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button onClick={register} className='login_registrationButton'>Create your Amazon Account</button>

        </div>
    </div>
  )
}

export default Login
