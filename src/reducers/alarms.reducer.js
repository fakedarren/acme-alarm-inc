import {
  ALARMS_GET_FAILURE,
  ALARMS_GET_START,
  ALARMS_GET_SUCCESS,
} from '../actions/constants';

const defaultState = {
  alarms: [],
  loading: false,
};

export default function alarmsReducer(state = defaultState, action) {
  switch (action.type) {
    case ALARMS_GET_FAILURE:
      return {
        alarms: [],
        loading: false,
      };
    case ALARMS_GET_START:
      return {
        ...state,
        loading: true,
      };
    case ALARMS_GET_SUCCESS:
      return {
        alarms: action.alarms,
        loading: false,
      };
    default:
      return state;
  }
}
