import React, { Component } from 'react';
import axios from 'axios';

class StudentView extends Component {
    constructor(props) {
        super(props);
        this.state = {
          student: {},
          id: null,
        };   
    }

    componentDidMount() {
      
			const id = this.props.match.params.id;

      axios.get(`http://18.188.246.0:9000/api/students/${id}`)
        .then(res => {
          this.setState({
            student: res.data
          })
        })
        .catch(err => console.log(err))
    }

    render() {
      console.log(this.state)
        return (
        
					<div>
						{this.state.student.firstName}
						{this.state.student.lastName}
					</div>

        )
    }
}

export default StudentView;