import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { FormControl } from '@material-ui/core';
// const {schools, socialSchoolSelect} = props;
// // schoolSelect(schoolID)

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class BoardSocialSchoolSelect extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      schools: [],
    }
  }

  componentDidUpdate(){
    if(this.state.schools.length === 0 && this.props.schools.length !== 0){
      this.setState({
        ...this.state,
        schools: this.props.schools,
      });
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  render(){
    const { classes } = this.props
    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
        </FormControl>
      </form>
    )
  }
}

export default withStyles(styles)(BoardSocialSchoolSelect);
