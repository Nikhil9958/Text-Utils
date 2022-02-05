import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Handle up Clicked");
        let newText = Text.toUpperCase();
        setText(newText);
    } 
    const handleOnChange=(event)=>{
        console.log("Handle Onchange Clicked");
        setText(event.target.value);
    }
    const handleLoClick=()=>{
        let newwText = Text.toLowerCase();
        setText(newwText);
    }
    
    const handleClearClick=()=>{
        setText("");
    };
    const[Text,setText] = useState('');
    return (
            <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={Text} onChange={handleOnChange} id="textBox" rows="8"></textarea>
                </div>   
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className='container my-3'>
                <h2>Your Text Summary</h2>
                <p>{Text.split(" ").length} words and {Text.length} characters</p>
                <p>{0.008* Text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{Text}</p>
            </div>
            </>
        
    )
}
