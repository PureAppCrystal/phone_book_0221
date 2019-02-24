import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as phoneActions from 'modules/phonebook'
import PhoneList from '../components/phonebook/PhoneList';
import Header from '../components/phonebook/Header';
import Search from '../components/phonebook/Search';
import PhoneForm from '../components/phonebook/PhoneForm';
import queryString from 'query-string'

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
        PhoneActions.change({'name': '', 'number': ''})
    }

    handleRemove = (id) => {
        console.log("====== phonebook/Remove ======")
        const { PhoneActions } = this.props
        PhoneActions.remove({'id': id})
    }

    handleClick = (e) => {
        console.log("====== phonebook/Click ======")

    }

    handleGoBack = () => {
        console.log("====== phonebook/GoBack ======")
        const { history } = this.props;
        history.goBack();
    }

    
    handleSearch = (e) => {
        console.log("====== phonebook/Search ======")
        console.log("e : ", e.target.value)
        const { PhoneActions } = this.props
        PhoneActions.search({'name': e.target.value})
    }

    handleGotoUpdate = (e) => {
        console.log("====== phonebook/GotoUpdate ======")
        const { phoneList } = this.props
        const selectedId = (queryString.parse(this.props.location.search)).id;
        
        const phone = new Map((phoneList.filter( phoneList => (
            (phoneList.get('id')).toString() === selectedId //  
        )).get(0)))

        const { PhoneActions } = this.props;
        PhoneActions.change({'name': phone.get('name'), 'number': phone.get('number')})
    }

    handleUpdate = (e) => {
        console.log("====== phonebook/Update ======")
        const { PhoneActions } = this.props
        const { name, number } = this.props
        const selectedId = (queryString.parse(this.props.location.search)).id;
        PhoneActions.update({'id': selectedId, 'name': name, 'number': number})
        PhoneActions.change({'name': '', 'number': ''})
    }

    

    render() {
        const {id, name, number, phoneList, searchState, searchList, match, location } = this.props;
        const { 
            handleInsert, 
            handleRemove, 
            handleClick,
            handleGoBack,
            handleSearch,
            handleChange,
            handleUpdate,
            handleGotoUpdate } = this;

            console.log("match : ", match)

            

        /////////////////////////// 연락처 등록하기 target : insert
        if (match.params.target === 'insert') {
            return(
                <PhoneForm 
                    name={name} 
                    number={number}
                    handleChange={handleChange}
                    handleRight={handleInsert}
                    handleGoBack={handleGoBack}
                    formMode='insert'
                />
            )
        } 
        /////////////////////////// 연락처 선택하기 target : select
        else if (match.params.target === 'select') {
            console.log("1")
            const selectedId = (queryString.parse(location.search)).id;
           
            console.log("2")
            const phone = new Map((phoneList.filter( phoneList => (
                (phoneList.get('id')).toString() === selectedId //  
            )).get(0)))

            console.log("3")
            return(
                <PhoneForm 
                    id={phone.get('id')}
                    name={phone.get('name')} 
                    number={phone.get('number')}
                    handleChange={handleChange}
                    handleRight={handleGotoUpdate}
                    handleGoBack={handleGoBack}
                    formMode='select'
                />
            )
        } 
        /////////////////////////// 연락처 수정하기 target : update
        else if (match.params.target === 'update') {
            const selectedId = (queryString.parse(location.search)).id;
            //console.log('id : ', id)
           
            const phone = new Map((phoneList.filter( phoneList => (
                (phoneList.get('id')).toString() === selectedId //  
            )).get(0)))


            
            const {name, number} = this.props



            return(
                <PhoneForm 
                    id={phone.get('id')}
                    name={name} 
                    number={number}
                    handleChange={handleChange}
                    handleRight={handleUpdate}
                    handleGoBack={handleGoBack}
                    formMode='update'
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
                    formMode='list'
                    handleLeftBtn={handleGoBack}
                    
                    
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
