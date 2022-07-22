import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const style = () => (
    {
      textDecoration: 'none',
      color: 'blue',
    }
  );
  return (
    <ul className="nav-items">
      <li><NavLink style={style} activeStyle={{ textDecoration: 'underline' }} to="/Rockets">Rockets</NavLink></li>
      <li><NavLink style={style} activeStyle={{ textDecoration: 'underline' }} to="/Missions">Missions</NavLink></li>
      <li><NavLink style={style} activeStyle={{ textDecoration: 'underline' }} to="/MyProfile">My Profile</NavLink></li>
    </ul>
  );
};
export default Nav;
