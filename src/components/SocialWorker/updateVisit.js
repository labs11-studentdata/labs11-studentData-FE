import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class UpdateVisit extends React.Component {
  state = {
    date: "",
    note: ""
  };

  componentDidMount() {
      const arr = props.params.match(/\d+$/);
      const id = arr[0];
      axios.get(`http://18.188.246.0:9000/api/social_worker_visits/${id}`)
        .then(res => {
            console.log(res.data);
            this.setState({date: {res.data.date}, note: {res.data.note}})
            console.log(this.state);
        })
  }

  eHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

    //I need to rewrite the post request with the social worker and school id that i can get from the auth and page this component will go in.

  submitForm = => {
      const arr = props.params.match(/\d+$/);
      const id = arr[0];
      axios.put(`http://18.188.246.0:9000/api/social_worker_visits/${id}`, { state.date, state.note })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err.message)
        })
  }

  render() {
    const { classes } = this.props;

    <TextField
          id="standard-with-placeholder"
          label="Edit Date"
          name="date"
          onChange={eHandler}
          value={this.state.date}
          placeholder="MM/DD/YYYY"
          className={classes.textField}
          margin="normal"
        />

    <TextField
          id="standard-textarea"
          label="Edit Visit Notes"
          name="note"
          onChange={eHandler}
          value={this.state.note}
          multiline
          className={classes.textField}
          margin="normal"
        />
    <Button 
    className={classes.button}
    onClick={submitForm}
    >
    Submit
    </Button>
  };
};

export default UpdateVisit;