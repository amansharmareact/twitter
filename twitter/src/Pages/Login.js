import React, { useEffect, useState } from 'react'
import login_img from '../Images/login_img.jpg'
import logo from '../Images/logo.png'
import './Login.css'
import Button from '../Components/loginButton'
import { useNavigate } from "react-router-dom";
import SignIn from './SignIn'
import CreateAccount from './CreateAccount'

const Login = () => {
    //     const navigate = useNavigate();

    //   const onClickHandler= () => {
    //     navigate("/");
    //   };

    const [showLogin, setShowLogin] = useState(false);

    const handleLoginButtonClick = () => {
        setShowLogin(true);

    };
    const [showAccount, setShowAccount] = useState(false);

    const handleAccountButtonClick = () => {
        setShowAccount(true);

    };

    useEffect(() => {
        document.body.style.overflow = 'scroll'
        return () => { document.body.style.overflow = 'hidden' }
    })

    return (
        <div className="login-page">
            <div className='login-img'>
                <img src={login_img} />
            </div>

            <div className="login-info">
                <img src={logo} />
                <h1> Happening now</h1>
                <h3>Join Twitter today.</h3>
                <div className="login-buttons">

                    <Button className='login-button' title='sign up with Google' name='fa-brands fa-google' />
                    <Button className='login-button' title='sign up with Apple' name='fa-brands fa-apple' />
                    <div className="line-with-or">
                        <div className="line"></div>
                        <div className="or">or</div>
                        <div className="line"></div>
                    </div>
                    <div onClick={handleAccountButtonClick}>
                        <Button className='login-button' bluebutton='bluebutton' title='Create Account' />
                        {showAccount && <CreateAccount />}
                    </div>

                    <p className='login-buttons-span'>By signing up, you agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>, including <span>Cookie Use</span>.</p>
                </div>
                <div className="sign-in">
                    <h3>Already have an account?</h3>
                    <div onClick={handleLoginButtonClick} >
                        <Button className='login-button' signin='signin' title='Sign In' />
                        {showLogin && <SignIn />}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
