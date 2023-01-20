import { Link } from 'react-router-dom';
import './topBar.css';
import logo from '../assets/logo.png';

const TopBar = () => {
  return (
    <>
      <section className="topBar">
        <div className="logoSite">
          <img className="logo" src={logo} alt="Navbar Logo" />
        </div>
        <Link className="col navOption" to="/">
          Home
        </Link>
        <Link className="col navOption" to="/actors">
          List
        </Link>
        <Link className="col navOption" to="/actors/new">
          New
        </Link>
      </section>
    </>
  );
};

export default TopBar;
