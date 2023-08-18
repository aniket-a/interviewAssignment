import React, { useState } from 'react';
import "../Navbar/navbar.css";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
    const [show, setShow] = useState(false);

    function toggleNav() {
        setShow(!show);
    }

    return (
        <nav className={`navbar ${show ? "active" : ""}`}>
            <div className="logo">LOGO</div>

            <ul className="navbarLinks">
                <li className="links">Qualifications</li>
                <li className="links">Organizations</li>
                <li className="links">Research & Analysis</li>
                <li className="links">Lorem ipsum</li>
                <li className="links">Lorem ipsum</li>
                <li className="links search"><AiOutlineSearch /></li>
                <li className="links btnEnrolment"><button>Enrolment</button></li>
            </ul>

            <div className="mobile_icons">
                {show ? (
                    <AiOutlineClose className='mobile_icon' name='menu' onClick={toggleNav} />
                ) : (
                    <AiOutlineMenu className='mobile_icon' name='close' onClick={toggleNav} />
                )}
            </div>
        </nav>
    );
}

export default Navbar;
