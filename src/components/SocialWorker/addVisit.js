import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AddVisit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      notes: "",
      school: ""
    };
  }
  

  eHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

    //I need to rewrite the post request with the social worker and school id that i can get from the auth and page this component will go in.

  submitForm = e => {
      let visit = {
        visit_date: this.state.date,
        notes: this.state.notes,
        school: ''
      }
      axios.post(`${process.env.REACT_APP_BE_URL}/api/social_worker_visits`, {visit})
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err.message)
        })
      this.setState({ date: "", notes: "", school: ""});
  }

    render() {
        return(
            <Card>
                <CardContent>
                    <div className="visit-header">
                        <TextField
                            id="standard-with-placeholder" 
                            className="text"
                            label="Date"
                            name="date"
                            onChange={this.eHandler}
                            placeholder="YYYY-MM-DD"
                            margin="normal"
                        />
                        {/* school search */}
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