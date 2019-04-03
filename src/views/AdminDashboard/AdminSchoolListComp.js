import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function AdminSchoolListComp(props) {
    return (
      <>
        <Paper
          style={{ overflowY: "scroll", maxheight: "300px", width: "100%" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Student Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell align="right">Grade</TableCell>
                <TableCell align="right">Has Insurance</TableCell>
                <TableCell align="right">Emergency Contact</TableCell>
                <TableCell align="right">Contact Number</TableCell>
                <TableCell align="right">Dues</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.students.map(student => (
                <TableRow key={student.id}>
                  <TableCell component="th" scope="row">
                    {student.name}
                  </TableCell>
                  <TableCell align="right">{student.first_name}</TableCell>
                  <TableCell align="right">{student.school_name}</TableCell>
                  <TableCell align="right">{student.contact_number}</TableCell>
                  <TableCell align="right">{student.contact_last_name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </>
    );
}


export default AdminSchoolListComp;
