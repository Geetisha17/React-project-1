import React, { useState } from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('')

    const handleUpper = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert('converted to UpperCase','success');
    }
    const handleLower = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert('converted to LowerCase','success');
    }
    const handleTitle = ()=>{
        let newtext = text.charAt(0).toUpperCase()+text.substring(1).toLowerCase();
        setText(newtext);
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
  return (
    <>
    <div className='container ps-5 w-75' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'black':'white' , color: props.mode==='light'?'black' : 'white' }} onChange={handleOnChange} id="mybox" rows="7"></textarea>
        </div>
        <div className="btn btn-primary m-2" onClick={handleUpper}>Change to UpperCase</div>
        <div className="btn btn-primary m-2" onClick={handleLower}>Change to LowerCase</div>
        <div className="btn btn-primary m-2" onClick={handleTitle}>Change to TitleCase</div>
    </div>
    <div className="container ps-5 w-75 mt-4" style ={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words   {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length<0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}
