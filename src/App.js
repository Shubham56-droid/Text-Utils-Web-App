import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Footer from "./components/Footer";

// htmlFor
// className
// tabIndex

function App() {
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    },1400);
  }


  return (
    <>
    <div id="mainbody">
      <Navbar title="Text Forge" aboutText="About Us" showAlert={showAlert}/>
      <Alert alert={alert}/>
      <TextForm heading1="Text For Analysis" heading2="Text Summary" heading3="Summary Preview" showAlert={showAlert}/>
      {/* <About/> */}
    </div>
    <Footer/>
    </>
  );
}

export default App;
