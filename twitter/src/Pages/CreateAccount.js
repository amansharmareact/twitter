import React, { useState } from 'react'
import './CreateAccount.css'
import Button from '../Components/loginButton'

const CreateAccount = () => {
    const months = Array.from({ length: 12 }, (_, index) => index + 1);
    const days = Array.from({ length: 31 }, (_, index) => index + 1);
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, index) => currentYear - index);

    const [showAccount, setShowAccount] = useState(true);
    const [passErr, setPassErr] = useState('')
    const [usernameErr, setUsernameErr] = useState(false)

    const handleAccountButtonClick = () => {
        setShowAccount(false);
    };
    const usernameHandler = (e) => {
        let username = e.target.value;
            
        
        if (username.length < 4) {
            setUsernameErr(true);
        } else {
            setUsernameErr(false);
        }
        
    };
    const phoneHandler = (e) => {
        let phone = e.target.value;
        if (phone.length < 10) {
            setPassErr(true);
        } else {
            setPassErr(false);
        }
    };

    return (
        <div className={showAccount ? 'createaccount-container' : 'hidden'}>
            <div className="createaccount-top">
                <i className="fa-solid fa-x" onClick={handleAccountButtonClick}></i>
                <h4>Step 1 of 5</h4>
            </div>
            <h4 className='createaccount-container-h4'>Create your account</h4>
            <div className="createaccount-input">
                <input type='text' placeholder='Name' onChange={usernameHandler} 
                />
                {usernameErr ? <span>Username is not valid</span> : ""}
                <input type='text' placeholder='Phone' onChange={phoneHandler} className='createaccount-input2' />
                {passErr ? <span>Phone Number is not valid</span> : ""}
            </div>
            <div className="createaccount-dob">
                <span className='createaccount-dob-span2'>Date of birth</span>
                <span className='createaccount-dob-span1'>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</span>
            </div>
            <div className="createaccount-dob-options">
                <select name="month" id="month" className='createaccount-select'>
                    {months.map((month) => (
                        <option key={month} value={month}>
                            {month}
                        </option>
                    ))}
                </select>
                <select name="day" id="day" className='createaccount-select'>
                    {days.map((day) => (
                        <option key={day} value={day}>
                            {day}
                        </option>
                    ))}
                </select>
                <select name="year" id="year" className='createaccount-select'>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
            <div className="createaccount-button">
                <Button className='login-button createaccount-btn' title='Next' />
            </div>
        </div>
    )
}

export default CreateAccount
