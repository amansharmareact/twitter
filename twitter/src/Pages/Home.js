import React from 'react'
import GetVerified from '../Components/GetVerified';
import Menu from '../Components/Menu';
import NewPost from '../Components/NewPost';
import SearchBox from '../Components/SearchBox';
import Top from '../Components/Top';
import Trending from '../Components/Trending';
import Tweet from '../Components/Tweet';
import WhotoFollow from '../Components/WhotoFollow';
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="app-menu">
    <Menu/>
  </div>
  <div className="feed">
  <Top/>
    <NewPost />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
  </div>
  <div className="right-container">
  <SearchBox/>
  <GetVerified/>
  <Trending/>
  <WhotoFollow/>
  </div> 
  </div>
  )
}

export default Home
