import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../config/firebase'; // Ensure this is your Firebase config file

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const googleProvider = new GoogleAuthProvider();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Email and password login
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User logged in with email:", user.email);
    } catch (error) {
      console.error("Error logging in with email:", error.message);
    }
  };

  // Google sign-in
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("User logged in with Google:", user.displayName, user.email);
    } catch (error) {
      console.error("Error logging in with Google:", error.message);
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          className="input-field"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div style={{ position: 'relative' }}>
          <input
            type={passwordVisible ? 'text' : 'password'}
            className="input-field"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="toggle-password" onClick={togglePasswordVisibility}>
            👁️
          </span>
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
      <button onClick={handleGoogleSignIn} className="btn google-btn">
        Sign in with Google
      </button>
    </>
  );
}

export default LoginForm;
