import React, { useState } from 'react'
import './NewPost.css'
import Aman from '../Images/Aman.jpg'

const NewPost = () => {
    const [inputValue, setInputValue] = useState('');
    const [disableButton, setDisableButton] = useState('inactiveButton')
    const [disableSpan, setDisableSpan] = useState('')

    const [disable, setDisable] = useState(true)
    const onChangeHandler = (event) => {
        const value = event.target.value;
        setInputValue(value);

        setDisable(false)
        setDisableButton('new-post-icons-button')
    }


    return (
        <div className='new-post'>
            <div className="new-post-img">
                <img src={Aman} />

            </div>
            <div className="new-post-info">

                {inputValue !== '' ? (
                    <div>
                        <button className={`new-post-info-btn ${disableSpan ? 'disabled' : ''}`}>
                            Everyone <i className="fa-solid fa-angle-down"></i>
                        </button>
                    </div>
                ) : null /* Hide the button when inputValue is empty */}

                <input type='text' placeholder='What is happening?!' value={inputValue} onChange={onChangeHandler} />


                {inputValue !== '' && (
                    <div>
                        <span>
                            <i className="fa-solid fa-earth-americas"></i>Everyone can reply
                        </span>
                    </div>
                )}
                   {inputValue !== '' && (
                <div className="border">
                </div>  )}

                <div className='new-post-icons'>
                    <i className="icon fa-regular fa-image"></i>
                    <i className="icon fa-solid fa-square-poll-horizontal"></i>
                    <i className="icon fa-solid fa-face-smile"></i>
                    <i className="icon fa-solid fa-location-dot"></i>
                    <button className={` ${disableButton}`} disabled={disable}>Tweet</button>
                </div>
                
            </div>
        </div>



    )
}

export default NewPost
