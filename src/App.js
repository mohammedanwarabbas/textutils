// import logo from './logo.svg';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm.js';
import About from './components/About';
import Alert from './components/Alert';
function App() {
  const [mode,setMode] = useState("light");
  const handleMode = () =>{
    if (mode === 'light'){
      setMode("dark");
    }else{
      setMode("light");
    }
  }

  const [alert,setAlert] = useState(null);
  let alertNotifier = (msg,type) =>{
    setAlert({
      alertMessage : msg,
      alertType : type
    })
    //erase after some time
    setTimeout(() => {
      setAlert(null);
    }, 1000);
    
  }
  return (
    <Router basename="/textutils">
    <div className="container">
    <Navbar logoText="TexTutils" mode={mode} handleMode={handleMode}/>
    <Alert alert={alert} />
      <Routes>
        <Route path="/" />
        <Route path="/textform" element={<TextForm alertNotifier={alertNotifier} formHeading="Text Analyzer" labelText="Enter your text here"/>} />
        <Route path="/about" Component={About} />
      
        

      </Routes> 
    </div>
    </Router>
  
  );
}

export default App;
