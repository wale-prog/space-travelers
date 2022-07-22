import React from 'react';
import { useSelector } from 'react-redux';
import MissionList from './MissionList';

const Mission = () => {
  const missions = useSelector((state) => state.missions);

  return (
    <div>
      {missions.map((mission) => (
        <MissionList
          key={mission.id}
          list={mission}
        />
      ))}
    </div>
  );
};

export default Mission;
