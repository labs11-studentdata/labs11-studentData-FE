import { combineReducers } from 'redux';
//import reducers here as you write them
import { BoardReducer } from './BoardReducer';

const rootReducer = combineReducers({
  //combine reducers in here
  //make sure the name here matches your view
  board: BoardReducer,
  
});

export default rootReducer;