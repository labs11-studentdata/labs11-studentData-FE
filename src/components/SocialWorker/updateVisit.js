import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class UpdateVisit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visit_date: "",
      notes: ""
    };
  }
  
  componentDidMount() {
    this.setState({visit_date: this.props.visit.visit_date, notes: this.props.visit.notes})
  }

  eHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  submitForm = e => {
    const id = this.props.visit.visitID;
    
    let changes = this.state

    // console.log(changes)

    axios.put(`${process.env.REACT_APP_BE_URL}/api/social_worker_visits/${id}`, changes)
      .then(res => {
          console.log(res.data)
      })
      .catch(err => {
          console.log(err.message)
      })

      this.props.cancelEdit()
  }

  render() {
    return(
      <div>
        <Card>
            <CardContent>
                <div className="visit-header">
                    <TextField
                      className="date"
                      id="standard-with-placeholder"
                      label="Visit Date"
                      name="visit_date"
                      onChange={this.eHandler}
                      value={this.state.visit_date}
                      placeholder="YYYY-MM-DD"
                      margin="normal"
                    />
                    <Typography className="school" color="textSecondary" gutterBottom>
                        School: {this.props.visit.school_name}
                    </Typography>
                </div>
                <div className="visit-body">
                  <TextField
                    className="text"
                    id="standard-textarea"
                    label="Edit Visit Notes"
                    name="notes"
                    onChange={this.eHandler}
                    value={this.state.notes}
                    multiline
                    margin="normal"
                  />
                </div>
                <div className="visit-footer">
                    <Button variant="outlined" className="edit-btn" onClick={this.props.cancelEdit}>
                        Cancel
                    </Button>
                    <Button variant="outlined" className="edit-btn" onClick={this.submitForm}>
                        Save
                    </Button>
                </div>
            </CardContent>
        </Card>
      </div>
    )
  };
};

export default UpdateVisit;