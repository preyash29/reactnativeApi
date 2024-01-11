// app/rootReducer.js
import { combineReducers } from 'redux';
// import authReducer from '../features/auth/authSlice';
// import loginReducer from '../features/auth/loginSlice';
// import registerReducer from '../features/auth/registerSlice';


import authReducer from '../auth/authSlice';
import loginReducer from '../auth/loginSlice';
import registerReducer from '../auth/registerSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  login: loginReducer,
  register: registerReducer,
});

export default rootReducer;
