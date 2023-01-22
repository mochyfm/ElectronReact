import React from 'react';
import './footBar.css';
import { Link } from 'react-router-dom';

const FootBar = () => {
  return (
    <section className="footBar">
      <div>
        &copy; Oceanida Inc. or its affiliates {new Date().getFullYear()}
      </div>
      <div>
        <p className="linkSection">
          <Link to="/actors" className="link">
            List of Users
          </Link>
          <Link to="/actors/new" className="link">
            Add a new User
          </Link>
        </p>
      </div>
    </section>
  );
};

export default FootBar;
