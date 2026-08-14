import react, { useState } from "react";

export default function TextForm(props) {
    
  const handleOnclick = () => {
   let newtext=text.toUpperCase();
    setText(newtext);
    props.showalert("Converted to uppercase","Success")

  };
  const handleOnclickLowercase=()=>{
     let newtext=text.toLowerCase();
    setText(newtext);
    props.showalert("Converted to lowercase","Success")
  }
  const handleonchange = (event) => {
    setText(event.target.value);
  };
  const findrepeated=()=>{
    let newt=text.split(" ");
    let count={};
    newt.forEach(word=>{
         count[word]=(count[word]||0 )+1;
    })
   setrep(Object.keys(count).filter(word=>count[word]>1));
    
    console.log(newt);
  }
  const [text, setText] = useState("");
  let [repeated,setrep]=useState('0');
  return (
    <>
    <div className="container" style={props.style}>
      <h1>
        {props.heading}{setText}
      </h1>
      <div className="mb-3" style={props.style} >
        <textarea
          className="form-control" style={props.style}
          id="myBox"
          rows="8"
          value={text}
          onChange={handleonchange}
          style={{backgroundColor:'#385373'}}
        ></textarea>
        <button  disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleOnclick}>
          Convert to uppercase
        </button>
        <button   disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleOnclickLowercase}>
          Convert to lowercase
        </button>
      </div>
    </div>
    
    <div className="container my-2" style={props.style}>
        <h2 style={props.style}>Your Text Summary</h2>
        <p style={props.style}>{text.replace(/\n/g,"").split(" ").filter(value=>value!=="").length} words and {text.trim().length} chars</p>
        <p style={props.style}>{text.replace(/\n/g,"").split(" ").filter(value=>value!=="").length*0.008} Minutes to read</p>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={findrepeated}>
          Find repeated word</button>
        <p style={props.style}>Most repeated word:{repeated}</p>
        <h2 style={props.style}>Preview</h2>
        <p style={props.style}>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  );
  
}
