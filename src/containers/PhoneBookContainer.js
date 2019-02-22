import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as phoneActions from 'modules/phonebook'

class PhoneBookContainer extends Component {
    
    constructor() {
        super();

    }

    handleChange = (e) => {
        console.log("====== phonebook/Change ======")
        const { PhoneActions } = this.props
        PhoneActions.change({[e.target.name]: e.target.value})
    }

    handleInsert = () => {
        console.log("====== phonebook/Insert ======")
        const { id, name, number } = this.props
        const { PhoneActions } = this.props

        PhoneActions.insert({id, name, number});
    }

    handleRemove = (e) => {
        console.log("====== phonebook/Remove ======")
        const { PhoneActions } = this.props
        PhoneActions.remove(e)
    }

    render() {
        const {id, name, number } = this.props;
        const { handleInsert, handleRemove } = this.props;
        return (
            <div>
                PhoneBookContainer
                {id}
                <button onClick={this.handleInsert} >등록 테스트 </button>
                <button onClick={this.handleRemove} >삭제 테스트 </button>
                <input name="name" placeholder="name" onChange={this.handleChange}/>
                <input name="number" placeholder="number" onChange={this.handleChange}/>
            </div>
            
        )
    }
} 


export default connect(
    (state) => ({
        id: state.phonebook.get('id'),
        name: state.phonebook.get('name'),
        number: state.phonebook.get('number'),
        phoneList: state.phonebook.get('phoneList'),
        searchState : state.phonebook.get('searchState'),
        searchList: state.phonebook.get('searchList')
    }),
    (dispatch) => ({
        PhoneActions: bindActionCreators(phoneActions, dispatch)

    })
)(PhoneBookContainer);
