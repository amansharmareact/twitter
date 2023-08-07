import React, { useContext } from 'react';
import './SinglePersonProfile.css'
import parliament from '../Images/parliament.jpeg'
import SingleProfileTop from './SingleProfileTop';
import modi from '../Images/modi.jpg'
import NoteContext from '../Context/noteContext';
import bluetick from '../Images/bluetick.png'
import Tweet from './Tweet';

const SinglePersonProfile = () => {
  const data = useContext(NoteContext);
  return (
    <div >
      <SingleProfileTop />
      <div className='singlepersonpro'>
        <div className="singlepersonprofile-coverphoto">
          <img src={parliament} />
        </div>

        <div>
          <div className="singlepersonprofile-dp">
            <img src={modi} />
          </div>

        </div>

        <div className="singlepersonprofile-name">
          <h3>{data.name}</h3>
          <img src={bluetick} />
        </div>

        <div className="singlepersonprofile-spans">
          <span className='singlepersonprofile-span'>{data.username}</span>
          <span className='singlepersonprofile-span2'>Prime Minister of India</span>
        </div>

        <div className="singlepersonprofile-icons">
          <i className="fa-solid fa-location-dot"></i>
          <span className='singlepersonprofile-icons-span'>India</span>
          <i className="fa-solid fa-link"></i>
          <a href="https://www.narendramodi.in/" target="_blank">
            <span className='singlepersonprofile-icons-span link-span'>narendramodi.in</span>
          </a>
          <i className="fa-solid fa-link"></i>
          <span className='singlepersonprofile-icons-span'>Born September 17</span>
          <i className="fa-regular fa-calendar"></i>
          <span className='singlepersonprofile-icons-span'>Joined January 2009</span>
        </div>
        <div className="singlepersonprofile-followers-following">
          <div>
            <span className='singlepersonprofile-count'>2,589</span>
            <span className='singlepersonprofile-followers'>Following</span>
          </div>
          <div>
            <span className='singlepersonprofile-count'>90.7M</span>
            <span className='singlepersonprofile-followers'>Followers</span>
          </div>
        </div>

        <div className="singlepersonprofile-feed">
          <div className="singleperson-tweet">
            <p className='singleperson-tweet-p'>Tweets</p>
          </div>
          <div className="singleperson-tweet">
            <p className='singleperson-tweet-p'>Replies</p>
          </div>
          <div className="singleperson-tweet">
            <p className='singleperson-tweet-p'>Media</p>
          </div>
          <div className="singleperson-tweet">
            <p className='singleperson-tweet-p'>Likes</p>
          </div>
        </div>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>

    </div>



  );
};

export default SinglePersonProfile;
