import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import { Outlet, Link } from "react-router-dom";
export default function Layout() {
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
    <Navbar title="TextUtils" modebtn={modebtn} mode={mode} handleDarkMode={handleDarkMode} />
    <Outlet />
    </>
  )
}
