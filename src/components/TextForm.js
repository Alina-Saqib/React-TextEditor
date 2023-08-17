import React, {useState} from 'react'



export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick =()=>{
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }

    const handlelowClick =()=>{
      let newText= text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase","success");
  }

  const handleclearClick =()=>{
    let newText= "";
    setText(newText);
    props.showAlert("Text Cleared","success");
}

const handlecapClick =()=>{

  let upCase = text.split(" ");

    const capital = upCase;

    for (let i = 0; i < capital.length; i++) {
      capital[i] = capital[i].charAt(0).toUpperCase() + capital[i].slice(1)
      
    }

    const newText = capital.join(" ");
    setText(newText);

    props.showAlert("Text Capitalized","success");

 
}


const handlecopytext = () =>{
 
  navigator.clipboard.writeText(text);
  
  props.showAlert("Copied to Clipboard","success");

  
  

}


const handleextraspace = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra Spaces Removed","success");


}


// function wordcount(){
//   let word_length=text.split(" ").length
//   if(word_length === 1){
//     if(text.length>0)
//     word_length = 1;

//     else
//     word_length = 0;
//   }

//   else {
//     word_length=text.trim("").split(" ").length;
//   }

//   return word_length;
// }

    const handleOnChange =(event)=>{
       // console.log("on Change");
        setText(event.target.value);
    }
   // text ="wromg way";
   //setText("Right way to update text");
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark' ? 'white': '#042743'}} >
        <h1 className='mb-4' style={{fontSize: '35px'}}>{props.heading}</h1>
   
<div className="mb-3  ">
 
  <textarea className="form-control" value={text} style={{backgroundColor: props.mode ==='dark' ? '#13466e': 'white' 
  ,
color: props.mode ==='dark' ? 'white': 'black'}} onChange ={handleOnChange} id="myBox" rows="8"></textarea>
</div>

<button  disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleUpClick}>Convert to UpperCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlelowClick}>Convert to LowerCase</button>
<button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>Clear</button>
<button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handlecapClick}>Capitalize</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopytext}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleextraspace}>Remove Extra Space</button>
      
    </div>

    <div className="container my-3 " style={{color: props.mode ==='dark' ? 'white': '#042743'}}>
      <h2>Your Text Summary </h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    </>
  )
}
