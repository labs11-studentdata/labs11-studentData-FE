import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class DeleteVisitButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }
  
  deleteVisit = e => {
    const id = this.props.visit.visitID

    console.log(id)

    axios.delete(`${process.env.REACT_APP_BE_URL}/api/social_worker_visits/${id}`)
        .then(res => {
            console.log(res.data)
            this.props.reload()
        })
        .catch(err => {
            console.log(err.message)
        })
    this.setState({ open: false });
}

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button variant="outlined" color="default" onClick={this.handleClickOpen}>
          Delete Visit
        </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Would you like to delete this visit?"}
          </DialogTitle>
          <DialogActions>
            <Button variant='outlined' onClick={this.deleteVisit} color="primary">
              Delete
            </Button>
            <Button variant='outlined' onClick={this.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default DeleteVisitButton;