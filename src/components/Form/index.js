import React, { useState } from 'react';

import { connect } from 'react-redux';
import moment from 'moment-timezone';
import { times } from 'lodash';

import { createAlarm } from '../../actions/alarms.actions';

import './Form.scss';

const getHoursValues = () =>
  times(24, String).map((hour) => {
    return `0${hour}`.slice(-2);
  });

const getMinutesValues = () =>
  times(60, String).map((minute) => {
    return `0${minute}`.slice(-2);
  });

const Form = ({ createAlarmAction }) => {
  const [created, setCreated] = useState(false);
  const [hour, setHour] = useState('12');
  const [minutes, setMinutes] = useState('00');
  const [number, setNumber] = useState('');

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    await createAlarmAction({
      number,
      time: `${hour}:${minutes}`,
      timezone: moment.tz.guess(),
    });

    setCreated(true);
    setHour('12');
    setMinutes('00');
    setNumber('');
  };

  return (
    <div className="form-wrapper">
      {created ? (
        <div className="form-message">
          <p>Your alarm has been set!</p>
          <button
            className="form-reset-button"
            onClick={() => setCreated(false)}
            type="button"
          >
            Create another one
          </button>
        </div>
      ) : (
        <form className="form" onSubmit={handleOnSubmit}>
          <div className="form-field">
            <label className="form-label" htmlFor="time">
              Time
            </label>
            <div className="form-field-row">
              <div className="form-field-column">
                <select
                  onChange={(evt) => setHour(evt.target.value)}
                  className="form-select"
                  name="hour"
                  required
                  value={hour}
                >
                  {getHoursValues().map((hour) => (
                    <option value={hour}>{hour}</option>
                  ))}
                </select>
              </div>
              <div className="form-field-column">
                <select
                  className="form-select"
                  name="minute"
                  onChange={(evt) => setMinutes(evt.target.value)}
                  required
                  value={minutes}
                >
                  {getMinutesValues().map((minute) => (
                    <option value={minute}>{minute}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="number">
              Phone number
            </label>
            <input
              className="form-input"
              value={number}
              type="tel"
              required
              onChange={(evt) => setNumber(evt.target.value)}
              size="11"
              minlength="11"
              maxLength="11"
            />
          </div>
          <div className="form-field">
            <button className="form-button" type="submit">
              Create alarm
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

const mapStateToProps = ({ alarms: { alarms, loading } }) => ({
  alarms,
  loading,
});

const mapDispatchToProps = (dispatch) => ({
  createAlarmAction: createAlarm(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
