import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class UpdateVisit extends React.Component {
  constructor(props) {
    super(props);
    state = {
      date: "",
      notes: ""
    };
  }
  
  componentDidMount() {
    this.setState({date: this.props.visit.visit_date, notes: this.props.visit.notes})
  }

  eHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  submitForm = e => {
    const id = this.props.visit.id;
    
    let visit = this.props.visit;
    visit.visit_date = this.state.date;
    visit.notes = this.state.notes;

    axios.put(`${process.env.REACT_APP_BE_URL}/api/social_worker_visits/${id}`, { visit })
      .then(res => {
          console.log(res.data)
      })
      .catch(err => {
          console.log(err.message)
      })
  }

  render() {
    return(
      <div>
        <TextField
              id="standard-with-placeholder"
              label="Edit Date"
              name="date"
              onChange={this.eHandler}
              value={this.state.date}
              placeholder="YYYY-MM-DD"
              margin="normal"
            />

        <TextField
              id="standard-textarea"
              label="Edit Visit Notes"
              name="notes"
              onChange={this.eHandler}
              value={this.state.notes}
              multiline
              margin="normal"
            />
        <Button 
        onClick={this.submitForm}
        >
        Submit
        </Button>
      </div>
    )
  };
};

export default UpdateVisit;