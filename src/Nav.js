import React, { useEffect, useState} from 'react'
import image from './assets/net.png';
import image2 from './assets/images1.png'
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100){
            handleShow(true);
        }else handleShow(false);
    });
    return () => {
        window.removeEventListener("scroll");
    };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src={image}
                alt="Netflix Logo"
            />
            
            <img className="nav__avater"
                src={image2}
            alt="Netflix Logo"/>
            
        </div>
    )
}

export default Nav
