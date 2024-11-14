import React, { useState } from 'react';

function LoginForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <h2>Login</h2>
      <form>
        <input type="email" className="input-field" placeholder="Email" required />
        <div style={{ position: 'relative' }}>
          <input
            type={passwordVisible ? 'text' : 'password'}
            className="input-field"
            placeholder="Password"
            required
          />
          <span
            className="toggle-password"
            onClick={togglePasswordVisibility}
          >
            👁️
          </span>
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
    </>
  );
}

export default LoginForm;
