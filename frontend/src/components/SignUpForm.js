import React, { useState } from 'react';

function SignUpForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <h2>Sign Up</h2>
      <form>
        <input type="text" className="input-field" placeholder="Full Name" required />
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
        <button type="submit" className="btn">Sign Up</button>
      </form>
    </>
  );
}

export default SignUpForm;
