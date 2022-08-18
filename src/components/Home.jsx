//<=======Imports=========>
import './home.scss'
import React from 'react'
import cover from './cover.jpg'
//<=======================>

const Home = () => {
  return (
    <div id='home' className='home'>
      <img src={cover} alt="" />
        <h1>
            Hi my name's Andriel
        </h1>
        <p>
          Front-End Dev | <span className='react'>React</span> | JavaScripts  
        </p>
        <a href="#">Let's Go</a>
    </div>
  )
}

export default Home