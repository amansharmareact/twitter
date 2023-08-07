import React, { useContext, useState } from 'react'
import modi from '../Images/modi.jpg'
import bluetick from '../Images/bluetick.png'
import './Tweet.css'
import { useNavigate } from "react-router-dom";
import NoteContext from '../Context/noteContext';

const Tweet = () => {
    const data = useContext(NoteContext);
    const [like, setLike] = useState(322);
    const navigate = useNavigate();

    const onClickHandlerName = () => {
        navigate("/profile");
    };

    const onClickHandler = () => {
        setLike((prevLike) => prevLike + 1);
    };

    return (
        <div className='tweet-post'>
            <div className="tweet-image">
                <img src={modi} />
            </div>
            <div className="tweet-desc">
                <div className="tweet-name">
                    <h4 onClick={onClickHandlerName}>{data.name}</h4>
                    <img src={bluetick} />
                    <h5>{data.username}</h5>
                    <h6>{data.date}</h6>
                </div>
                <div >
                    <p className="tweet-content">'मुझे देश के लिए मरने का मौका नहीं मिला, लेकिन मुझे देश के लिए जीने का मौका मिला है।'</p>
                </div>
                <div className="tweet-like-counter">
                    <div className="tweet-like">
                        <i className="tweet-icon fa-regular fa-comment"></i>
                        <span>1500</span>
                    </div>
                    <div className="tweet-like">
                        <i className="tweet-icon fa-solid fa-retweet"></i>
                        <span>10</span>
                    </div>
                    <div className="tweet-like">
                        <i className="tweet-icon fa-regular fa-heart" onClick={onClickHandler}></i>
                        <span>{like}</span>
                    </div>
                    <div className="tweet-like">
                        <i className="tweet-icon fa-solid fa-lines-leaning"></i>
                        <span>150</span>
                    </div>
                    <i className="tweet-icon fa-solid fa-share"></i>

                </div>

            </div>

        </div >
    )
}

export default Tweet
