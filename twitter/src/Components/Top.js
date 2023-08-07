import React from 'react'
import './Top.css'

const Top = () => {
    return (
        <div className='top'>
            <div className="top-home">
                <h1>Home</h1>
            </div>
            <div className="top-follow">
                <span className='top-you'>
                    For You
                </span>
                <span className='top-following'>Following</span>
            </div>

        </div>
    )
}

export default Top
