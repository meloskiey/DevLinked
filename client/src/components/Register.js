import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../action/alert';
import { register } from '../action/auth';
import PropTypes from 'prop-types'


export const Register = ({ setAlert, register, isAuthenticated }) => {
    const [form, setForm] = useState({
        name:'',
        email:'',
        password:'',
        cfmpassword:'',
    });

    const {name, email, password, cfmpassword } = form;

    const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (password !== cfmpassword) {
          setAlert('Passwords do not match', 'danger');
        } else {
            register({ name, email, password });
        }
    };

    if (isAuthenticated) {
      return <Redirect to='/dashboard' />;
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead">
                <i className="fas fa-user"></i> Create Your Account
            </p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input 
                    type="text" 
                    placeholder="Name" 
                    name="name"
                    value= {name} 
                    onChange={e => onChange(e)}
                />
        </div>
        <div className="form-group">
          <input 
            type="email" 
            placeholder="Email Address" 
            name="email" 
            value= {email} 
            onChange={e => onChange(e)}   
        />
          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
          >
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value= {password} 
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="cfmpassword"
            value= {cfmpassword} 
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);