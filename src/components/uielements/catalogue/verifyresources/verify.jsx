import React,{useEffect,useState} from 'react';
import RandomFields from '../../Home/RandomFields';
import Navigate from '../../../../Switcher/Navigate';
import google from '../../../../assets/google.png';

const Verify = () => {
  const [loading,setLoadingStatus] = useState(true);

  useEffect(()=>{
      setTimeout(()=>{
          setLoadingStatus(false);
      },2000)
  },[])

  return (
    <div className='col-verify-resources'>
      <RandomFields/>
      {
      loading ? <div className='col-verify-loader'>
          <p>Almost complete verfying resources for your project</p>
          <div className='loader'></div>
      </div>
      :
      <div className='col-verification-response'>
        <h3 style={{color:'green'}}>Resources Verified</h3>
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
          <Navigate link="Home">
          <button>
            Submit Email
          </button>
          </Navigate>
          
      </div>
      }
       
    </div>
  )
}

export default Verify