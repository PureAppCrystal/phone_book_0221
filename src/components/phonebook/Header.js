import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';


const Header = ({handleLeftBtn, handleRightBtn, title, history}) => {
    return(
        <div className="phone-list-header">
            <div className='goback' onClick={handleLeftBtn}>
                뒤로
            </div>

            <div className="context">
                {title}
            </div>

            <Link to="/phonebook/insert">
                <div>
                    추가ㅎ
                </div>
            </Link>
            
            <Link to="/phonebook/insert" >추가</Link>
            <div className="phone-add" onClick={handleRightBtn}>
                추가
            </div>
            
        </div>
    )
}

export default Header;