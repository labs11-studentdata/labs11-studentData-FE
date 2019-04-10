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
         style={{ overflowY: "scroll", maxHeight: "400px", width: "100%" , boxShadow: "none" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Student Name</TableCell>
                <TableCell align="center">Grade</TableCell>
                <TableCell align="center">Emergency Contact</TableCell>
                <TableCell align="center">Contact Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.students.map(student => (
                <TableRow key={student.id}>
                  <TableCell align="center">{`${student.first_name} ${student.last_name}`}</TableCell>
                  <TableCell align="center">{student.grade}</TableCell>
                  <TableCell align="center">{`${student.contact_first_name} ${student.contact_last_name}`}</TableCell>
                  <TableCell style={{color: "#617D8B"}} align="center">{`(${student.contact_number.toString().slice(0, 3)}) ${student.contact_number.toString().slice(3,6)}- ${student.contact_number.toString().slice(6,11)}`}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </>
    );
}


export default AdminSchoolListComp;
