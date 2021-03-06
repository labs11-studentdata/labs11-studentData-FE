import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import AddStudent from './AddStudent';
import './StudentStyles.css';
/* function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
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
    //width: theme.spacing.unit * 50,
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
        <Button variant='outlined' disabled={this.state.open ? true : false } onClick={this.handleOpen}>Add Student</Button>
        <Modal
          id='modal'
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className={`${classes.paper}`} id='addStudentModalContainer'>
          <h2>Adding A Student </h2> 
            <AddStudent handleClose={this.handleClose} user_id={this.props.user_id} school={this.props.school} />
          </div>
        </Modal>
      </div>
    );
  }
}

StudentModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const AddStudentModal = withStyles(styles)(StudentModal);

export default AddStudentModal;