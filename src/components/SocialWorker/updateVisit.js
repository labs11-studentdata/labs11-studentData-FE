import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class UpdateVisit extends React.Component {
  state = {
    date: "",
    note: ""
  };

  componentDidMount() {
      const arr = this.props.params.match(/\d+$/);
      const id = arr[0];
      axios.get(`http://18.188.246.0:9000/api/social_worker_visits/${id}`)
        .then(res => {
            console.log(res.data);
            this.setState({ date: res.data.date, note: res.data.note })
            console.log(this.state);
        })
  }

  eHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

    //I need to rewrite the post request with the social worker and school id that i can get from the auth and page this component will go in.

  submitForm = e => {
      const arr = this.props.params.match(/\d+$/);
      const id = arr[0];
      let visit = {
        date: this.state.date,
        note: this.state.note
      }
      axios.put(`http://18.188.246.0:9000/api/social_worker_visits/${id}`, { visit })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err.message)
        })
  }

  render() {
    const { classes } = this.props;
    return(
      <div>
        <TextField
              id="standard-with-placeholder"
              label="Edit Date"
              name="date"
              onChange={this.eHandler}
              value={this.state.date}
              placeholder="MM/DD/YYYY"
              className={classes.textField}
              margin="normal"
            />

        <TextField
              id="standard-textarea"
              label="Edit Visit Notes"
              name="note"
              onChange={this.eHandler}
              value={this.state.note}
              multiline
              className={classes.textField}
              margin="normal"
            />
        <Button 
        className={classes.button}
        onClick={this.submitForm}
        >
        Submit
        </Button>
      </div>
    )
  };
};

export default UpdateVisit;