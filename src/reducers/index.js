import { combineReducers } from 'redux';
//import reducers here as you write them
import { StudentReducer } from './StudentReducer';

const rootReducer = combineReducers({
  //combine reducers in here
  //make sure the name here matches your view
  students: StudentReducer,
  
});

export default rootReducer;