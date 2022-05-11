import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import video from '../videos/video2.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faCirclePlay, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video autoPlay loop muted controls>
        <source src={video} type="video/mp4"/>
        </video>
        <h1>BOOKS AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
                
            </Button>

            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                SHOP NOW <FontAwesomeIcon icon={faArrowAltCircleRight} />
                
            </Button>


        </div>
    </div>
  )
}

export default HeroSection