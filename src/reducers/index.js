import { combineReducers } from 'redux';

import alarmsReducer from './alarms.reducer';

export default combineReducers({
  alarms: alarmsReducer,
});
