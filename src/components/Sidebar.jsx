import React from 'react'

import logoImgMini from '../assets/images/logo-mini.svg'
import questionImg from '../assets/images/question.svg'
import userImg from '../assets/images/user.svg'

import { Link } from 'react-router-dom'


function Sidebar() {
    return (
        <div className="sidebar">
            <Link to="/">
                <img src={logoImgMini} alt="ITL" />
            </Link>
            <div className="sidebar__footer">
                <a href="">
                    <img src={questionImg} alt="FAQ" />
                </a>
                <Link to="/register">
                    <img src={userImg} alt="user" />
                </Link>
            </div>
        </div>
    )
}

export default Sidebar
