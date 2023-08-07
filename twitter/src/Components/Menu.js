import React from 'react'
import Aman from '../Images/Aman.jpg'
import './Menu.css'
import { Link } from 'react-router-dom';

const Menu = () => {
  const styles = {
    fontSize: '35px',
  };

  return (
    <div className='menu'>
      <Link to='/'> <i className="fa-brands new-post-icon  fa-twitter" style={styles}></i></Link>
      <i className="fa-solid menu-fa-solid fa-house"></i>
      <i className="fa-solid menu-fa-solid fa-magnifying-glass"></i>
      <i className="fa-solid menu-fa-solid fa-bell"></i>
      <i className="fa-solid menu-fa-solid fa-envelope"></i>
      <i className="fa-solid menu-fa-solid fa-table-list"></i>
      <i className="fa-solid fa-user-group menu-fa-solid"></i>
      <i className="fa-solid menu-fa-solid fa-certificate"></i>
      <i className="fa-solid menu-fa-solid fa-user-large"></i>
      <i className="fa-solid menu-fa-solid fa-circle-info"></i>
      <img className='menu-img' src={Aman} />
    </div>
  )
}

export default Menu
