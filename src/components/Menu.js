import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return(
        <div>
            <ul>
                <li><NavLink exact to="/" > 홈 </NavLink></li>
                <li><NavLink exact to="/phonebook" > 연락처 </NavLink></li>
            </ul>
            
            
        </div>
    )
}

export default Menu;