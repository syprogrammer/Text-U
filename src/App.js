
import './App.css';
import React, { useState } from "react";
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type:type
   })
 }

  return (
    <>
      <Navbar title="Textutils" />
      <Alert alert={alert} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter the text to analyse"
                showalert={showAlert}
              />
            }
          />
          <Route path="/about" element={<About />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
