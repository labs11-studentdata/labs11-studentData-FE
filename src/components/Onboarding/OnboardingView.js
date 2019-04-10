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
import { updateLoginInfo } from "../../actions/login";
import { updateAccount } from "../../actions/account";
import "./OnboardingView.css";
import SchoolList from "../Schools/SchoolList";
import axios from "axios";
import {Snackbar} from 'react-mdl'
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
  return ["Select account type", "Enter account info", "View schools"];
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

function getUserPermissions(account_type) {
  switch (account_type) {
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
function jsUcfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
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
    school: school,
    schoolForm: {
      school_name: "",
      location: "",
      schoolID: ""
    },
    isSnackbarActive: false,
    selectedFile: {}
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
      schoolForm: {
        ...this.state.schoolForm,
        [e.target.name]: e.target.value
      }
    });
  };
  // HANDLE SUBMIT -- axios call to update user with client info
  handleSubmit = e => {
    e.preventDefault();
    const userID = this.props.userID;
    if (
      this.state.user.photo_url &&
      this.state.user.email &&
      this.state.user.account_type
    ) {
      this.setState({
        ...this.state,
        error: false,
        selected: this.state.selected.replace(/\s/g, "").toLowerCase()
      });
      this.props.updateAccount(userID, this.state.user);
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
        account_type: e.target.value
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
    if (!user.email || !user.photo_url || !user.account_type) {
      alert("Please enter all onboarding information.");
    } else {
      this.setState(state => ({
        activeStep: state.activeStep + 1
      }));
    }
  };
  //   UPDATE ACCOUNT -- after all login info selected update user account info
  updateAccount = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        user_permissions: getUserPermissions(this.state.user.account_type),
        userID: this.props.userID
      }
    });
    console.log(this.props.userID);
    this.props.updateAccount(this.props.userID, this.state.user);
  };
  // ADD A SCHOOL -- If user does not see name of school
  handleSchoolSubmit = e => {
    e.preventDefault();
    const school = this.state.schoolForm;
    axios
      .post(`${process.env.REACT_APP_BE_URL}/api/schools/`, school)
      .then(res => {
        console.log(res);
        this.setState({
          ...this.state,
          user: {
            ...this.state.user,
            schoolID: res.data[0].schoolID
          },
          school: {
            ...res.data[0]
          },
          schoolForm: {
            ...this.state.schoolForm,
            schoolID: res.data[0].schoolID
          }
        });
        this.props.updateLoginInfo(res.data[0].schoolID);
      })
      .catch(err => console.log(err));
  };

  schoolSelected = (e, schoolID) => {
    console.log(e.target.textContent);

    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        schoolID: schoolID
      },
      school: {
        ...this.state.school,
        schoolID: schoolID,
        school_name: e.target.textContent
      }
    });
    this.props.updateLoginInfo(schoolID);
    console.log(this.state);
  };
  // Image Upload Handler
  fileSelectHandler = event => {
    console.log(event.target.files[0]);
    this.setState({
      ...this.state,
      selectedFile: event.target.files[0]
    });
  };
  // Image File Upload Handler
  fileUploadHandler = e => {
    e.preventDefault();
    const fd = new FormData();
    if(this.state.selectedFile.name) {
      fd.append(
        "userImage",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
  
      axios
        .post(process.env.REACT_APP_BE_URL + "/api/uploads", fd)
        .then(response => {
          console.log("server response", response);
          this.setState({
            ...this.state,
  
            user: {
              ...this.state.user,
              photo_url: `${process.env.REACT_APP_BE_URL}/${response.data}`
            }
          });
          this.handleShowSnackbar();
        })
        .catch(e => {
          console.log("server error:", e.message);
        });
    } else {
      alert('please select a photo and upload')
    }
    
  };
  handleShowSnackbar = () => {
    this.setState({ isSnackbarActive: true });
  };
  handleTimeoutSnackbar = () => {
    this.setState({ isSnackbarActive: false });
  };
  render() {
    console.log(this.state);
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
        <Stepper
          className="onboardingCell"
          alternativeLabel
          activeStep={activeStep}
          connector={connector}
        >
          {this.state.activeStep === 0 && (
            <OnboardAccount
              value={this.state.user.account_type}
              accountTypeSelected={this.accountTypeSelected}
            />
          )}
          {this.state.activeStep === 1 && (
            <div>
                   <Snackbar
                   className='snackBar'
                active={this.state.isSnackbarActive}
                onTimeout={this.handleTimeoutSnackbar}
              >
                Photo Uploaded
              </Snackbar>
              <OnboardingForm
                fileSelectHandler={this.fileSelectHandler}
                fileUploadHandler={this.fileUploadHandler}
                user={this.state.user}
                handleChanges={this.handleChanges}
                handleSubmit={this.handleSubmit}
              />
            </div>
          )}
          {this.state.activeStep === 2 &&
          this.state.user.account_type.includes("admin") ? (
            <div>
              {this.state.school.schoolID ? (
                <p>
                  Joining: {this.state.school.school_name} <br />
                  Account type: {jsUcfirst(this.state.user.account_type)}{" "}
                </p>
              ) : (
                <h1 />
              )}

              <div className="schoolListFormContainer">
                <SchoolList
                  accountType={this.state.user.account_type}
                  schoolSelected={this.schoolSelected}
                  school={this.state.school}
                  user={this.state.user}
                />
                <CreateASchoolForm
                  handleSchoolChanges={this.handleSchoolChanges}
                  school={this.state.schoolForm}
                  a
                  handleSchoolSubmit={this.handleSchoolSubmit}
                />
              </div>
            </div>
          ) : null}
          {(this.state.activeStep === 2 &&
            this.state.user.account_type.includes("social")) ||
          (this.state.activeStep === 2 &&
            this.state.user.account_type.includes("board")) ? (
            <SchoolList accountType={this.state.user.account_type} />
          ) : null}
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
                  disabled={
                    (activeStep === steps.length - 1 &&
                      !this.state.school.school_name &&
                      !this.state.school.location) ||
                    (activeStep === steps.length - 1 &&
                      this.state.user.account_type.includes("social"))
                      ? false
                      : null
                  }
                  variant="contained"
                  color="primary"
                  onClick={
                    activeStep === steps.length - 1
                      ? this.finishedSelected
                      : this.handleNext
                  }
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
  console.log(state);
  return {
    userID: state.login.user.user_id
  };
};

export default connect(
  mapStateToProps,
  { updateAccount, updateLoginInfo }
)(withStyles(styles)(CustomizedStepper));
