import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Route,
 Routes,
  Link,
 } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const removeBodyClasses=() => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }






  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
   
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
     // document.title = "TextUtils - Dark Mode";
    } 
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
     // document.title = "TextUtils - Light Mode";
    }
  }


  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        
        
        <Alert alert={alert} />
        <div className="container my-3">
         <Routes>
            <Route exact  path="/about" element={<About  />} />
            <Route exact
              path="/"
  element={
                <TextForm showAlert={showAlert}heading=" Try TextUtils-Word Counter, Character Counter,Remove extra spaces"
                  mode={mode}
                />}/>
              
            
         </Routes>
         <About mode={mode}/>
        
        
        </div>
      </Router>
    </>
  );
}


export default App;

