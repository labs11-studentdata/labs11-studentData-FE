import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function OnBoardingCard(props) {
  
   
  return (
      <Card onClick={() => props.userTypeSelected(props.title)}className="onboarding-card">
        <CardContent>
          <img src={props.icon} alt={props.iconDesription} />
          <Typography component="h5">
            I am a {props.title}
          </Typography>
          <Typography component="p">
            {props.subnames}
          </Typography>
        </CardContent>
      </Card>
  );
}

export default OnBoardingCard;