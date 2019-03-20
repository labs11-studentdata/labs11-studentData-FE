import React from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { checkPropTypes } from "prop-types";

function LoginComponent(props) {
  return (
    <Paper className="loginContainer">
      <Typography component="h1" variant="h5">
        {props.isRegistering ? "Sign Up " : "Sign In"}
      </Typography>

      <form>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input id="email" name="email" autoComplete="email" autoFocus />
        </FormControl>
        
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <div className="btnContainer">
          {props.btns.map(btn => {
            if (btn === "") {
              return (
                <Button
                  onClick={e => props.handleSubmit(e)}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  {props.isRegistering ? "Sign Up" : "Sign In"}
                </Button>
              );
            } else {
              return (
                <Button
                  onClick={e => props.handleSubmit(e)}
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
            }
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
          <a onClick={e => props.registerSubmit(e)}>Sign Up!</a>
        </p>
      )}
    </Paper>
  );
}

export default LoginComponent;
