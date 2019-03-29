import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AddVisit extends React.Component {
  state = {
    date: "",
    note: ""
  };

  eHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

    //I need to rewrite the post request with the social worker and school id that i can get from the auth and page this component will go in.

  submitForm = e => {
      let visit = {
        date: this.state.date,
        note: this.state.note
      }
      axios.post(`${process.env.REACT_APP_BE_URL}/api/social_worker_visits`, {visit})
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err.message)
        })
      this.setState({ date: "", note: "" });
  }

  render() {
    return(
    <div>
      <TextField
            id="standard-with-placeholder"
            label="Date"
            name="date"
            onChange={this.eHandler}
            placeholder="MM/DD/YYYY"
            margin="normal"
          />

      <TextField
            id="standard-textarea"
            label="Add Visit Notes"
            name="note"
            onChange={this.eHandler}
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

export default AddVisit;