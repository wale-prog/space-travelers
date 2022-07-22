import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const state = useSelector((state) => state.missions);
  const joinedMission = state.filter((mission) => mission.joined === true);
  const style = () => ({
    border: '1px solid rgb(201, 193, 193)',
    marginTop: '20px',
  });
  return (
    <div className="main-containers">
      <div className="main-con">
        <h2>My Missions</h2>
        <div style={style()}>
          {joinedMission.map((item) => (
            <p key={item.id}>{item.missionName}</p>
          ))}
        </div>
      </div>
      <div className="main-con">
        <h2>My Missions</h2>
        <div style={style()}>
          <p>Falcon 1</p>
          <p>Falcon 9</p>
          <p>Starship</p>
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
