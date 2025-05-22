import React, { useState } from "react";

export default function TextForm(props) {

  const [text,setText] = useState('');

  const handleOnChange = (event) => {setText(event.target.value)};
  const handleUppercase = () => {setText(text.toUpperCase())};
  const handleLowercase = () => {setText(text.toLowerCase())};
  const handleReset = () => {setText('')};
  const handleCopy = () => {
    const textForm = document.getElementById('textForm');
    textForm.select();
    document.execCommand("copy");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const handleTitleCase = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
  };

  const handleReverseText = () => setText(text.split("").reverse().join(""));
   const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "text.txt";
    element.click();
  };

  return (
    <>
    <div className="container">
      <h4 id="heading" className="my-3">{props.heading1}</h4>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="textForm"
          rows="5"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUppercase}>Uppercase</button>
      <button className="btn btn-primary m-2" onClick={handleLowercase}>Lowercase</button>
      <button className="btn btn-primary m-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary m-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-primary m-2" onClick={handleTitleCase}>Title Case</button>
      <button className="btn btn-primary m-2" onClick={handleReverseText}>Reverse</button>
      <button className="btn btn-primary m-2" onClick={handleDownload}>Download</button>
      <button className="btn btn-danger m-2" onClick={handleReset}>Reset</button>
    </div>

    <div className="container my-3">
      <h4 id="heading">{props.heading2}</h4>
      <p><b>Wrods:</b> {text.split(' ').length}  |  <b>Charecters:</b> {text.length} |  <b>Reading Time:</b> {text.split(' ').length * 0.008} min</p>
    </div>

    </>
  );
}
