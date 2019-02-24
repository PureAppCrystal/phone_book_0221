import React from 'react';
import {Link} from 'react-router-dom'
import './Phone.css'

const Phone = ({id, name, handleClick, handleRemove}) => {

    
    return(
        <div className="phone" onClick={ (e) => { handleClick(id); }}>
            
            {/* 이름 */}
            <div className="phone-name">
                <Link to={`/phonebook/select?id=${id}`} >
                    {name}
                </Link>
            </div>
            

            {/* 삭제버튼 */}
            <div className="phone-delete" onClick={ (e) => {
                e.stopPropagation();
                handleRemove(id);
            }}>
                삭제
            </div>
            
        </div>
    )
}

export default Phone;