import React , {useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode = ()=>{
    if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Dark mode has been enabled','success');
    }else{
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert('Light mode has been enabled','success');
    }
  }
return(
  <>
  <Router>
  <Navbar 
  title="TextUtils"
  about ="About"
  mode = {mode}
  toggleMode = {toggleMode}
  />
  <Alert 
  alert={alert} 
  />
  <div className="container my-5">      
  <Routes>
          <Route exact path="/about" element={<About 
          mode={mode}
          />} />
          
          <Route exact path="/" element={ <TextForm
          heading="Enter your text"
         mode={mode}
         alert={alert}
        showAlert={showAlert}
         />   } />
  </Routes>
  </div>
  </Router>
  </>
)
}

export default App;
