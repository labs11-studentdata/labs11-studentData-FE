import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import OnboardAccount from "./OnboardAccount";
import OnboardingForm from "./OnboardingForm";
import CreateASchoolForm from "../CreateASchool/CreateASchoolForm";
import { connect } from "react-redux";
import { updateAccount } from "../../actions/account";
import './OnboardingView.css'
import axios from 'axios';

const styles = theme => ({
  root: {
    width: "90%"
  },
  button: {
    marginRight: theme.spacing.unit
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  connectorActive: {
    "& $connectorLine": {
      borderColor: theme.palette.secondary.main
    }
  },
  connectorCompleted: {
    "& $connectorLine": {
      borderColor: theme.palette.primary.main
    }
  },
  connectorDisabled: {
    "& $connectorLine": {
      borderColor: theme.palette.grey[100]
    }
  },
  connectorLine: {
    transition: theme.transitions.create("border-color")
  }
});

function getSteps() {
  return ["Select account type", "Enter account info", "Add a school"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Tell us about yourself...";
    case 1:
      return "Tell us your school info?";
    case 2:
      return "If you dont see your school listed... Add it.";
    default:
      return "Unknown step";
  }
}

function getAccountType(user_permissions) {
  switch (user_permissions) {
    case "admin":
      return 1;
    case "boardmember":
      return 2;
    case "socialworker":
      return 3;
    default:
      return null;
  }
}
const user = {
  email: "",
  photo_url: "",
  account_type: "",
  user_permissions: ""
};
const school = {
  school_name: "",
  location: "",
  schoolID: ""
};
class CustomizedStepper extends React.Component {
  state = {
    activeStep: 0,
    selected: "",
    user: user,
    school: school
  };

  //   HANDLE FORM -- handle form update
  handleChanges = e => {
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSchoolChanges = e => {
      this.setState({
          ...this.state,
          school: {
              ...this.state.school,
              [e.target.name]: e.target.value
          }
      })
  }
  // HANDLE SUBMIT -- axios call to update user with client info
  handleSubmit = e => {
    e.preventDefault();
    const user_id = this.props.user_id;
    if (
      this.state.user.photo_url &&
      this.state.user.email &&
      this.state.user.user_permissions
    ) {
      this.setState({
        ...this.state,
        error: false,
        selected: this.state.selected.replace(/\s/g, "").toLowerCase()
      });
      this.props.updateAccount(user_id, this.state.user);
    } else {
      this.setState({ ...this.state, error: true });
    }
  };
  //   HANDLE CHANGE -- select account type radio btns
  accountTypeSelected = e => {
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        user_permissions: e.target.value
      }
    });
  };
  // HANDLE NEXT -- stepper form change
  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };
  // HANDLE BACK -- stepper form change
  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  finishedSelected = e => {
      e.preventDefault();
      const user = this.state.user;
      if(!user.email || !user.photo_url || !user.schoolID || !user.user_permissions) {
        alert('Please enter all onboarding information.')
      } else {
        this.setState(state => ({
            activeStep: state.activeStep + 1
          }));
      }
  }
//   UPDATE ACCOUNT -- after all login info selected update user account info
  updateAccount = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        account_type: getAccountType(this.state.user.user_permissions),
        user_id: this.props.user_id
      }
    });
        this.props.updateAccount(this.props.user_id, this.state.user);
   
  };
  // ADD A SCHOOL -- If user does not see name of school
  handleSchoolSubmit = e => {
      e.preventDefaßult();
      const school = this.state.school
      axios.post(`${process.env.REACT_APP_BE_URL}/api/schools/`, school)
          .then(res =>{
              this.setState({
                  ...this.state,
                  user: {
                      ...this.state.user,
                      schoolID: res.data[0]
                  },
                  school: {
                      ...this.state.school,
                      schoolID: res.data[0]
                  }
              })
          })
          .catch(err => console.log(err))
  }
  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    const steps = getSteps();
    const connector = (
      <StepConnector
        classes={{
          active: classes.connectorActive,
          completed: classes.connectorCompleted,
          disabled: classes.connectorDisabled,
          line: classes.connectorLine
        }}
      />
    );

    return (
      <div className={`${classes.root} onboardingContainer`}>
        <Stepper activeStep={activeStep} connector={connector}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Stepper className='onboardingCell' alternativeLabel activeStep={activeStep} connector={connector}>
          {this.state.activeStep === 0 && (
            <OnboardAccount
              value={this.state.user.user_permissions}
              accountTypeSelected={this.accountTypeSelected}
            />
          )}
          {this.state.activeStep === 1 && (
            <OnboardingForm
              user={this.state.user}
              handleChanges={this.handleChanges}
              handleSubmit={this.handleSubmit}
            />
          )}
          {this.state.activeStep === 2 && <CreateASchoolForm handleSchoolChanges={this.handleSchoolChanges} school={this.state.school}
          handleSchoolSubmit={this.handleSchoolSubmit}/>}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={this.updateAccount} className={classes.button}>
                Continue to dashboard
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                <Button
                  disabled = {activeStep === steps.length - 1 && !(this.state.school.school_name)  && !(this.state.school.location) ? true : null}
                  variant="contained"
                  color="primary"
                  onClick={activeStep === steps.length - 1 ? this.finishedSelected : this.handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    user_id: state.login.user.user_id
  };
};

export default connect(
  mapStateToProps,
  { updateAccount }
)(withStyles(styles)(CustomizedStepper));
