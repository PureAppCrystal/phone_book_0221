import React from 'react';
import Phone from './Phone';


const PhoneList =({phoneList, handleClick, handleRemove}) => {

    const phones = phoneList.map(
        phoneList => (
            <Phone
                key = {phoneList.get('id')}
                id = {phoneList.get('id')}
                name = {phoneList.get('name')}
                number = {phoneList.get('number')}
                handleClick = {handleClick}
                handleRemove = {handleRemove}
                
            />
        )
    )
    return(
        <div>
        {phones}
        </div>
    )
}

export default PhoneList;