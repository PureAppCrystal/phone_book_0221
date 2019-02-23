import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as phoneActions from 'modules/phonebook'
import { Link, Route } from 'react-router-dom';
import PhoneList from '../components/phonebook/PhoneList';
import Header from '../components/phonebook/Header';
import Search from '../components/phonebook/Search';
import PhoneForm from '../components/phonebook/PhoneForm';

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
    }

    handleMoveInsert = () => {
        console.log("====== phonebook/MoveInsert ======")
        const { match } = this.props;
        //<Route path={`${match.url}/:id`} component={PhoneForm}/>
    }

    handleSearch = (e) => {
        console.log("====== phonebook/Search ======")
        console.log("e : ", e.target.value)
        const { PhoneActions } = this.props
        PhoneActions.search({['name']: e.target.value})
    }

    

    render() {
        const {id, name, number, phoneList, searchState, searchList } = this.props;
        const { 
            handleInsert, 
            handleRemove, 
            handleClick,
            handleMoveInsert,
            handleGoBack,
            handleSearch } = this;


            


            // <Route exact path="/phonebook/insert" render={() => (
            //     <PhoneForm 
            //         name={this.props.name} 
            //         number={number}
            //         handleInsert={handleInsert}
            //         handleGoBack={handleGoBack}
            //     />
            // )}/>



        return (
            
            <div>
                PhoneBookContainer
                {id}
                <button onClick={this.handleInsert}  >등록 테스트 </button>
                <button onClick={this.handleRemove}>삭제 테스트 </button>
                <input name="name" placeholder="name" onChange={this.handleChange} value={name}/>
                <input name="number" placeholder="number" onChange={this.handleChange} value={number}/>

                {/* 뒤로가기, 헤더, 추가 */}
                <Header 
                    title='연락처'
                    handleLeftBtn={handleGoBack}
                    handleRightBtn={handleMoveInsert}
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
