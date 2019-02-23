import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';


const Header = ({handleLeftBtn, handleRightBtn, formMode}) => {

    let rightBtn = {}
    switch (formMode) {
        case 'insert':
            rightBtn = {
                centerTitle:"새로운 연락처",
                rightTitle: "완료",
                target: "/phonebook",
                onClick: {handleRightBtn}
            } 
            break;
        case 'list':
            rightBtn = {
                centerTitle: "연락처",
                rightTitle: "등록",
                target: "/phonebook/insert"
            }
            break;
        default :
            rightBtn = {}
    }
      


    return(
        <div className="phone-list-header">
            <div className='goback' onClick={handleLeftBtn}>
                뒤로
            </div>

            <div className="hedear-title">
                {rightBtn.centerTitle}
            </div>


            <div className="header-right-btn" onClick={handleRightBtn}>
                <Link className="header-right-btn" to={rightBtn.target} >
                    {rightBtn.rightTitle}
                </Link>
            </div>

            
            
            
        </div>
    )
}

export default Header;