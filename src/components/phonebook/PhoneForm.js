import React, { Component} from 'react';
import Header from './Header';
import './PhoneForm.css'


//const PhoneForm =({id, name, number, handleChange, handleRight, handleGoBack, formMode}) => {
class PhoneForm extends Component {

    constructor(prop) {
        super();

        console.log("PHoneForm props : ", prop)

    }

    componentWillUnmount =() => {
        console.log("====== phonebook/PhoneForm-willUnmount() ======")
        const {handleFormReset} = this.props
        handleFormReset();
    }

    render() {

        const {id, name, number, handleChange, handleRight, handleGoBack, formMode} = this.props

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
                <Header 
                    id ={id}
                    handleLeftBtn={handleGoBack} 
                    handleRightBtn={handleRight}
                    formMode={formMode} 
                />


                <div className={inputClass}>
                    <input className="phone-input" name="name" placeholder="이름" onChange={handleChange} value={name}/>
                    <input className="phone-input" name="number" placeholder="번호" onChange={handleChange} value={number}/>
                    
                </div>

                <div className={labelClass} >
                    이름     <div className="phone-label">{name}</div>
                    휴대전화 <div className="phone-label form-number">{number}</div>
                </div>

                {/* <div onClick={handleInsert}>
                    <Link to="/phonebook/">저장하기</Link>
                </div> */}
                
            </div>
        )
    }
    
}

export default PhoneForm;