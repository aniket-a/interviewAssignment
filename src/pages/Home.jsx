import React, { useState } from 'react'
import "../style/home.css"
import { LuCalendarClock } from "react-icons/lu"
import { AiFillRightCircle } from "react-icons/ai"

import Carousel from '../components/Carousel/Carousel'
import Counter from '../components/counter/Counter'
import Subscribe from './Subscribe'
import Accordion from '../components/Accordion/Accordion'
const Home = () => {
    const arr = [
        {
            id: 1,
            title: "Lorem Ipsum",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta molestiae optio culpa quae dolor sit vel ea omnis? Sint ratione, aperiam numquam tempora laudantium ex"
        },
        {
            id: 2,
            title: "Lorem Ipsum",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta molestiae optio culpa quae dolor sit vel ea omnis? Sint ratione, aperiam numquam tempora laudantium ex"
        }, {
            id: 4,
            title: "Lorem Ipsum",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta molestiae optio culpa quae dolor sit vel ea omnis? Sint ratione, aperiam numquam tempora laudantium ex"
        }, {
            id: 5,
            title: "Lorem Ipsum",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta molestiae optio culpa quae dolor sit vel ea omnis? Sint ratione, aperiam numquam tempora laudantium ex"
        }, {
            id: 6,
            title: "Lorem Ipsum",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta molestiae optio culpa quae dolor sit vel ea omnis? Sint ratione, aperiam numquam tempora laudantium ex"
        }, {
            id: 7,
            title: "Lorem Ipsum",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta molestiae optio culpa quae dolor sit vel ea omnis? Sint ratione, aperiam numquam tempora laudantium ex"
        },

    ];

    const questions = [
        { id: 1, question: "Will investor able to have multiple Account Numbers?", answers: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nobis perspiciatis perferendis odio animi soluta, facilis, eius nihil fugit quam assumenda pariatur incidunt saepe ratione illum at blanditiis dolores architecto!" },
        { id: 2, question: "How does an investor gain to MF Utility?", answers: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nobis perspiciatis perferendis odio animi soluta, facilis, eius nihil fugit quam assumenda pariatur incidunt saepe ratione illum at blanditiis dolores architecto!" },
        { id: 3, question: "How does an investor gain Access to MF?", answers: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nobis perspiciatis perferendis odio animi soluta, facilis, eius nihil fugit quam assumenda pariatur incidunt saepe ratione illum at blanditiis dolores architecto!" }
    ]

   

   

    return (
        <div className="comtainer">

            <Carousel />

            <div className='upcomming_container'>

                <div className="exam_frame main">
                    <span className="title">Upcomming Examinations</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="exam_frame schedule">
                    <div className="cal_icon"><LuCalendarClock /></div>
                    <div className="cal_info">
                        <span className='date'>02th october 2014</span>
                        <span>Level 1 exam</span>
                    </div>
                </div>
                <div className="exam_frame schedule">
                    <div className="cal_icon"><LuCalendarClock /></div>
                    <div className="cal_info">
                        <span className='date'>Nov-Dec 2016</span>
                        <span>Level 2</span>
                        <span>Lorem Ipsum </span>
                        <span>Lorem Ipsum</span>
                    </div>
                </div>
                <div className="exam_frame schedule">
                    <div className="cal_icon"><LuCalendarClock /></div>
                    <div className="cal_info">
                        <span className='date'>Ongoing this year</span>
                        <span>Level 3 (grad)</span>
                    </div>
                </div>



            </div>

            <div className="slider_container">
                {
                    arr.map((item, index) => {
                        return (
                            <div className="card" key={index}>
                                <div className="card_details">
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                    <div className="btn_info">
                                        <span>Know More </span>
                                        <AiFillRightCircle />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <Counter />

            <div className="faq_container">
                <div className="title">FAQ</div>

                <div className="faq_frame">
                    {
                        questions.map((item, index) => {
                            return (
                              <Accordion   item={item} index={index}/>
                            )
                        })
                    }
                </div>

            </div>

            <Subscribe />

        </div>
    )
}

export default Home
