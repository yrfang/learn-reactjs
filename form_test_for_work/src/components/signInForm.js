import React from 'react';

const SignInfForm = (props) => {
  return (
    <form>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" className="form-control" />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default SignInfForm;
