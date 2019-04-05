import React from "react";
import { Link } from 'react-router-dom';

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {Elements, StripeProvider} from 'react-stripe-elements';
import StripeComponent from '../Stripe/StripeComponent';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';

import "./SponsorAChild.css";

function SponsorChildComponent(props) {
  return (
    <>
      <h1>Select a child to sponsor!</h1>
      
      <div className='sponsorChildContainer'>
      <div className='paymentContainer'>
          <Paper>
            {/* {props.selectedStudent.hasOwnProperty('student_id') && <hr/>} */}
            <div className='container'>
            <Dialog
              open={props.open}
              onClose={props.handleClose}
            >
              <StripeProvider apiKey="pk_test_arXBQTpudOCQ9XCjo20KlKbh00piO3nLbb">
                <div className="example" style={{width: '400px', height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <Elements>
                    <StripeComponent student={props.student} user_id={props.user_id}/>
                  </Elements>
                </div>
              </StripeProvider>       
            </Dialog>
            </div>
          </Paper> 
        </div>
        <div className="studentCardContainer">
          {props.students.map(student => (
            <Card key={student.student_id} className="studentCard">
              
              <Link to={`/student/${student.student_id}`}>

              <CardActionArea>
                {/* ADD ONCLICK TO CARD AREA ACTION THAT WILL LOAD SINGLE CHILD VIEW */}
                
                <CardMedia
                  className=""
                  component="img"
                  alt={`Photo of ${student.first_name} ${student.last_name}`}
                  height="140"
                  background-size="cover"
                  src={`${student.photo_url}`}
                  title={`Photo of ${student.first_name} ${student.last_name}`}
                />                
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {`${student.first_name} ${student.last_name} `}
                  </Typography>
                  <Typography component="p" />
                </CardContent>
              </CardActionArea>
              </Link>
              <CardActions>
                <Button onClick={e => props.handleOpen(e, student)} size="small" color="primary">
                  Sponsor
                </Button>
                <div className="totalDueLabel"> Total Due: </div>
                <Typography gutterBottom color="secondary" component="p">
                  {`${student.dues}`}
                </Typography>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default SponsorChildComponent;
