import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import StudentRow from './StudentRow';



class StudentTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      updateKey: null,
      updateAmount: null
    }
  }


  
  render(){
    return(
      <Paper className='student-table-container' style={{ overflowY: 'scroll', maxHeight: '300px', width: 'auto'}}>

        <Table className='student-table' deselectOnClickaway={false} style={{ tableLayout: 'auto', padding: 'none' }}>
          <TableHead>
            <TableRow>
              <TableCell style={{padding: '0px', width: '15%'}}>Name</TableCell>
              {/* <TableCell style={{padding: '0px', width: '10%'}}>Status</TableCell> */}
              <TableCell style={{padding: '0px', width: '5%'}}>Age</TableCell>
              <TableCell style={{padding: '0px', width: '10%'}}>Insurance</TableCell>
              <TableCell style={{padding: '0px', width: '10%'}}>Birth Cert</TableCell>
              <TableCell style={{padding: '0px', width: '15%'}}>Contact</TableCell>
              <TableCell style={{padding: '0px', width: '15%'}}>Dues</TableCell>
              <TableCell style={{padding: '0px', width: '10%'}}>Donate</TableCell>
            </TableRow>
          </TableHead>

          <TableBody style={{ overflowY: 'scroll', maxHeight: '500px'}}>
            {this.props.students.map(student => {
              return <StudentRow
                key={student.studentID}
                student={student}
                userID={this.props.userID}
              />
            })}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}



export default StudentTable;