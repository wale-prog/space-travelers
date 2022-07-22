import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const state = useSelector((state) => state.rocket);

  const reservedRocket = state.filter((rocket) => rocket.reserved === true);

  const style = () => ({
    border: '1px solid rgb(201, 193, 193)',
    marginTop: '20px',
  });

  return (
    <div className="main-container">
      <div className="main">
        <h2>My Missions</h2>
        <div style={style()}>
          <p>Telstar</p>
          <p>SES</p>
          <p>AsiaSat</p>
          <p>ABS</p>
        </div>
      </div>
      <div className="main">
        <h2>My Rockets</h2>
        <div style={style()}>
          {reservedRocket.map((item) => (
            <p key={item.id}>{item.rocketName}</p>
          ))}
        </div>

      </div>
    </div>
  );
};
export default MyProfile;
