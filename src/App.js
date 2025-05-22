import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1400);
  };

  return (
    <Router>
      <div id="mainbody">
        <Navbar aboutText="About Us" showAlert={showAlert} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<TextForm
              heading1="Text For Analysis"
              heading2="Text Summary"
              heading3="Summary Preview"
              showAlert={showAlert}/>}/>

          <Route path="/about" element={<About />}/>
          
          <Route path="/contact" element={<Contact />}/>
            
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
