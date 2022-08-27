import React from 'react';
import Element from './Element';
import { services } from './Data.jsx';

const Categories = () => {
  return (
    <div className='col-cat-right'>
      {services.map((x,index)=>{
        return <Element
              key={index}
              tags={x.tags}
              title={x.title}
              description={x.description}
              />
      })}
        
    </div>
  )
}

export default Categories