import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PaymentComponent from '../PaymentComponent';
import "./SponsorAChild.css";

function SponsorChildComponent(props) {
  return (
    <>
      <h1>Select a child to sponsor!</h1>
      
      <div className='sponsorChildContainer'>
      <div className='paymentContainer'>
            {props.selectedStudent.hasOwnProperty('student_id') && (
              <p className='sponsoring'>Now sponsoring {`${props.selectedStudent.student_fname}`}</p>
            )}
            
            {/* {props.selectedStudent.hasOwnProperty('student_id') && <hr/>} */}
            <div className='container'>
            <PaymentComponent selectedStudent={props.selectedStudent}/>

            </div>
        </div>
        <div className="studentCardContainer">
          {props.students.map(student => (
            <Card key={student.student_id} className="studentCard">
              <CardActionArea>
                {/* ADD ONCLICK TO CARD AREA ACTION THAT WILL LOAD SINGLE CHILD VIEW */}
                <CardMedia
                  className=""
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  background-size="cover"
                  src={`${student.img}`}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {`${student.student_fname} ${student.student_lname} `}
                  </Typography>
                  <Typography component="p" />
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button onClick={e => props.sponsorSelected(e, student)} size="small" color="primary">
                  Sponsor
                </Button>
                <Typography gutterBottom color="secondary" component="p">
                  <p className="totalDueLabel"> Total Due: </p>
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
