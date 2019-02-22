import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    return(
        <div className="main-menu">
            <div className="menu"><NavLink exact to="/" activeClassName="menu-active"> 홈 </NavLink></div>
            <div className="menu"><NavLink exact to="/phonebook" activeClassName="menu-active"> 연락처 </NavLink></div>
        </div>
    )
}

export default Menu;