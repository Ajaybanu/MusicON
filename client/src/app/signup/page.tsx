
import React from 'react';
import './signup.css';

function Signup() {
  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form action="signup_process.php" method="POST">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="email">Phone no</label>
        <input type="number" id="number" name="number" required />

       

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="password">Confirm Password</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="login.html">Log In</a></p>
    </div>
  );
}

export default Signup;
