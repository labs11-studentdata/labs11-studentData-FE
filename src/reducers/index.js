import { combineReducers } from 'redux';
//import reducers here as you write them
import { StudentReducer } from './StudentReducer';
import { SchoolReducer } from './SchoolReducer';
import { VisitReducer } from './VisitReducer';

const rootReducer = combineReducers({
  //combine reducers in here
  //make sure the name here matches your view
  students: StudentReducer,
  schools: SchoolReducer,
  visits: VisitReducer,
});

export default rootReducer;