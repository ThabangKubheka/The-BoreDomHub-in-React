import React from 'react'

 function Login() {
  return (
    <div className='Login'>
        <form className='loginForm'>
            <label>Email:</label>
            <input type='text ' placeholder='Enter your email..'></input>
            <label>Password:</label>
            <input type='password ' placeholder='Enter your password..'></input>
        </form>
        
      
    </div>
  )
}
export default Login
