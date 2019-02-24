import React from 'react';
import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react';
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
            {/* <div> */}
            <Button 
                className="phone-delete"
                icon="trash"
                color="red"
                onClick={ (e) => {
                    e.stopPropagation();
                    handleRemove(id);
                }
            }>
                
            </Button>
            
        </div>
    )
}

export default Phone;