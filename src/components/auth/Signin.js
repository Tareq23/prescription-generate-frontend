

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button, Form, Alert, Row } from 'react-bootstrap';
import "./auth.css";

const Signin = ({ show, handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    console.log('Sign In data:', { email, password });

    handleClose();
  };

  return (
    <div className="col-md-6 col-sm-4 auth-form">
      <Form onSubmit={handleSubmit}>
          <h2>User Login</h2>
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

          <div className="auth-from-footer">
            <p>Doesn't have an account? Please <Link className="nav-link" to="/auth/signup">
                Signup
            </Link></p>
            <button className="btn">
              Sign In
            </button>
          </div>
        </Form>
    </div>
        
  );
};

export default Signin;
