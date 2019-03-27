import { combineReducers } from 'redux';
//import reducers here as you write them
import { StudentReducer } from './StudentReducer';
import { SchoolReducer } from './SchoolReducer';
import { VisitReducer } from './VisitReducer';
import { LoginReducer } from './LoginReducer';
<<<<<<< HEAD
=======

>>>>>>> d126c3ef29feae26fb372b6198f355300329dd47

const rootReducer = combineReducers({
  //combine reducers in here
  //make sure the name here matches your view
  students: StudentReducer,
  schools: SchoolReducer,
  visits: VisitReducer,
  login: LoginReducer
});

export default rootReducer;