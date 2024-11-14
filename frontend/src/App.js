import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      <div className="form-container">
        {isLogin ? <LoginForm /> : <SignUpForm />}
        <div className="form-footer">
          {isLogin ? (
            <>
              <span>Don't have an account? </span>
              <a href="#" onClick={toggleForm}>Sign Up</a>
            </>
          ) : (
            <>
              <span>Already have an account? </span>
              <a href="#" onClick={toggleForm}>Login</a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;