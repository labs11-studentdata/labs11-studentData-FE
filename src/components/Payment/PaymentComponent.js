// import React, {Component} from "react";
// import Typography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Button from "@material-ui/core/Button";
// import './Payment.css'

// class PaymentComponent extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       cardName: '',
//       cardNumber: '',
//       expDate: '',
//       cvv: '',
//       amount: ''
//     }
//   }

  
//   handleChange = name => e => {
//     e.preventDefault();
//     this.setState({ [name]: e.target.value });
//     console.log('pow');
//   };

//   onToken = token => {
//     const body = {
//       amount: this.state.amount,
//       token: token
//     }
//   }

//   render(){
//     return (
//       <>
//         <Typography variant="h6" gutterBottom>
//           Payment method
//         </Typography>
//         <form>
//           <Grid container spacing={16}>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 required
//                 onChange={this.handleChange}
//                 value={this.state.cardName}
//                 id="cardName"
//                 label="Name on card"
//                 fullWidth />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 required
//                 onChange={this.handleChange}
//                 value={this.state.cardNumber}
//                 id="cardNumber"
//                 label="Card number" 
//                 fullWidth />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 required
//                 onChange={this.handleChange}
//                 value={this.state.expDate}
//                 id="expDate"
//                 label="Expiry date"
//                 fullWidth />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 required
//                 onChange={this.handleChange}
//                 value={this.state.cvv}
//                 id="cvv"
//                 label="CVV"
//                 helperText="Last three digits on signature strip"
//                 fullWidth
//               />
//             </Grid>
//             <div className='amountDueContainer'>
//             <Typography gutterBottom component="p">
//               Total Due:{" "}
//               {props.selectedStudent.dues && `${props.selectedStudent.dues}`}
//             </Typography>
//             <Grid item xs={5}>
//               <TextField
//                 required
//                 onChange={this.handleChange}
//                 value={this.state.amount}
//                 id="amount"
//                 label="Amount"
//                 helperText="Enter donation amount"
//                 fullWidth
//               />
//             </Grid>
//             </div>
          
//           </Grid>

//           <Button variant="contained" color="secondary">
//             Sponsor
//           </Button>
//         </form>
//       </>
//     );
//   }
// }

// export default PaymentComponent;
