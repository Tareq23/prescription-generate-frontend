import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button, Form, Alert } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';

const Signup = ({ show, handleClose }) => {
  const {handleSignIn, handleSignUp, isLogin} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    else{
      handleSignUp({email: email, password: password});
    }
    console.log('Signup data:', { email, password });
  };

  return (

    <div className="col-md-6 col-sm-4 auth-form">
      <Form onSubmit={handleSubmit}>
        <h2>User Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>

        <div className="auth-from-footer">
          <p>Already have an account,  Please <Link className="nav-link" to="/auth/login">
            Signin
          </Link></p>
          <button className="btn" onClick={handleSubmit}>
            Signup
          </button>
        </div>
      </Form>
    </div>

  );
};

export default Signup;
