import React from 'react';
import google from '../../../assets/google.png';
import Navigate from '../../../Switcher/Navigate';

const Login = () => {
  return (
    <div className='col-authentication-page'>
        <div className='col-verification-response'>
        <p>Looks like you are currently logged out</p>
        <input type="text" placeholder='Enter email'/>
        <br></br>
        <button>
          Continue with email
        </button>
       <br></br>
       <div>
        </div>
       <button>
          <img src={google} alt="google" />
          Continue with google
       </button>
          <div className='col-container-or'>
          <hr id="middle-hr"></hr>  
          <p>Or</p> 
          <hr id="middle-hr"></hr>
          </div>
          <p>A project manager to contact you instead ?</p>
          <input type="email" placeholder='Enter your email'/> 
          <br></br>
         
          
      </div>
    </div>
  )
}

export default Login