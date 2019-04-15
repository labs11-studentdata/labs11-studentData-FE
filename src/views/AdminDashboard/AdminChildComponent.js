import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import Button from "@material-ui/core/Button";
// import EditChildModal from "../../components/StudentView/EditStudentModal";
import EditStudentModal from "../../components/StudentView/EditStudentModal";
// import moment from 'moment';
function AdminChildComponent(props) {
  return (
    <div className="donation-list-container"style={{ textAlign: "center", overflowY: "scroll", height: "400px" }}>
      <Table className="donation-list" >
        <TableHead>
          <TableRow>
            <TableCell style={{padding: '0px 0px 0px 10px', width: '15%'}}>Student Name</TableCell>
            <TableCell align='center' style={{padding: '0px', width: '5%'}}>Age</TableCell>
            <TableCell align='center' style={{padding: '0px', width: '5%'}}>Grade</TableCell>
            <TableCell align='center' style={{padding: '0px', width: '7.5%'}}>Insurance</TableCell>
            <TableCell align='center' style={{padding: '0px', width: '7.5%'}}>Birth Cert</TableCell>
            <TableCell align='center' style={{padding: '0px', width: '15%'}}>Insurance Expiration</TableCell>
            <TableCell align='center' style={{padding: '0px', width: '10%'}}>Special Ed</TableCell>

            <TableCell align='center' style={{padding: '0px', width: '15%'}}>Dues</TableCell>

            <TableCell align='center' style={{padding: '0px', width: '10%'}}>Edit Student</TableCell>
          </TableRow>
        </TableHead>

        <TableBody
          
        >
          {props.students.map(student => {
            // console.log(student)
            return (
              <TableRow>
                <TableCell style={{padding: '0px 0px 0px 10px', width: '15%'}}>{`${student.first_name} ${
                  student.last_name
                }`}</TableCell>
                <TableCell align='center' style={{padding: '0px', width: '5%'}}>{student.age}</TableCell>
                <TableCell align='center' style={{padding: '0px', width: '5%'}}>{student.grade}</TableCell>
                <TableCell align='center' style={{padding: '0px', width: '7.5%'}}>{`${student.has_insurance === 1 ? "Y" : "N"}`}</TableCell>
                <TableCell align='center' style={{padding: '0px', width: '7.5%'}}>{`${student.has_birthcert === 1 ? "Y" : "N"}`}</TableCell>
                  <TableCell align='center' style={{padding: '0px', width: '15%'}}>{student.insurance_expiration}</TableCell>

                  <TableCell align='center' style={{padding: '0px', width: '10%'}}>{student.special_needs === 1 ? "Y" : "N"}</TableCell>
                  
                <TableCell align='center' style={{ color: "red", padding: '0px', width: '10%' }}>${student.dues}</TableCell>
                <TableCell align='center' style={{padding: '0px', width: '10%'}}>
                  <EditStudentModal student={student}/>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
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
