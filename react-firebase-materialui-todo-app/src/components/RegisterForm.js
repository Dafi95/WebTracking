import React, { useState } from "react";

const RegisterForm = ({ createUser, errorSetting }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && pass && pass.length >= 6) {
      createUser(email, pass);
      setEmail("");
      setPass("");
    } else if (pass.length < 6) {
      errorSetting("Password must be of length 6 or greater");
    } else {
      errorSetting("Please fill in all fields");
    }
  };

  return (
    <div className="colm-form">
      <form onSubmit={handleSubmit}>
        <h1 className="text-primary text-center font-weight-bolder mb-5">
          Register
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
          <button className="btn-login">Register</button>
        </div>
      </form>
    </div>
  );
};



export default RegisterForm;
