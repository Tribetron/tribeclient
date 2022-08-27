import React from 'react';
import tribetron from '../../../assets/tribetron.png';
import Navigate from '../../../Switcher/Navigate';

const Header = () => {
  return (
    <div className='col-header'>
      <div className='col-header-left'>
        <Navigate link="Home">
            <div className='col-header-item'>
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.70833 15.0417C12.2061 15.0417 15.0417 12.2061 15.0417 8.70833C15.0417 5.21053 12.2061 2.375 8.70833 2.375C5.21053 2.375 2.375 5.21053 2.375 8.70833C2.375 12.2061 5.21053 15.0417 8.70833 15.0417Z" stroke="#0052CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16.625 16.625L13.1813 13.1813" stroke="#0052CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p>Search</p>
            </div>
        </Navigate>
          <Navigate link="Catalogue">
            <div className='col-header-item'>
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_128_13)">
                    <path d="M9.50001 1.58337L1.58334 5.54171L9.50001 9.50004L17.4167 5.54171L9.50001 1.58337Z" stroke="#0052CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.58334 13.4584L9.50001 17.4167L17.4167 13.4584" stroke="#0052CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.58334 9.5L9.50001 13.4583L17.4167 9.5" stroke="#0052CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_128_13">
                    <rect width="19" height="19" fill="white"/>
                    </clipPath>
                    </defs>
              </svg>
              <p>Expertise</p>
          </div>
          </Navigate>
          
      </div>
        <img src={tribetron} alt="tribetron"/>
        <div className='col-header-right'>
           <div className='col-header-item'>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 15.75V14.25C15 13.4544 14.6839 12.6913 14.1213 12.1287C13.5587 11.5661 12.7956 11.25 12 11.25H6C5.20435 11.25 4.44129 11.5661 3.87868 12.1287C3.31607 12.6913 3 13.4544 3 14.25V15.75" stroke="#0052CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 8.25C10.6569 8.25 12 6.90685 12 5.25C12 3.59315 10.6569 2.25 9 2.25C7.34315 2.25 6 3.59315 6 5.25C6 6.90685 7.34315 8.25 9 8.25Z" stroke="#0052CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p>Account</p>
          </div>
          <Navigate link="Login"> 
           <div className='col-header-item'>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.625 2.125H13.4583C13.8341 2.125 14.1944 2.27426 14.4601 2.53993C14.7257 2.80561 14.875 3.16594 14.875 3.54167V13.4583C14.875 13.8341 14.7257 14.1944 14.4601 14.4601C14.1944 14.7257 13.8341 14.875 13.4583 14.875H10.625" stroke="#0052CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.08334 12.0417L10.625 8.50004L7.08334 4.95837" stroke="#0052CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.625 8.5H2.125" stroke="#0052CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            <p>Login</p>
          </div>
          </Navigate>

        </div>
      <div className='col-header-menu'>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.25 9H15.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.25 4.5H15.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.25 13.5H15.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  )
}

export default Header