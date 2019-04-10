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
         style={{ overflowY: "scroll", maxHeight: "400px", width: "100%" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Student Name</TableCell>
                <TableCell align="right">Grade</TableCell>
                <TableCell align="right">Emergency Contact</TableCell>
                <TableCell align="right">Contact Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.students.map(student => (
                <TableRow key={student.id}>
                  <TableCell align="right">{`${student.first_name} ${student.last_name}`}</TableCell>
                  <TableCell align="right">{student.grade}</TableCell>
                  <TableCell align="right">{`${student.contact_first_name} ${student.contact_last_name}`}</TableCell>
                  <TableCell style={{color: "#617D8B"}} align="right">{student.contact_number}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </>
    );
}


export default AdminSchoolListComp;
