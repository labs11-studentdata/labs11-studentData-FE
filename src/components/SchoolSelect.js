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

class SchoolSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolID: '',
      gradeID: '',

    }
  }


  handleChange = name => e => {
    e.preventDefault();
    this.setState({ [name]: e.target.value });
    console.log('pow');
  };


  render(){
    return(
      <form onSubmit={e => this.props.setClass(e, this.state.schoolID, this.state.gradeID)}>
        <FormControl>
          <Select
            value={this.state.schoolID}
            name='schoolID'
            onChange={this.handleChange('schoolID')}
          >
            <MenuItem value = 'all'>All</MenuItem>
            {this.props.schools.map(school => {
              return <MenuItem value={school.schoolID}>{school.school_name}</MenuItem>
            })}
          </Select>
        </FormControl>
        <FormControl>
          <Select
            value={this.state.gradeID}
            name='gradeID'
            onChange={this.handleChange('gradeID')}
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
        <button type='submit'>filter</button>
      </form>
    )
  }
}

export default SchoolSelect;