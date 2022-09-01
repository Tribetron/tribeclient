import React from 'react';
import google from '../../../assets/google.png';

const Login = () => {
  return (
    <div className='col-authentication-page'>
        <div className='col-verification-response'>
        <p>Looks like you are currently logged out</p>
        <input type="text" placeholder='Enter email'/>
        <input type="password" placeholder='Enter password'/>
        <br></br>
        <button>
          Continue with email
        </button>
       <br></br>
       <div>
        </div>
         {/* <button> */}
         <p >Create a new account</p> 
        {/* </button> */}
       
          <div className='col-container-or'>
          <hr id="middle-hr"></hr>  
          <p>Or</p> 
          <hr id="middle-hr"></hr>
          </div>
         <button >
          <img src={google} alt="google" />
          Continue with google
       </button>
         
          
      </div>
    </div>
  )
}

export default Login