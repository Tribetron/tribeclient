import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';
import Header from '../components/uielements/header/Header';
import RandomFields from '../components/uielements/Home/RandomFields';
import * as actions from '../redux/actions';
import {Components} from './Components';


const Switcher = (props) => {
    const [loading,setLoading] = useState(false);
    
    useEffect(()=>{
        setLoading(true);
        setTimeout((x)=>{
        setLoading(false);
        },1500)
    },[props.Router.selected])

  
  return (
        <div>
            <Header/>
            <RandomFields/>
            {!loading ?  Components.map((x,index)=>{
          return <div key={index}>
                {
                    props.Router.selected === x.key ? <x.component /> : !props.Router.selected && x.key === 'Home' && <x.component/>
                }      
                </div>
            }) : 
             <div className='loader-container'>
                <span className="loader"></span>
             </div>
            }
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


export default connect(mapStateToProps,mapDispatchToProps)(Switcher)