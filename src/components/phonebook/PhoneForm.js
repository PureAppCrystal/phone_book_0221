import React from 'react';
import Header from './Header';


const PhoneForm =({name, number, handleChange}) => {
    return(
        <div>
            PhoneForm
            <Header title='새로운 연락처' />
            <div>
                <input name="name" placeholder="name" onChange={this.handleChange} value={name}/>
                <input name="number" placeholder="number" onChange={this.handleChange} value={number}/>
            </div>
            
        </div>
    )
}

export default PhoneForm;