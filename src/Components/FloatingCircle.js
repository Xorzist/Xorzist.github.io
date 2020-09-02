import React from 'react'
import myimage from '../images/startup.png'
import myResume from '../images/Resume.png'

export default function FloatingCircle() {
    return (
        <div style={{backgroundColor : "#364456"}} >
        <div id="circular" className="container">
            <img src={myimage} alt='My Avatar'></img>
           
          
        </div>
        <div className="centerresume" >
        <img src={myResume} alt='My Resume'></img>
        </div>
        </div>
    );
  }


