import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class AddVisit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: [],
      date: "",
      notes: "",
      schoolID: "",
      warningText: ""
    };
  }
  
  componentDidMount() {
      axios.get(`${process.env.REACT_APP_BE_URL}/api/schools`)
        .then(res => {
            this.setState({schools: res.data})
        })
        .catch(err => {
            console.log(err.message)
        })
  }

  eHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

    //I need to rewrite the post request with the social worker and school id that i can get from the auth and page this component will go in.

  submitForm = e => {
      let visit = {
        visit_date: this.state.date,
        notes: this.state.notes,
        schoolID: this.state.schoolID,
        userID: this.props.userID
      }
    //   console.log(visit)
      if (!visit.visit_date || !visit.notes || !visit.schoolID) {
          this.setState({warningText: "Please Makes sure all fields are filled out"})
      } else {
        this.props.addVisit(visit)
      }
  }

  handleChange = name => e => {
    e.preventDefault();
    this.setState({ [name]: e.target.value });
    // console.log('pow');
  };

    render() {
        return(
            <Card>
                <CardContent>
                    <div className="visit-header">
                        <TextField
                            id="standard-with-placeholder" 
                            className="text date"
                            label="Date"
                            name="date"
                            onChange={this.eHandler}
                            placeholder="YYYY-MM-DD"
                            margin="normal"
                        />
                        <form>
                            <FormControl>
                                <InputLabel htmlFor="school-select">School</InputLabel>
                                <Select
                                className="school"
                                value={this.state.schoolID}
                                name='schoolID'
                                onChange={this.handleChange('schoolID')}
                                inputProps={{id: 'school-select'}}
                                >
                                {this.state.schools.map(school => {
                                    return <MenuItem value={school.schoolID}>{school.school_name}</MenuItem>
                                })}
                                </Select>
                            </FormControl>
                        </form>   
                    </div>
                    <div className="visit-body">
                        <TextField
                            id="standard-textarea"
                            className="text"
                            label="Add Visit Notes"
                            name="notes"
                            onChange={this.eHandler}
                            multiline
                            margin="normal"
                        />
                    </div>
                    <div className="visit-footer">
                        <span className="warning-text">{this.state.warningText}</span>
                        <Button variant="outlined" className="edit-btn" onClick={this.props.cancelAdd}>
                            Cancel
                        </Button>
                        <Button variant="outlined" className="edit-btn" onClick={this.submitForm}>
                            Add
                        </Button>
                    </div>
                </CardContent>
            </Card>
        )
    };
};

export default AddVisit;