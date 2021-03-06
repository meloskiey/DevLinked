import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Main = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
    return (
        <section className="main">
      <div className="dark-overlay">
        <div className="main-inner">
          <h1 className="x-large"><i className="fas fa-code"></i>DevLinked</h1>
          <p className="lead">
            A Community to Network Developers with other Developers and Aspiring Developers 
          </p>
          <div className="buttons">
            <Link to='/profiles' className="btn btn-primary">Developers</Link>
          </div>
        </div>
      </div>
    </section>
    )
};

export default Main
