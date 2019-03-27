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

class AddVisit extends React.Component {
  state = {
    date: "",
    note: ""
  };

  eHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

    //I need to rewrite the post request with the social worker and school id that i can get from the auth and page this component will go in.

  submitForm = => {
      axios.post("http://18.188.246.0:9000/api/social_worker_visits", { state.date, state.note })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err.message)
        })
      this.setState({ date: "", note: "" });
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
};

export default AddVisit;