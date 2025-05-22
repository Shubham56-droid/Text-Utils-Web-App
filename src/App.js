import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// htmlFor
// className
// tabIndex

function App() {
  
  return (
    <div id="mainbody">
      <Navbar title="Text-Utils" aboutText="About Us"/>
      <TextForm heading1="Text For Analysis" heading2="Text Summary"/>
      {/* <About/> */}
    </div>
  );
}

export default App;
