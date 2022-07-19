import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { missionDispatcher } from '../../redux/missions/missions';
import Mission from './Mission';

const MissionList = () => {
  const dispatch = useDispatch();
  const missionsList = useSelector((state) => state.missions);
  const { missions } = missionsList;

  useEffect(() => {
    dispatch(missionDispatcher());
  }, []);
  console.log(missions);
  return (
    <div>
      <div>
        <p>Mission</p>
        <p>Description</p>
        <p>Status</p>
      </div>
      <ul>
        {missions && missions.map((mission) => (
          <Mission
            key={mission.missionId}
            missionname={mission.missionname}
            missionId={mission.missionId}
            description={mission.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default MissionList;
