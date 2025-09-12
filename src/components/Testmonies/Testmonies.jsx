import React, { useRef } from 'react'
import'./Testmonies.css'
import arrow_right from '../../assets/arrow_right.svg'
import gallery4 from '../../assets/gallery4.png'

 
const Testmonies = () => {
    const slider = useRef();
    let tx = 0;
const slideForward = () =>{
    if (tx > -50){
        tx -= 25;
    }
    slider.current.style.transform=`translateX(${tx}%)`

}
const slideBackward = () =>{
    if (tx < 0){
        tx += 25;
    }
    slider.current.style.transform=`translateX(${tx}%)`

}
  return (
    <div className='testmonies'>
        <img src={arrow_right} className='next-btn' onClick={slideForward}/>
        <img src={arrow_right} className='back-btn' onClick={slideBackward}/>
        <div className='slider'>

            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src=  {gallery4} alt=""/>
                            <div>
                                <h3>William</h3>
                                <span>Edusity, usa</span>
                            </div>
                        </div>
                        <p> Don't you hate paying big monopolies ridiculous prices for a commodity service? So do we. 

That's why we went through the tough process of verifying our brand with the X team, just to let you know we offer over a 90% discount on all Microsoft products, and it's completely legit.
                        </p>                        
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src=  {gallery4} alt=""/>
                            <div>
                                <h3>William</h3>
                                <span>Edusity, usa</span>
                            </div>
                        </div>
                        <p> 
                            Don't you hate paying big monopolies ridiculous prices for a commodity service? So do we. 

That's why we went through the tough process of verifying our brand with the X team, 
just to let you know we offer over a 90% discount on all Microsoft products, and it's completely legit.
                        </p>                        
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src=  {gallery4} alt=""/>
                            <div>
                                <h3>William</h3>
                                <span>Edusity, usa</span>
                            </div>
                        </div>
                        <p> Don't you hate paying big monopolies ridiculous prices for a commodity service? So do we. 

That's why we went through the tough process of verifying our brand with the X team, just to let you know we offer over a 90% discount on all Microsoft products, and it's completely legit.
                        </p>                        
                    </div>
                </li>
            </ul>
        </div>
        

      
    </div>
  )
}

export default Testmonies
