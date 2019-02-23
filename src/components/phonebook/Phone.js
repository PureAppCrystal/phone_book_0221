import React from 'react';
import {Link} from 'react-router-dom'
import './Phone.css'

const Phone = ({id, name, handleClick, handleRemove}) => {

    
    return(
        <div className="phone" onClick={ (e) => {
                handleClick(id); 
            }}>
            {/* <Link to="/phonebook/select" params={{'id':id}}> */}
            {/* <Link to= {{
                pathname: '/phonebook/:target',
                target: 'select',
                query: {
                    'id':id
                }
            }}> */}
            
            
            <div className="phone-name">
                <Link to={`/phonebook/select?id=${id}`} >
                    {name}
                </Link>
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