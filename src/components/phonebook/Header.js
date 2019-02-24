import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';


const Header = ({id, handleLeftBtn, handleRightBtn, formMode}) => {
    let headerClass = "phone-list-header"
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
            headerClass = "phone-list-header header-list"
            break;
        case 'select':
            rightBtn = {
                centerTitle: "연락처",
                rightTitle: "편집",
                target: `/phonebook/update?id=${id}`
            }
            break;
        case 'update':
            rightBtn = {
                centerTitle: "연락처 편집",
                rightTitle: "완료",
                target: `/phonebook/select?id=${id}`,
                onClick: {handleRightBtn}
                //onClick: {handleLeftBtn}
            }
            break;
        default :
            rightBtn = {}
    }
      


    return(
        <div className={headerClass}>
            <div className='goback' onClick={handleLeftBtn}>
                뒤로
            </div>

            <div className="hedear-title">
                {rightBtn.centerTitle}
            </div>

            <Link className="header-right-btn" to={rightBtn.target}>
                <div className="header-right-btn" onClick={handleRightBtn}>
                    {rightBtn.rightTitle}
                </div>
            </Link>
        </div>
    )
}

export default Header;