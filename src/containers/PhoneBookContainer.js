import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as phoneActions from 'modules/phonebook'

class PhoneBookContainer extends Component {
    
    constructor() {
        super();

    }

    handleInsert = () => {
        console.log(" ====== handleInsert ======")
        const {id, name, number, PhoneActions } = this.props
        PhoneActions.insert({id, name, number});
    }

    render() {
        const {id, name, number } = this.props;
        const { handleInsert } = this.props;
        return (
            <div>
                PhoneBookContainer
                {id}
                <button onClick={this.handleInsert} >등록 테스트 </button>
            </div>
            
        )
    }
} 


export default connect(
    (state) => ({
        id: state.phonebook.id,
        name: state.phonebook.name,
        number: state.phonebook.number,
        phoneList: state.phonebook.phoneList,
        searchState : state.phonebook.searchState,
        searchList: state.phonebook.searchList
    }),
    (dispatch) => ({
        PhoneActions: bindActionCreators(phoneActions, dispatch)

    })
)(PhoneBookContainer);
