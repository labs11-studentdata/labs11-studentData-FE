import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
// import classes from '*.module.css';

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
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class SchoolSelect extends Component {
  constructor(props) {
    super(props);
    //the component state here is set to track school and/or grade ID in order to pass it to the parent
    //the userType you pass it should be(as of now) board_member, 
    this.state = {
      schoolID: '',
      gradeID: '',
      // userType: props.userType
    }
  }


  handleChange = name => e => {
    e.preventDefault();
    this.setState({ [name]: e.target.value });
    console.log('pow');
  };


  //this is the simpler version, we'll stick with it for now
  render(){
    const {classes} = this.props;
    return(
      <form onSubmit={e => this.props.setClass(e, this.state.schoolID, this.state.gradeID)}>
        <FormControl className={classes.formControl}>
        <InputLabel htmlFor="school-select">School</InputLabel>
          <Select
            value={this.state.schoolID}
            name='schoolID'
            onChange={this.handleChange('schoolID')}
            inputProps={{id: 'school-select'}}
          >
            <MenuItem value = 'all'>All</MenuItem>
            {this.props.schools.map(school => {
              return <MenuItem value={school.schoolID}>{school.school_name}</MenuItem>
            })}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-select">Grade</InputLabel>
          <Select
            value={this.state.gradeID}
            name='gradeID'
            onChange={this.handleChange('gradeID')}
            inputProps={{id: 'grade-select'}}
          >
            <MenuItem value = 'all'>All</MenuItem>
            <MenuItem value = {1} >1</MenuItem>
            <MenuItem value = {2} >2</MenuItem>
            <MenuItem value = {3} >3</MenuItem>
            <MenuItem value = {4} >4</MenuItem>
            <MenuItem value = {5} >5</MenuItem>
            <MenuItem value = {6} >6</MenuItem>
            <MenuItem value = {7} >7</MenuItem>
            <MenuItem value = {8} >8</MenuItem>
            <MenuItem value = {9} >9</MenuItem>
            <MenuItem value = {10} >10</MenuItem>
            <MenuItem value = {11} >11</MenuItem>
            <MenuItem value = {12} >12</MenuItem>
          </Select>
        </FormControl>
        <Button type='submit' color='primary'>filter</Button>
      </form>
    )
  }

  //this is the more complicated conditional version, for now we're not going to worry about it

  // render(){
  //   if(this.state.userType === 'board_member'){
  //     return(
  //       <form onSubmit={e => this.props.setClass(e, this.state.schoolID, this.state.gradeID)}>
  //         <FormControl>
  //           <Select
  //             value={this.state.schoolID}
  //             name='schoolID'
  //             onChange={this.handleChange('schoolID')}
  //           >
  //             <MenuItem value = 'all'>All</MenuItem>
  //             {this.props.schools.map(school => {
  //               return <MenuItem value={school.schoolID}>{school.school_name}</MenuItem>
  //             })}
  //           </Select>
  //         </FormControl>
  //         <FormControl>
  //           <Select
  //             value={this.state.gradeID}
  //             name='gradeID'
  //             onChange={this.handleChange('gradeID')}
  //           >
  //             <MenuItem value = 'all'>All</MenuItem>
  //             <MenuItem value = {1} >1</MenuItem>
  //             <MenuItem value = {2} >2</MenuItem>
  //             <MenuItem value = {3} >3</MenuItem>
  //             <MenuItem value = {4} >4</MenuItem>
  //             <MenuItem value = {5} >5</MenuItem>
  //             <MenuItem value = {6} >6</MenuItem>
  //             <MenuItem value = {7} >7</MenuItem>
  //             <MenuItem value = {8} >8</MenuItem>
  //             <MenuItem value = {9} >9</MenuItem>
  //             <MenuItem value = {10} >10</MenuItem>
  //             <MenuItem value = {11} >11</MenuItem>
  //             <MenuItem value = {12} >12</MenuItem>
  //           </Select>
  //         </FormControl>
  //         <button type='submit'>filter</button>
  //       </form>      
  //     )
  //   }
  //   else if (this.state.userType === 'admin') {
  //     return(
  //       //you'll need a function in your parent component that filters based on the gradeID it gets
  //       //you can check BoardView.js for reference, yours should probably be less complicated
  //       <form onSubmit={e => this.props.setGrade(e, this.state.gradeID)}>
  //         <FormControl>
  //           <Select
  //             value={this.state.gradeID}
  //             name='gradeID'
  //             onChange={this.handleChange('gradeID')}
  //           >
  //             <MenuItem value = 'all'>All</MenuItem>
  //             <MenuItem value = {1} >1</MenuItem>
  //             <MenuItem value = {2} >2</MenuItem>
  //             <MenuItem value = {3} >3</MenuItem>
  //             <MenuItem value = {4} >4</MenuItem>
  //             <MenuItem value = {5} >5</MenuItem>
  //             <MenuItem value = {6} >6</MenuItem>
  //             <MenuItem value = {7} >7</MenuItem>
  //             <MenuItem value = {8} >8</MenuItem>
  //             <MenuItem value = {9} >9</MenuItem>
  //             <MenuItem value = {10} >10</MenuItem>
  //             <MenuItem value = {11} >11</MenuItem>
  //             <MenuItem value = {12} >12</MenuItem>
  //           </Select>
  //         </FormControl>
  //         <button type='submit'>filter</button>
  //       </form>      
  //     )
  //   }
  //   else if(this.state.userType === 'social_worker') {
  //       //you'll need a function in your parent component that filters based on the schoolID it gets
  //       //you can check BoardView.js for reference, yours should probably be less complicated
  //     return (        
  //       <form onSubmit={e => this.props.setSchool(e, this.state.schoolID)}>
  //         <FormControl>
  //           <Select
  //             value={this.state.schoolID}
  //             name='schoolID'
  //             onChange={this.handleChange('schoolID')}
  //           >
  //             <MenuItem value = 'all'>All</MenuItem>
  //             {this.props.schools.map(school => {
  //               return <MenuItem value={school.schoolID}>{school.school_name}</MenuItem>
  //             })}
  //           </Select>
  //         </FormControl>
  //         <button type='submit'>filter</button>
  //       </form>
  //     )
  //   }
  // }
}

export default withStyles(styles)(SchoolSelect);