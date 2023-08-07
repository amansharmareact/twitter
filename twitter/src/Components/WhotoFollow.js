import React from 'react'
import './WhotoFollow.css'
import Profile from './Profile'

const WhotoFollow = () => {
  return (
    <div className='whotofollow'>
      <h1>
        Who to follow
      </h1>
   
      <Profile className='whotofollow-profile'/>
      <Profile className='whotofollow-profile'/>
      <Profile className='whotofollow-profile'/>
       
    </div>
  )
}

export default WhotoFollow
