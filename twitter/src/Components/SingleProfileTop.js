import React, { useContext } from 'react'
import './SingleProfileTop.css'
import NoteContext from '../Context/noteContext';
import bluetick from '../Images/bluetick.png'
import { useNavigate } from "react-router-dom";

const SingleProfileTop = () => {
  const data = useContext(NoteContext);
  const navigate = useNavigate();
  
  const onClickHandler= () => {
    navigate("/");
    
  };

  return (
    <div className='singlepersonprofile'>
      <div>
        <i className="fa-solid fa-arrow-left" onClick={onClickHandler}></i>
      </div>
      <div className="singlepersonprofile-data">
        <div className="singlepersonprofile-data-name">
          <h4>{data.name}</h4>
          <img src={bluetick} />
        </div>
        <span className='singlepersonprofile-data-span'>{data.username}</span>
        <span className='singlepersonprofile-data-span'>37.k tweets</span>
      </div>

    </div>
  )
}

export default SingleProfileTop
