import api from './api';
import {
  ALARMS_GET_FAILURE,
  ALARMS_GET_START,
  ALARMS_GET_SUCCESS,
} from './constants';

export const createAlarm = (dispatch) => async ({ time, number, timezone }) => {
  dispatch({
    type: ALARMS_GET_START,
  });
  return api
    .create('/alarms', {
      enabled: true,
      number,
      time,
      timezone,
    })
    .then((res) => {
      dispatch({
        alarms: res.data,
        type: ALARMS_GET_SUCCESS,
      });
    })
    .catch((error) => {
      dispatch({
        type: ALARMS_GET_FAILURE,
        error,
      });
    });
};

export const deleteAlarm = (dispatch) => async ({ id }) => {
  dispatch({
    type: ALARMS_GET_START,
  });
  return api
    .delete(`/alarms/${id}`)
    .then((res) => {
      dispatch({
        alarms: res.data,
        type: ALARMS_GET_SUCCESS,
      });
    })
    .catch((error) => {
      dispatch({
        type: ALARMS_GET_FAILURE,
        error,
      });
    });
};

export const getAlarms = (dispatch) => async () => {
  dispatch({
    type: ALARMS_GET_START,
  });
  return api
    .get('/alarms')
    .then((res) => {
      dispatch({
        alarms: res.data,
        type: ALARMS_GET_SUCCESS,
      });
    })
    .catch((error) => {
      dispatch({
        type: ALARMS_GET_FAILURE,
        error,
      });
    });
};

export const updateAlarmState = (dispatch) => async (id, enabled) => {
  dispatch({
    type: ALARMS_GET_START,
  });
  return api
    .update(`/alarms/${id}`, { enabled })
    .then((res) => {
      dispatch({
        alarms: res.data,
        type: ALARMS_GET_SUCCESS,
      });
    })
    .catch((error) => {
      dispatch({
        type: ALARMS_GET_FAILURE,
        error,
      });
    });
};
