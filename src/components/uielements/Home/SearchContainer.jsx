import React from 'react';
import Navigate from '../../../Switcher/Navigate';

const SearchContainer = (props) => {

  return (
    <div className='col-search-container'>
        <p>Seach for top expertise</p>
        <div>
        <input type="text"/>
        <svg width="24" height="24"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#0052CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 20.9999L16.65 16.6499" stroke="#0052CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </div>
        
        <div className='col-container-or-top'>
          <div className='col-container-or'>
          <hr id="middle-hr"></hr>  
          <p>Or</p> 
          <hr id="middle-hr"></hr>
          </div>
        </div>
        <Navigate link={'Catalogue'}>
            <button>
              Browse our catalogue
            </button>
        </Navigate>
    </div>
  )
}



export default SearchContainer;