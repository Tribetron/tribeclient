import React from 'react';
import Categories from './categories';
import Filter from './filter';

const Catalogue = () => {
  return (
    <div className='col-catalogue'>
      <div className='col-catalogue-elements'>
        <Filter/>
        <Categories/>
      </div>
    
    </div>
  )
}

export default Catalogue