import React, { useState } from "react";

export default function TextForm(props) {

  const [text,setText] = useState('');

  const handleOnChange = (event) => {setText(event.target.value)};
  const handleUppercase = () => {
    setText(text.toUpperCase()); 
    props.showAlert("Converted to Uppercase","Success")
  };
  const handleLowercase = () => {setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase","Success")
  };
  const handleReset = () => {setText('');
    props.showAlert("Reset the whole text","Success")
  };
  const handleCopy = () => {
    const textForm = document.getElementById('textForm');
    textForm.select();
    document.execCommand("copy");
    props.showAlert("Text is copied to clipboard","Success")
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces is been removed","Success")
  }

  const handleTitleCase = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("Convert to title case","Success")
  };

  const handleReverseText = () =>{
    setText(text.split("").reverse().join(""));
    props.showAlert("Text is reversed","Success")
  } 

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "text.txt";
    element.click();
    props.showAlert("File Started Downloading...","Success")
  };

  return (
    <>
    <div className="container">
      <h4 className="heading my-3">{props.heading1}</h4>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="textForm"
          rows="5"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn mx-2 btn-clr" onClick={handleUppercase}>Uppercase</button>
      <button className="btn m-2 btn-clr" onClick={handleLowercase}>Lowercase</button>
      <button className="btn m-2 btn-clr" onClick={handleCopy}>Copy Text</button>
      <button className="btn m-2 btn-clr" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button className="btn m-2 btn-clr" onClick={handleTitleCase}>Title Case</button>
      <button className="btn m-2 btn-clr" onClick={handleReverseText}>Reverse</button>
      <button className="btn m-2 btn-clr" onClick={handleDownload}>Download</button>
      <button className="btn m-2 btn-clr" onClick={handleReset}>Reset</button>
    </div>

    <div className="container my-3">
      <h4 className="heading my-3">{props.heading2}</h4>
      <p><b>Wrods:</b> {text.split(' ').length}  |  <b>Charecters:</b> {text.length} |  <b>Reading Time:</b> {text.split(' ').length * 0.008} min</p>
      <h4 className="my-3 heading">{props.heading3}</h4>
      <p className="preview-text">{text.length>0?text.length < 500?text:text.substring(0, 500 - 3) + '...':"Enter something in textbox above to preview here..."}</p>
    </div>

    </>
  );
}
