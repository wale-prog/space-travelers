import { useDispatch } from 'react-redux';
import React from 'react';
import propTypes from 'prop-types';
import { missionActions } from '../redux/MissionSlice';
import './MissionList.css';

const MissionList = ({ list: mission }) => {
  const dispatch = useDispatch();

  const handliClick = () => {
    if (mission.joined) {
      dispatch(missionActions.leaveMission(mission.id));
    } else {
      dispatch(missionActions.joinMission(mission.id));
    }
  };

  return (
    <div>
      <div className="main-container">
        <h3>{mission.missionName}</h3>
        <p className="desc">{mission.description}</p>
        <div>
          <p className="status">NOT A MEMBER</p>
        </div>
        <div>
          <button className="join-btn" type="submit" onClick={handliClick}>Join Mission</button>
        </div>
      </div>

    </div>
  );
};
MissionList.propTypes = {
  list: propTypes.instanceOf(Object).isRequired,
};

export default MissionList;
