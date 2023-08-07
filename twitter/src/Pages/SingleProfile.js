import React from 'react'
import './SingleProfile.css'
import Menu from '../Components/Menu'
import SearchBox from '../Components/SearchBox'
import Trending from '../Components/Trending'
import WhotoFollow from '../Components/WhotoFollow'
import SinglePersonProfile from '../Components/SinglePersonProfile'

const SingleProfile = () => {
  return (
    <div className='singleprofile-container'>
        <Menu/>
        <div className="singleprofile">
           <SinglePersonProfile/>
        </div>
        <div className="singleprofile-sidebar">
            <SearchBox/>
            <Trending/>
            <WhotoFollow/>
        </div>
      
    </div>
  )
}

export default SingleProfile
