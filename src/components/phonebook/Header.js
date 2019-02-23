import React from 'react';
import './Header.css';


const Header = ({handleLeftBtn, handleRightBtn, title}) => {
    return(
        <div className="phone-list-header">
            <div className='goback' onClick={handleLeftBtn}>
                뒤로
            </div>

            <div className="context">
                {title}
            </div>

            <div className="phone-add" onClick={handleRightBtn}>
                추가
            </div>
            
        </div>
    )
}

export default Header;