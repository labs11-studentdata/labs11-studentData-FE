import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function AdminSchoolListComp(props) {

  const formattedNumber = number => {
    number = number.toString();
    return ('('+ number.slice(0,3) + ') ' + number.slice(3,6)+ ' - ' + number.slice(6,10))
  }

    return (
      <>
        <div
         style={{ overflowY: "scroll", maxHeight: "400px", width: "100%" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell >Student Name</TableCell>
                <TableCell >Grade</TableCell>
                <TableCell >Emergency Contact</TableCell>
                <TableCell >Contact Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.students.map(student => (
                <TableRow key={student.id}>
                  <TableCell >{`${student.first_name} ${student.last_name}`}</TableCell>
                  <TableCell style={{paddingLeft: '35px'}}>{student.grade}</TableCell>
                  <TableCell >{`${student.contact_first_name} ${student.contact_last_name}`}</TableCell>
                  <TableCell style={{color: "#617D8B"}} >{formattedNumber(student.contact_number)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </>
    );
}


export default AdminSchoolListComp;
