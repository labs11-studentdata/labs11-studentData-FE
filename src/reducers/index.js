import { combineReducers } from 'redux';
//import reducers here as you write them
import { StudentReducer } from './StudentReducer';
import { SchoolReducer } from './SchoolReducer';
import { VisitReducer } from './VisitReducer';
import { LoginReducer } from './LoginReducer';
import { AccountReducer } from './AccountReducer';
import { StripeReducer } from './StripeReducer';

const rootReducer = combineReducers({
  //combine reducers in here
  //make sure the name here matches your view
  students: StudentReducer,
  schools: SchoolReducer,
  visits: VisitReducer,
  login: LoginReducer,
  account: AccountReducer,
  stripe: StripeReducer
});

export default rootReducer;