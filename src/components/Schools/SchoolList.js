import React, { Component } from 'react';
import axios from 'axios'
const baseURL = process.env.REACT_APP_BE_URL

class SchoolList extends Component {

    componentDidMount () {
        axios.get(`${baseURL}/api/schools`)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
    render() {
        return (
            <h1>Connected</h1>
        )
    }
}

export default SchoolList;