import React from 'react';
import Header from './Header';
import './PhoneForm.css'


const PhoneForm =({name, number, handleChange, handleInsert, handleGoBack, history}) => {
    return(
        <div>
            PhoneForm
            <Header 
                handleLeftBtn={handleGoBack} 
                handleRightBtn={handleInsert}
                formMode='insert' />
            <div className="phone-input-area">
                <input className="phone-input" name="name" placeholder="name" onChange={handleChange} value={name}/>
                <input className="phone-input" name="number" placeholder="number" onChange={handleChange} value={number}/>
            </div>

            {/* <div onClick={handleInsert}>
                <Link to="/phonebook/">저장하기</Link>
            </div> */}
            
        </div>
    )
}

export default PhoneForm;