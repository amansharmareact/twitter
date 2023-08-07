import React, { useContext, useState } from 'react'
import modi from '../Images/modi.jpg'
import './Profile.css'
import bluetick from '../Images/bluetick.png'
import Button from './loginButton'
import NoteContext from '../Context/noteContext'
import { useNavigate } from "react-router-dom";


const Profile = () => {
   const data=useContext(NoteContext)
   
    const [isFollowing, setIsFollowing] = useState("Follow");
    const navigate= useNavigate();

    const onClickHandlerName = () => {
        navigate("/profile");
    };

    const onClickHandler = () => {
      setIsFollowing((prevIsFollowing) => !prevIsFollowing);
    };
 
  
    return (
        <div className="whotofollow-profiles">
            <img src={modi} />
            <div className="whotofollow-desc">
                <div className="whotofollow-name">
                    <h4 onClick={onClickHandlerName}>{data.name}</h4>
                    <img src={bluetick} />
                </div>
                <div className="whotofollow-username">
                    <h5>{data.username}</h5>
                </div>
            </div>
            <div >
            <button className="whotofollow-button" onClick={onClickHandler}>
        {isFollowing ? "Following" : "Follow"}
      </button>
            </div>

        </div>
    )
}

export default Profile
