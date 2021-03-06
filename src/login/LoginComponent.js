import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

function LoginComponent(props) {

  const url = process.env.REACT_APP_BE_URL + '/auth';
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
                  key={btn}
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
          <a onClick={e => props.registerSubmit(e)}> Sign In!</a>
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
