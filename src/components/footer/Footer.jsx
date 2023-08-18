import React from 'react'
import "../footer/footer.css"
import { BiLogoFacebook, BiLogoInstagram , BiTrain} from "react-icons/bi"
import { AiFillLinkedin, AiOutlineTwitter, AiFillYoutube, AiOutlineClockCircle } from "react-icons/ai"
import { TiLocation } from "react-icons/ti"
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer_frame">
                <div className="f_sections">
                    <div className="contact titles">Contact Us</div>
                    <ul>
                        <li><span>Address:</span> cfbhjnkfgv segfsebg vjaxg  ndfksdfz jdfb</li>
                        <li><span>Gmail:</span> Company@gmail.com</li>
                        <li><span>Phone:</span> 1234567890 lo</li>
                    </ul>
                </div>
                <div className="f_sections">
                    <div className="follow titles">Follow Us</div>
                    <div className="social_links">
                        <BiLogoFacebook />
                        <AiFillLinkedin />
                        <BiLogoInstagram />
                        <AiOutlineTwitter />
                        <AiFillYoutube />
                    </div>
                </div>
                <div className="f_sections">
                    <div className="head_Office titles">Head Office</div>
                    <div className="location">
                        <TiLocation />
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. am aperiam.</span>
                    </div>
                    <div className="location">
                        <AiOutlineClockCircle />
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. am aperiam.</span>
                    </div>
                    <div className="location">
                        <AiOutlineClockCircle />
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. am aperiam.</span>
                    </div>
                    <div className="location">
                        <BiTrain />
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. am aperiam. </span>
                    </div>

                </div>
            </div>

            <div className="copyRight">
                <span>@ 2021 All Rights Reserved. Privacy Policy  </span>
            </div>
        </footer>
    )
}

export default Footer
