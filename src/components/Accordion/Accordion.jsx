import React, { useState } from 'react'
import { BsPlusCircle } from "react-icons/bs"
import { AiOutlineMinusCircle } from "react-icons/ai"

const Accordion = ({  item, index }) => {

    const [isActive, setisActive] = useState(false)

    function onClickHandler(){
        setisActive(!isActive)
    }

    return (
        <div className="row" key={index}>
            <div className="question_row">
                <div className="question">{item.question}</div>
                <div className="togglebtn">
                    {isActive ? (<AiOutlineMinusCircle onClick={onClickHandler} className='close' />) : (<BsPlusCircle onClick={onClickHandler} className='open' />)}
                </div>
            </div>

            <div className="ans_row">
                {isActive && (<p>{item.answers}</p>) }
            </div>

        </div>
    )
}

export default Accordion
