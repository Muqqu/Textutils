import React,{ useState } from 'react'

export default function Textform(props) {
    const [text,setText] = useState("Enter your text here");
    const handleUpper = (event)=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handlelower = (event)=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleChange = (event)=>{
        setText(event.target.value);
    }
    const handleCopy = (event)=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = (event)=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">

                <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="8" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'black',}}></textarea>

            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpper} >Convert to Upper Case</button>
            <button className="btn btn-primary mx-3" onClick={handlelower} >Convert to Lower Case</button>
            <button className="btn btn-primary mx-3" onClick={handleCopy} >Copy</button>
            <button className="btn btn-primary mx-3" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
        </div>
        <div className="text container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length}characters</p>
        </div>
        <h1>Preview</h1>
        <p>{text.length>0?text:"Enter Something to Preview"}</p>
        </>
    )
}
