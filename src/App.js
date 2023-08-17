import { useState } from 'react';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';

function App() {
  const[mode, setMode]=useState('light');
  const[alert, setAlert]= useState(null);

  const showAlert = (message, type) =>{
    setAlert(
     { msg: message,
      type: type}
    )
 setTimeout(() =>{
  setAlert(null);
  },1500)
 }
 
  

  const toggleMode =()=>{

    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark Mode has been enabled", "success");
      // document.title = "Textify-Dark Mode";
      // setInterval(()=> {
      //   document.title = "Textify is Amazing";
        
      // } ,2000)

      // setInterval(()=> {
      //   document.title = "Install Textify";
        
        
      // } ,1500)
    }

    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light Mode has been enabled", "success");
      // document.title = "Textify-Light Mode";
    }

  }

  // const ModeP = () =>{

  //   if (mode === 'light'){
  //     setMode('purple');
  //     document.body.style.backgroundColor = '#BA55D3';
  //     showAlert("Purple Mode has been enabled","success")
  //     // document.title = "Textify-Purple Mode";
  //   }

  //   else {
  //     setMode('light');
  //     document.body.style.backgroundColor ='white';
  //     showAlert("Light Mode has been enabled", "success");
  //     // document.title = "Textify-Light Mode";

  //   }
  // }
  return (
    
       <>
     <BrowserRouter> 
   <Navbar  title="Textify" aboutText="About"  mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/> 
   <Routes>
   <Route path="/" element={<TextForm showAlert={showAlert} heading="Try Textify-Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>}/>
   <Route path="/about" element={<About mode={mode}/>}/>

   
  
    </Routes>
   </BrowserRouter> 
   
   </>

  );
}

export default App;
