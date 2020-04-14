import React from 'react';

import { connect } from 'react-redux';
import moment from 'moment-timezone';

import { deleteAlarm, updateAlarmState } from '../../actions/alarms.actions';

const ListItem = ({ alarm, deleteAlarmAction, updateAlarmStateAction }) => {
  const handleOnDelete = async (evt, id) => {
    evt.preventDefault();

    // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure?')) {
      await deleteAlarmAction({ id });
    }
  };

  return (
    <React.Fragment>
      <div className="alarm-list-details">
        <p className="alarm-list-time">
          {moment
            .utc(alarm.time, 'HH:mm')
            .tz(moment.tz.guess())
            .format('HH:mm')}
        </p>
        <p className="alarm-list-number">
          {`${alarm.number.substring(0, 5)}`}
          {` *** ${alarm.number.substring(alarm.number.length - 3)}`}
        </p>
      </div>
      <div className="alarm-list-options">
        <div className="checkbox">
          <label htmlFor={`alarm-checkbox-${alarm.id}`}>Enabled</label>
          <input
            defaultChecked={alarm.enabled}
            id={`alarm-checkbox-${alarm.id}`}
            name={`alarm-checkbox-${alarm.id}`}
            onChange={(evt) =>
              updateAlarmStateAction(alarm.id, evt.target.checked)
            }
            type="checkbox"
          />
        </div>
        <button onClick={(evt) => handleOnDelete(evt, alarm.id)} type="button">
          Delete
        </button>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  deleteAlarmAction: deleteAlarm(dispatch),
  updateAlarmStateAction: updateAlarmState(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
