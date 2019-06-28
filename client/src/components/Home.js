import React from 'react'
import logo from '../images/white_transparent_1.png';

const Home = () => {
  return (

    <div className="Home">
        <div className="welcome-card">
          <div className='welcome-msg'>Welcome To</div>
          <div><img src={logo} alt="Logo" width="300"/></div>
          <div className='welcome-sub-msg'>Let Your Car Work For You!</div>
        </div>
      </div>

  )
}

export default Home
