import React from 'react';
import { Data } from './Data';


const Filter = () => {
  return (
    <div className='col-filter'>
      <div className='col-filter-input'>
      <input type="text" placeholder="Search for expertise"/>
      <div className='custom-select'>
          <select>
            {Data.map((x,index)=>{
              return <option value={x} key={index}>{x}</option>
            })}
          </select>
        </div>
      </div>
        
    </div>
  )
}

export default Filter