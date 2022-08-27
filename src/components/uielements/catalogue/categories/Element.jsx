import React from 'react';
import Navigate from '../../../../Switcher/Navigate';
import * as actions from '../../../../redux/actions';
import { connect } from 'react-redux';

const Element = (props) => {
    
  return (
    <Navigate link="Service">
        <div className='col-element-cat' onClick={()=>{
            props.SelectedService({
                title:props.title,
                description:props.description,
                tags:props.tags
            })
        }}>
            <h3>
                {props.title} 
            </h3>
            <p>{props.description}</p>

            <tags>
                {(props.tags||[]).map((x,index)=>{
                    return <p key={index}>{x}</p>
                })}
            </tags>
        </div>
    </Navigate>
   
  )
}


const mapDispatchToProps = dispatch => {
    return {
        SelectedService:(constants)=>{
            dispatch(actions.ServiceSelected(constants))
        }
    }
}


export default connect(null,mapDispatchToProps)(Element)