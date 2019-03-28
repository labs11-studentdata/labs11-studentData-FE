import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

//import { DeleteStudent } from '../components';

class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          students: [],
        };   
    }

    componentDidMount() {

        axios.get(`${process.env.REACT_APP_BE_URL}/api/students`)
          .then(res => {
            this.setState({
              students: res.data
            })
          })
          .catch(err => console.log(err))

      }
      
    render() {
  
      console.log(this.state)
        return (
          
			<div>

                <Link to={`/add`}>
                    <Button>Add Student</Button>
                </Link>

			</div>

        )
    }
}

export default AdminDashboard;