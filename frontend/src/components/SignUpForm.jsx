import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile, signOut, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase"; // Ensure this points to your Firebase config file

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const signIn = async (e) => {
    e.preventDefault(); // Prevents form from refreshing
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update the profile to include the username
      await updateProfile(user, { displayName: username });
      console.log("User signed up with username:", user.displayName);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(auth?.currentUser?.email);

  const singInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.log(error)
    }
  }
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={signIn}>
        <input
          type="text"
          className="input-field"
          placeholder="Full Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          className="input-field"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div style={{ position: "relative" }}>
          <input
            type={passwordVisible ? "text" : "password"}
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
        <button onClick={signIn}>Sign In</button>
        <button onClick={singInWithGoogle}>Sign In with Google</button>
      </form>
    </>
  );
}

export default SignUpForm;
