import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


// const VisitListByUser = props => {
//   return(
//     <div className='visit-list-container'>
//       <div className='visit-list'>
//         <div className="list-header">
//             <span>Date</span>
//             <span>School</span>
//             <Button variant="outlined" className="add-visit-btn" onClick={props.openAdd}>
//             Add Visit
//             </Button>
//         </div>

//         <div className="list-body">
//           {props.visits.map(visit => {
//             return(
//               <div className="list-item" value={visit.id} onClick={props.visitOnClick}>
//                 <span>{visit.visit_date}</span>
//                 <span>{visit.school_name}</span>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }

const VisitListByUser = props => {
  return(
    <Paper className='visit-list-container'>
      <Table className='visit-list'>
        <TableHead className="full">
          <TableRow className="full topper">
            <TableCell className="cell">Date</TableCell>
            <TableCell className="cell">School</TableCell>
            <Button variant="outlined" className="add-visit-btn" onClick={props.openAdd}>
            Add Visit
          </Button>
          </TableRow>
        </TableHead>

        <TableBody style={{ overflow: 'auto', height: '250px', width: '100%' }}>
          {props.visits.map(visit => {
            return(
              <TableRow className="visit" onClick={() => props.visitOnClick(visit)}>
                <TableCell className="cell">{visit.visit_date}</TableCell>
                <TableCell className="cell">{visit.school_name}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default VisitListByUser;

