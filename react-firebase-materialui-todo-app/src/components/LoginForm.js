import React, { useState } from "react";

const LoginForm = ({ loginUser, errorSetting }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && pass) {
      loginUser(email, pass);
      setEmail("");
      setPass("");
    } else {
      errorSetting("Please fill in all fields");
    }
  };

  return (
    <div className="colm-form">
      <form onSubmit={handleSubmit}>
        <h1 className="colm-form">
          Login
        </h1>
        <div className="form-container">
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-container">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            value={pass}
            onChange={(event) => setPass(event.target.value)}
          />
        </div>
        <div className="form-container">
          <button className="btn-login">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
