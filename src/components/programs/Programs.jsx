import React from 'react'
import './Programs.css'
import Caputure from '../../assets/Capture.png'
import Caputure2 from '../../assets/Capture2.png'
import Caputure3 from '../../assets/Capture3.png'
import graduhat from '../../assets/graduhat.png'
import masters from '../../assets/masters.jpg'
import postgrad from '../../assets/postgrad.jpg'
import bachulor from '../../assets/bachulor.png'
import award from '../../assets/award.svg'

const Programs = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={Caputure} alt=""/>
            <div className="caption">
                <img src={award} alt=""/>  
                <p>Bachulor Degree</p> 
            </div>
        </div>
            <div className='program'>
            <img src={Caputure2} alt=""/>
             <div className="caption">
                <img src={award} alt=""/>  
                <p>Masters Degree</p> 
            </div>
        </div>
            <div className='program'>
            <img src={Caputure3} alt=""/>
             <div className="caption">
                <img src={award} alt=""/>  
                <p>Postgraduate Degree</p> 
            </div>
        </div>

      
    </div>
  )
}

export default Programs
