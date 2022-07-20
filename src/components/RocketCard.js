import propTypes from 'prop-types';
import './RocketCard.css';
import { useDispatch } from 'react-redux';
import { rocketActions } from '../Redux/RocketSlice';

const RocketCard = ({ data: rocket }) => {
  // const rockets = useSelector((state) => state.rocket.isReserved);
  const dispatch = useDispatch();
  const {
    rocketName, description, flickrImages,
  } = rocket;

  const clickHandler = () => {
    dispatch(rocketActions.reseverd({ rocket }));
  };

  return (
    <div className="rocket-card">
      <img style={{ width: '200px' }} src={flickrImages} alt="" />
      <div>
        <h3>{rocketName}</h3>
        <p>{description}</p>
        <button className="rocket-btn" onClick={clickHandler} type="submit">Reserve Rocket</button>
      </div>
    </div>
  );
};

RocketCard.propTypes = {
  data: propTypes.instanceOf(Object).isRequired,
};
export default RocketCard;
