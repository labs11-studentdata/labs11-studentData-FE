import React, {Fragment} from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 500,
  },
  tableRoot: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  message: {
    marginTop: 30,
    marginBottom: 20,
  },
});

const formatDate = date => {
  let formatted = date.split('T')[0];
  formatted = formatted.split('-');
  formatted = `${formatted[1]}/${formatted[2]}/${formatted[0]}`;
  return formatted;
}

const BoardSocial = props => {
  const {classes} = props;
  // console.log("BOARD SOCIAL PROPS", props);
  if(!props.schoolID){
    return(
      <Fragment>
        <Typography className={classes.message} variant="h5">
          Please select a school to view social worker notes.
        </Typography>
      </Fragment>
    )
  } else if (props.socialVisits.length === 0) {
    return(
      <Fragment>
        <Typography className={classes.message} variant="h5">
          There are no social worker visits on record for the selected school.
        </Typography>
      </Fragment>
    )
  } else {
    const socialVisits = props.socialVisits;
    // console.log("SOCIAL VISITS", socialVisits);
    return(
      <Fragment>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Note</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {socialVisits.map(visit => (
              <TableRow key={visit.visitID}>
                <TableCell>{formatDate(visit.visit_date)}</TableCell>
                <TableCell>{visit.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Fragment>
    )
  }
}

export default withStyles(styles)(BoardSocial);
