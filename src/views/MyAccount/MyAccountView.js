import React , { Component } from 'react';
import MyAcccountForm from './MyAccountForm';

import { connect } from 'react-redux';
import axios from 'axios';

class MyAccountView extends Component {
    
    state= {
        user: {
            first_name: '',
            last_name: '', 
            photo_url: ''
        }
    }

    componentDidMount(){
        axios.get(`${process.env.REACT_APP_BE_URL}/api/users/${this.props.userID}`)
            .then(res => this.setState({
                ...this.state, 
                user: res.data.user
            }))
            .catch(err => console.log(err))
    }

    handleInputChange() {
        
    }

    render() {
        console.log('MyAcccount', this.state.user)
        return (
            <>
                <h1>Your Account!</h1>
                <MyAcccountForm user={this.state.user}  handleInputChange={this.handleInputChange}/>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        userID: state.login.user.user_id
    }
}

export default connect(mapStateToProps, {})(MyAccountView);