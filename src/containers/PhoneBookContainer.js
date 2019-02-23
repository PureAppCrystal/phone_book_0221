import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as phoneActions from 'modules/phonebook'
import { Link, Route } from 'react-router-dom';
import PhoneList from '../components/phonebook/PhoneList';
import Header from '../components/phonebook/Header';
import Search from '../components/phonebook/Search';
import PhoneForm from '../components/phonebook/PhoneForm';
import { withRouter } from 'react-router-dom';

class PhoneBookContainer extends Component {
    
    constructor(props) {
        super(props);

        console.log("props : ", props)
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
        PhoneActions.change({['name']: '', ['number']: ''})
    }

    handleRemove = (id) => {
        console.log("====== phonebook/Remove ======")
        const { PhoneActions } = this.props
        PhoneActions.remove({['id']: id})
    }

    handleClick = (e) => {
        console.log("====== phonebook/Click ======")
    }

    handleGoBack = () => {
        console.log("====== phonebook/GoBack ======")
        const { history } = this.props;
        history.goBack();
    }

    handleMoveInsert = () => {
        console.log("====== phonebook/MoveInsert ======")
        const { match, history } = this.props;
        //<Route path={`${match.url}/:id`} component={PhoneForm}/>
        
    }

    handleSearch = (e) => {
        console.log("====== phonebook/Search ======")
        console.log("e : ", e.target.value)
        const { PhoneActions } = this.props
        PhoneActions.search({['name']: e.target.value})
    }

    

    render() {
        const {id, name, number, phoneList, searchState, searchList, match, history } = this.props;
        const { 
            handleInsert, 
            handleRemove, 
            handleClick,
            handleMoveInsert,
            handleGoBack,
            handleSearch,
            handleChange } = this;


        // 연락처 등록하기 target : insert
        if (match.params.target === 'insert') {
            return(
                <PhoneForm 
                    name={name} 
                    number={number}
                    handleChange={handleChange}
                    handleInsert={handleInsert}
                    handleGoBack={handleGoBack}
                />
            )
        }
            

        return (
            

            <div>
                
                PhoneBookContainer
                id: {id}
                연락처 갯수 {phoneList.size}
                {/* <button onClick={this.handleInsert}  >등록 테스트 </button>
                <button onClick={this.handleRemove}>삭제 테스트 </button>
                <input name="name" placeholder="name" onChange={this.handleChange} value={name}/>
                <input name="number" placeholder="number" onChange={this.handleChange} value={number}/> */}

                {/* 뒤로가기, 헤더, 추가 */}
                <Header 
                    title='연락처'
                    handleLeftBtn={handleGoBack}
                    handleRightBtn={handleMoveInsert}
                    history={history}
                />
                {/* 검색창 */}
                <Search
                    handleSearch={handleSearch}
                />
                {/* 목록 */}
                <PhoneList 
                    phoneList={ searchState ? searchList : phoneList} 
                    handleClick={handleClick}
                    handleRemove={handleRemove}
                />


                {/* <Route exact path="/phonebook/insert" component={PhoneForm}/> */}
                
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
