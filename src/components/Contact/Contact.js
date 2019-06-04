import React from "react";
import { useState } from "react";
import { Prompt, Redirect } from "react-router-dom";

const Contact = props => {
  const [isBlocking, setIsBlocking] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);

  const isInputChange = event => {
    setIsBlocking(event.target.value.length > 0);
  };

  const submitForm = event => {
    event.preventDefault();
    event.target.reset();
    setIsBlocking(false);
    setIsRedirect(true);
  };

  if (isRedirect) {
    return <Redirect to="/" />;
  }

  return (
    <div className="home">
      <form
        onSubmit={event => {
          submitForm(event);
        }}
      >
        <label>
          <Prompt
            when={isBlocking}
            message={location =>
              `Are you sure you want to go to ${location.pathname}`
            }
          />
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={event => isInputChange(event)}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={event => isInputChange(event)}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </label>
      </form>
    </div>
  );
};

export default Contact;
