import React from 'react'
// import './login.css'
// import { sampleUser } from '@/data/data'
// import { user } from '@/types/user'
// import { useReducer,useEffect } from 'react'
// import axios from 'axios'

import './login.css'
 
// import reducer



 function Login() {
 
  return (
    
        <div className="signup-container">
      <h1>LOGIN now</h1>
      <form action="signup_process.php" method="POST">
       

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />

        
        <button type="submit">Login</button>
      </form>
    </div>
//   
  )
}

export default Login