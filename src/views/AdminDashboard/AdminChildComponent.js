import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import EditChildModal from "../../components/StudentView/EditStudentModal";
import EditStudentModal from "../../components/StudentView/EditStudentModal";
import moment from 'moment';
function AdminChildComponent(props) {
  return (
    <Paper className="donation-list-container">
      <Table className="donation-list">
        <TableHead>
          <TableRow>
            <TableCell align="center">Student Name</TableCell>
            <TableCell align="center">Age</TableCell>
            <TableCell align="center">Grade</TableCell>
            <TableCell align="center">Insurance /<br/> Birth Cert.</TableCell>
            <TableCell align="center">Insurance Expiration</TableCell>
            <TableCell align="center">Special Needs</TableCell>

            <TableCell align="center">Dues</TableCell>

            <TableCell align="center">Edit Student</TableCell>
          </TableRow>
        </TableHead>

        <TableBody
          style={{ textAlign: "center", overflow: "auto", height: "250px" }}
        >
          {props.students.map(student => {
            console.log(student)
            return (
              <TableRow>
                <TableCell align="center">{`${student.first_name} ${
                  student.last_name
                }`}</TableCell>
                <TableCell align="center">{student.age}</TableCell>
                <TableCell align="center">{student.grade}</TableCell>
                <TableCell align="center">{`${student.has_birthcert === 1 ? "Y" : "N"}/${
                  student.has_insurance === 1 ? "Y" : "N"
                }`}</TableCell>
                  <TableCell align="center">{moment(student.insurance_expiration).format('l')}</TableCell>

                  <TableCell align="center">{student.special_needs === 1 ? "Y" : "N"}</TableCell>
                  
                <TableCell align="center" style={{ color: "red" }}>{`$${student.dues}`}</TableCell>
                <TableCell align="center">
                  <EditStudentModal student={student}/>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}
// function AdminChildComponent(props) {
//     return (
//         <div className="adminStudentCardContainer">
//         {props.students.map(student => (
//           <Card key={student.student_id} className="studentCard">

//             <Link to={`/student/${student.student_id}`}>

//             <CardActionArea>
//               {/* ADD ONCLICK TO CARD AREA ACTION THAT WILL LOAD SINGLE CHILD VIEW */}

//               <CardMedia
//                 className=""
//                 component="img"
//                 alt={`Photo of ${student.first_name} ${student.last_name}`}
//                 height="140"
//                 background-size="cover"
//                 src={`${student.photo_url}`}
//                 title={`Photo of ${student.first_name} ${student.last_name}`}
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="h2">
//                   {`${student.first_name} ${student.last_name} `}
//                 </Typography>
//                 <Typography component="p" />
//               </CardContent>
//             </CardActionArea>
//             </Link>
//             <CardActions>
//               <Button onClick={e => props.sponsorSelected(e, student)} size="small" color="primary">
//                 Sponsor
//               </Button>
//               <div className="totalDueLabel"> Total Due: </div>
//               <Typography gutterBottom color="secondary" component="p">
//                 {`${student.dues}`}
//               </Typography>
//             </CardActions>
//           </Card>
//         ))}
//       </div>
//     )
// }

export default AdminChildComponent;
