import React from 'react'
import "../style/subscribe.css"
import {AiFillCaretRight} from "react-icons/ai"

const Subscribe = () => {
    return (
        <div className='subscribeContaier'>
            <div className="subscribe">
                <div className="title">Subscribe</div>
                <div className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores, quas consequuntur optio maxime!</div>
                <div className="subscribe_area">
                    <input type="text" placeholder='Enter your Email Address'/>
                    <div className='cta'>Subscribe <AiFillCaretRight/></div>
                </div>    
            </div>
        </div>
    )
}

export default Subscribe
