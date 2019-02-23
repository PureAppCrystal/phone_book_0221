import React from 'react';
import Header from './Header';


const PhoneForm =({name, number, handleChange, handleInsert, handleGoBack, history}) => {
    return(
        <div>
            PhoneForm
            <Header title='새로운 연락처' handleLeftBtn={handleGoBack} history={history} />
            <div>
                <input name="name" placeholder="name" onChange={handleChange} value={name}/>
                <input name="number" placeholder="number" onChange={handleChange} value={number}/>
            </div>
            <div onClick={handleInsert}>
                저장하기
            </div>
            
        </div>
    )
}

export default PhoneForm;