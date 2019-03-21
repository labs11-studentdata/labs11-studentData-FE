import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

function PaymentForm(props) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <form>
        <Grid container spacing={16}>
          <Grid item xs={12} md={6}>
            <TextField required id="cardName" label="Name on card" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="cardNumber" label="Card number" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="expDate" label="Expiry date" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
            />
          </Grid>
          <div>
          <Typography gutterBottom component="p">
            Total Due:{" "}
            {props.selectedStudent.dues && `${props.selectedStudent.dues}`}
          </Typography>
          <Grid item xs={5}>
            <TextField
              required
              id="amount"
              label="Amount"
              helperText="Enter donation amount"
              fullWidth
            />
          </Grid>
          </div>
         
        </Grid>

        <Button variant="contained" color="secondary">
          Sponsor
        </Button>
      </form>
    </>
  );
}

export default PaymentForm;
