import React from "react";
// import { Link } from 'react-router-dom';

import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {Elements, StripeProvider} from 'react-stripe-elements';
import StripeComponent from '../Stripe/StripeComponent';
// import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';

class SponsorChildCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      student: this.props.student,
      open: false,
    }
  }

  handleOpen = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      ...this.state,
      open: false,
    });
  };

  updateDues = update => {
    this.setState({
      ...this.state,
      student: update
    })
  }

  render(){
    return (
      <>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
        >
          <StripeProvider apiKey="pk_test_arXBQTpudOCQ9XCjo20KlKbh00piO3nLbb">
            <div className="example" style={{width: '400px', height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Elements>
                <StripeComponent student={this.props.student} userID={this.props.userID} handleClose={this.handleClose} updateDues={this.updateDues}/>
              </Elements>
            </div>
          </StripeProvider>       
        </Dialog>
        <Card key={this.state.student.studentID} className="studentCard">

          {/* <CardActionArea> */}
            {/* ADD ONCLICK TO CARD AREA ACTION THAT WILL LOAD SINGLE CHILD VIEW */}
            
            <CardMedia
              className=""
              component="img"
              alt={`Photo of ${this.state.student.first_name} ${this.state.student.last_name}`}
              height="140"
              background-size="cover"
              src={`${this.state.student.photo_url}`}
              title={`Photo of ${this.state.student.first_name} ${this.state.student.last_name}`}
            />                
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {`${this.state.student.first_name} ${this.state.student.last_name} `}
              </Typography>
              <Typography component="p" />
              <Typography gutterBottom color="secondary" component="p">
                Total Due: ${`${this.state.student.dues}`}
              </Typography>
            </CardContent>
          {/* </CardActionArea> */}

          <CardActions>


            <Button variant='outlined' onClick={e => this.handleOpen(e)} size="small" color="primary"
              style={{width: '50%', margin: '0% 25%'}}
            >
              Sponsor
            </Button>
            <div className="totalDueLabel"> </div>
          </CardActions>
        </Card>
      </>
    );
  }
}

export default SponsorChildCard;