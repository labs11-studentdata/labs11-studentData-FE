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
import SponsorChildCard from './SponsorChildCard';

import { withStyles } from '@material-ui/core/styles';
import "./SponsorAChild.css";

const styles = theme => ({
  scContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  heading: {
    margin: 30,
  },
})

const SponsorChildComponent = props => {
    const {classes} = props;
    return (
      <>
        {/* <h1>Select a child to sponsor!</h1> */}
        <Typography className={classes.heading} variant="h4">Select a child to sponsor!</Typography>
        
        {/* <div className='sponsorChildContainer'> */}
        <div>
          <div className={props.classes.scContainer}>
            {props.students.map(student => (
              <SponsorChildCard key={student.studentID} student={student} userID={props.userID}/>
            ))}
          </div>
        </div>
      </>
    );
}


export default withStyles(styles)(SponsorChildComponent);
