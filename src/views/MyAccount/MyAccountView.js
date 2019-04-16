import React , { Component } from 'react';
import MyAcccountForm from './MyAccountForm';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { connect } from 'react-redux';
import axios from 'axios';
import './MyAccount.css'

class MyAccountView extends Component {
    
    state= {
        user: {
            first_name: '',
            last_name: '', 
            photo_url: '',
            email: ''
        }, 
        userUpdated: false
    }

    componentDidMount(){
        axios.get(`${process.env.REACT_APP_BE_URL}/api/users/${this.props.userID}`)
            .then(res => this.setState({
                ...this.state, 
                user: res.data.user
            }))
            .catch(err => console.log(err))
    }
     handleInputChange = e => {
         this.setState({
             ...this.state,
             user: {
                 ...this.state.user,
                 [e.target.name]: e.target.value
             }
         })
     }
  // Image Upload Handler
  
  fileSelectHandler = event => {
    console.log(event.target.files[0]);
    
    const selectedFile = event.target.files[0];

    const fd = new FormData();
    fd.append('userImage', selectedFile, selectedFile.name);
  
    axios.post(process.env.REACT_APP_BE_URL + '/api/uploads', fd)
        .then(response => {
            this.setState({
            ...this.state, 
  
            user: {
              ...this.state.user,
              photo_url: `${process.env.REACT_APP_BE_URL}/${response.data}` 
            }
          
          });
  
        })
        .catch(e => {
        console.log("server error:", e.message);
      })
  }

  updateUser = (e) => {
      e.preventDefault();
    axios.put(`${process.env.REACT_APP_BE_URL}/api/users/${this.props.userID}`, this.state.user)
        .then(res => this.setState({
            ...this.state,
            userUpdated: true
        }))
        .catch(err => console.lof(err))
  }
    render() {
        return (
            <div className='myAccountContainer'>
                <h1>Edit Your Account!</h1>
                <MyAcccountForm user={this.state.user}  fileSelectHandler={this.fileSelectHandler} updateUser={this.updateUser} handleInputChange={this.handleInputChange}/>
                <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.userUpdated}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <SnackbarContent
                    autoHideDuration={6000}

                    style={{height: "100px", textAlign: "center"}}

      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar">
        User Updated
        </span>
      }
    />
        </Snackbar>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userID: state.login.user.user_id
    }
}

export default connect(mapStateToProps, {})(MyAccountView);