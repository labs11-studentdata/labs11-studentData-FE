import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import EditStudent from './EditStudent';

/* function rand() {
  return Math.round(Math.random() * 20) - 10;
} */

/* function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
} */

const styles = theme => ({
  paper: {
    position: 'absolute',
    //width: '75%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class StudentModal extends React.Component {
  state = {
    open: false,
  };
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button variant='outlined' onClick={this.handleOpen}>Edit</Button>
        <Modal
        id='modal'
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className={classes.paper} id='addStudentModalContainer'>
              <h1>Edit Student</h1>
            <EditStudent handleClose={this.handleClose} student={this.props.student}/>
          </div>
        </Modal>
      </div>
    );
  }
}

StudentModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const EditStudentModal = withStyles(styles)(StudentModal);

export default EditStudentModal;