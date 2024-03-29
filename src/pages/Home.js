import React, { useState } from 'react'
import Alert from '../components/Alert';
import Textform from '../components/Textform';

export default function Home() {
    const [modebtn, setModebtn] = useState('Enable Dark Mode');
    const [mode, setMode] = useState('light');
    const handleDarkMode = () => {
      if (mode == 'light') {
        setMode('dark');
        setModebtn('Disable Dark Mode');
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        showAlert("DarK Mode has been Enabled", "success");
      } else {
        setMode('light');
        setModebtn('Enable Dark Mode');
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        showAlert("Light Mode has been Enabled", "success");
      }
  
    }
  
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
    }
  return (
    <>
      
    <Alert alert={alert} />
      <div className="container">
        <Textform heading="Enter the text to Analyze" mode={mode} />
      </div>
      </>
  )
}
