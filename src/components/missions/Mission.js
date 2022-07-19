import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ missionname, missionId, description }) => (
  <div>
    <p>{missionname}</p>
    <p>{description}</p>
    <p>{missionId}</p>
  </div>
);

Mission.propTypes = {
  missionname: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  missionId: PropTypes.string.isRequired,
};
export default Mission;
