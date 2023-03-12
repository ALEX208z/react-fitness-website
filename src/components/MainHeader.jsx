import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'

const MainHeader = () => {
  return (
    <>
    <header className='main-header'>
      <div className="container main-header-container">
        <div className="main-header-left">
          <h4>#100DaysOfWorkout</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit corporis, ratione nostrum voluptates ipsam!</p>
          <Link to="/plans" className='btn lg'>Get Started</Link>
        </div>
        <div className="main-header-right">
          <div className="main-header-circle"></div>
          <div className="main-header-image">
            <img src={Image} alt="header"/>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default MainHeader
