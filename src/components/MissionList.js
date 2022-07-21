import { useDispatch } from 'react-redux';
import React from 'react';
import propTypes from 'prop-types';
import { missionActions } from '../Redux/MissionSlice';
import './MissionList.css';

const MissionList = ({ list: mission }) => {
  const dispatch = useDispatch();

  const handliClick = () => {
    dispatch(missionActions.joinMission(mission.id));
  };

  return (
    <div>
      <div className="main-container">
        <div>
          <h3>Mission</h3>
          <h3>{mission.missionName}</h3>
        </div>
        <div>
          <h3>Description</h3>
          <p>{mission.description}</p>
        </div>
        <div>
          <h3>Status</h3>
          <p>NOT A MEMBER</p>
        </div>

        <button type="submit" onClick={handliClick}>Join Mission</button>
      </div>

    </div>
  );
};
MissionList.propTypes = {
  list: propTypes.instanceOf(Object).isRequired,
};

export default MissionList;
