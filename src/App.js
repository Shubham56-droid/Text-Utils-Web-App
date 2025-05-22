import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  const [alert, setAlert] = useState(null);
  const [selectedColor, setSelectedColor] = useState("#000000"); // default color: black

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1400);
  };

  // New: function to change color
  const handleColorChange = (color) => {
    setSelectedColor(color);
    showAlert(`Text color set to ${color}`, "success");
  };

  return (
    <>
      <div id="mainbody">
        <Navbar title="Text Forge" aboutText="About Us" showAlert={showAlert} />
        <Alert alert={alert} />

        {/* Color Picker Buttons */}
        <div style={{ textAlign: "center", margin: "10px" }}>
          <span style={{ marginRight: "10px" }}>Select Text Color:</span>
          <button
            onClick={() => handleColorChange("#ff0000")}
            style={{ backgroundColor: "#ff0000", color: "#fff", marginRight: "5px" }}
          >
            Red
          </button>
          <button
            onClick={() => handleColorChange("#0000ff")}
            style={{ backgroundColor: "#0000ff", color: "#fff", marginRight: "5px" }}
          >
            Blue
          </button>
          <button
            onClick={() => handleColorChange("#008000")}
            style={{ backgroundColor: "#008000", color: "#fff" }}
          >
            Green
          </button>
        </div>

        {/* Pass selectedColor as a prop to TextForm */}
        <TextForm
          heading1="Text For Analysis"
          heading2="Text Summary"
          heading3="Summary Preview"
          showAlert={showAlert}
          selectedColor={selectedColor}
        />
        {/* <About/>
        <Contact/> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
