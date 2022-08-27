import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

const Navigate = (props) => {

  const Switch = props.SwitchRoute;

  const handleClick =()=>{
    Switch({
        selected:props.link,
        previous:props.Router?.selected || 'Home'
    })
  }

  return (
    <div onClick={()=>handleClick()}>
        {props.children}
    </div>
  )
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
        SwitchRoute:(constants)=>{
            dispatch(actions.SwitchRoute(constants))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navigate);