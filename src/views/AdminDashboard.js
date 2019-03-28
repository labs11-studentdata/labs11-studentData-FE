import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//import { DeleteStudent } from '../components';

class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          students: [],
        };   
    }

    componentDidMount() {

        axios.get(`${process.env.REACT_APP_BE_URL}/api/students`)
          .then(res => {
            this.setState({
              students: res.data
            })
          })
          .catch(err => console.log(err))

      }
      
    render() {
  
      console.log(this.state)
        return (
        <div>

          <div>

            <Link to={`/add`}>
              <Button>Add Student</Button>
            </Link>

          </div>

            <div className="studentCardContainer">

            {this.state.students.map(student => (
              <Card key={student.student_id}>
                
                <Link to={`/student/${student.student_id}`}>

                <CardActionArea>
                  
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
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                  <div> Status: </div>
                  <Typography gutterBottom color="secondary" component="p">
                    {`${student.enrollment_status}`}
                  </Typography>
                </CardActions>

              </Card>
            ))}

          </div>

        </div>
      )
    }
}

export default AdminDashboard;