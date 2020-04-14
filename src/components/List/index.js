import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import ListItem from '../ListItem';

import { getAlarms } from '../../actions/alarms.actions';

import './List.scss';

const List = ({ alarms, getAlarmsAction }) => {
  useEffect(() => {
    getAlarmsAction();
  }, []);

  return (
    <div className="alarm-list-wrapper">
      <ul classNmae="alarm-list-ul">
        {alarms.map((alarm) => (
          <li className="alarm-list-li" key={`alarm-${alarm.id}`}>
            <ListItem alarm={alarm} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ alarms: { alarms, loading } }) => ({
  alarms,
  loading,
});

const mapDispatchToProps = (dispatch) => ({
  getAlarmsAction: getAlarms(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
