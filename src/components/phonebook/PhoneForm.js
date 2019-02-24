import React from 'react';
import Header from './Header';
import './PhoneForm.css'


const PhoneForm =({id, name, number, handleChange, handleRight, handleGoBack, formMode}) => {

    let inputClass
    let labelClass
    console.log("formMode : ", formMode)
    switch (formMode) {
        
        case 'select':
            inputClass='phone-input-area-hide '
            labelClass='phone-label-area '
            break;
        case 'insert':
        case 'update':
            inputClass='phone-input-area '
            labelClass='phone-label-area-hide'
            break;
        default : 
        inputClass='phone-input-area'
        labelClass='phone-label-area-hide'
    }

    return(
        <div>
            PhoneForm
            <Header 
                id ={id}
                handleLeftBtn={handleGoBack} 
                handleRightBtn={handleRight}
                formMode={formMode} 
            />


            <div className={inputClass}>
                <input className="phone-input" name="name" placeholder="name" onChange={handleChange} value={name}/>
                <input className="phone-input" name="number" placeholder="number" onChange={handleChange} value={number}/>
                
            </div>

            <div className={labelClass} >
                <div className="phone-label">{name}</div>
                <div className="phone-label">{number}</div>
            </div>

            {/* <div onClick={handleInsert}>
                <Link to="/phonebook/">저장하기</Link>
            </div> */}
            
        </div>
    )
}

export default PhoneForm;