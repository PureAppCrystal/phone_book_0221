import React from 'react';
import './Phone.css'

const Phone = ({id, name, handleClick, handleRemove}) => {
    return(
        <div className="phone" onClick={handleClick} >
            <div className="name">
                {name}
            </div>
            

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