import React from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

function LoginComponent(props) {
  const url = 'http://localhost:9000/auth';
  return (
    <Paper className="loginContainer">
      <Typography component="h1" variant="h5">
        {props.isRegistering ? "Sign Up " : "Sign In"}
      </Typography>

      <form>
        <div className="btnContainer">
          {props.btns.map(btn => {
              return (
                <Button
                  href={btn === 'Google' ? `${url}/google` : `${url}/facebook`}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  {props.isRegistering
                    ? `Sign up with ${btn}`
                    : `Sign in with ${btn}`}
                </Button>
              );
          })}
        </div>
      </form>
      {props.isRegistering ? (
        <p className="setUp">
          Have an account?{" "}
          <a href="/login" onClick={e => props.registerSubmit(e)}> Sign In!</a>
        </p>
      ) : (
        <p className="setUp">
          Create an account.{" "}
          <a href="/register" onClick={e => props.registerSubmit(e)}>Sign Up!</a>
        </p>
      )}
    </Paper>
  );
}

export default LoginComponent;
