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

class TextFields extends React.Component {
  state = {
    date: "",
    note: ""
  };

  eHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = => {
      axios.post("", { state.date, state.note })
        .then(res => {
            console.log(res.data)
        })
        .catch()
  }

  render() {
    const { classes } = this.props;

    <TextField
          id="standard-with-placeholder"
          label="Date"
          name="date"
          onChange={eHandler}
          placeholder="MM/DD/YYYY"
          className={classes.textField}
          margin="normal"
        />

    <TextField
          id="standard-textarea"
          label="Add Visit Notes"
          name="note"
          onChange={eHandler}
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