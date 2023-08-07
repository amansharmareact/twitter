import React from 'react'
import './loginButton.css'

const loginButton = (props) => {
  return (
    <div>
      <button className={`${props.bluebutton} ${props.className} ${props.signin}`}>
        <i className={props.name}></i>
        {props.title}
      </button>
    </div>
  )
}

export default loginButton
