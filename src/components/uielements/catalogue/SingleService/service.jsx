import React,{useState} from 'react';
import { connect } from 'react-redux';
import Navigate from '../../../../Switcher/Navigate';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from 'draft-js';
const Service = (props) => {
  
  const [editorState,setEditorState] = useState(EditorState.createEmpty());

  return (
    <div className='col-service'>
         <div className='col-service-container'>
          <h3>{props.Service.title}</h3>
          <div className='col-service-tags'>
            {(props.Service?.tags || [] ).map((x,index)=>{
              return <p key={index}>{x}</p>
            })}
          </div>
          <p>{props.Service.description}</p>
          <div className='col-service-input'>
            <div className='col-flex'>
              <div className='col-service-input-el'>
                <p>Project Budget</p>
                  <input type="number" placeholder='20000'  />
              </div>
              <div className='col-service-input-el-right'>
                <p>Project Length</p>
                  <input type="text" placeholder='3 weeks'/>
              </div>
             
            </div>
             <div className='col-budget-terms'>
                <p>Budget Terms</p>
              <div className='col-flex'>
              <div className='col-flex'>
              <input type="radio" name="budget"/>
              <p>Hourly</p>
              </div>
              <div className='col-flex'>
              <input type="radio" name="budget"/>
              <p>Milestone</p>
              </div>
              <div className='col-flex'>
              <input type="radio" name="budget"/>
              <p>Project Completion</p>
              </div>
              </div>
            </div>
            <div className='col-project-details'>
              <p>Project Details</p>
              <Editor
              editorState={editorState}
              toolbarClassName="editor-toolbar"
              wrapperClassName="editor-wrapper"
              editorClassName="editor-editor"
              onEditorStateChange={(x)=>setEditorState(x)}
              toolbar={{
                  options: ['inline',  'list', 'textAlign', 'history'],
            }}
            />
            </div>
          </div>
          <Navigate link='Verify'>
            <button>
              Submit Project
            </button>
          </Navigate>
         
         </div>
    </div>
  )
}
const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(Service);