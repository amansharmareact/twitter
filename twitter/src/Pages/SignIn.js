import React, {useEffect, useState } from 'react';
import logo from '../Images/logo.png';
import './SignIn.css';
import Button from '../Components/loginButton';

const SignIn = () => {
    const [showLogin, setShowLogin] = useState(true);
    const [phoneErr, setPhoneErr]=useState(false)

  const handleLoginButtonClick = () => {
    setShowLogin(false);
  };

  const phoneHandler = (e) => {
    let phone = e.target.value;
    if (phone.length <4) {
        setPhoneErr(true);

    }else{
        setPhoneErr(false); 
    }
};

  return (
    <div className={showLogin ? 'signin-container fixed' : 'hidden'}>
      <div className="signin-top">
        <i className="fa-solid fa-x" onClick={handleLoginButtonClick}></i>
        <img src={logo} alt="Twitter Logo" />
      </div>
      <div className="signin-buttons">
        <h1>Sign In to Twitter</h1>
        <Button className='login-button' title='sign up with Google' name='fa-brands fa-google' />
        <Button className='login-button' title='sign up with Apple' name='fa-brands fa-apple' />
        <div className="line-with-or">
          <div className="line"></div>
          <div className="or">or</div>
          <div className="line"></div>
        </div>
        <div className='signin-input'>
        <input type='text' placeholder='phone, email or username' onClick={phoneHandler}/>
        {phoneErr ? <span>Phone is not valid</span> : ""}
        </div>
        
        <Button className='login-button next-btn' title='Next' />
        <Button className='login-button forgotpass-btn' title='Forgot Password ?' />
        <span>Don't have an account?<span className='signin-buttons-span2'> Sign up</span></span>
      
      </div>
    </div>
  );
}

export default SignIn;
