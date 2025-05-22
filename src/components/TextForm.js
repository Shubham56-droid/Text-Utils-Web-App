import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUppercase = () => {
    if (text.length > 0) {
      setText(text.toUpperCase());
      props.showAlert("Converted to Uppercase", "Success");
    } else {
      props.showAlert("Please enter the text first", "Warning");
    }
  };
  const handleLowercase = () => {
    if (text.length > 0) {
      setText(text.toLowerCase());
      props.showAlert("Converted to Lowercase", "Success");
    } else {
      props.showAlert("Please enter the text first", "Warning");
    }
  };
  const handleReset = () => {
    if (text.length > 0) {
      setText("");
      props.showAlert("Reset the whole text", "Success");
    } else {
      props.showAlert("Please enter the text first", "Warning");
    }
  };

  const handleCopy = () => {
    if (text.length > 0) {
      const textForm = document.getElementById("textForm");
      textForm.select();
      document.execCommand("copy");
      props.showAlert("Text is copied to clipboard", "Success");
    } else {
      props.showAlert("Please enter the text first", "Warning");
    }
  };
  const handleExtraSpaces = () => {
    if (text.length > 0) {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces is been removed", "Success");
    } else {
      props.showAlert("Please enter the text first", "Warning");
    }
  };

  const handleTitleCase = () => {
    if (text.length > 0) {
      let newText = text
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      setText(newText);
      props.showAlert("Convert to title case", "Success");
    } else {
      props.showAlert("Please enter the text first", "Warning");
    }
  };

  const handleReverseText = () => {
    if (text.length > 0) {
      setText(text.split("").reverse().join(""));
      props.showAlert("Text is reversed", "Success");
    } else {
      props.showAlert("Please enter the text first", "Warning");
    }
  };

  const handleDownload = () => {
    if (text.length > 0) {
      const element = document.createElement("a");
      const file = new Blob([text], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = "text.txt";
      element.click();
      props.showAlert("File Started Downloading...", "Success");
    } else {
      props.showAlert("Please enter the text first", "Warning");
    }
  };

  return (
    <>
      <div className="container" id="text-form-container">
        <h4 className="heading my-2">{props.heading1}</h4>
        <div className="mb-3">
          <textarea
  className="form-control"
  id="textForm"
  rows="5"
  value={text}
  onChange={handleOnChange}
  style={{ color: props.selectedColor }} // ← Add this line
/>

        </div>
        <button className="btn mx-2 btn-clr" onClick={handleUppercase}>
          Uppercase
        </button>
        <button className="btn m-2 btn-clr" onClick={handleLowercase}>
          Lowercase
        </button>
        <button className="btn m-2 btn-clr" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn m-2 btn-clr" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn m-2 btn-clr" onClick={handleTitleCase}>
          Title Case
        </button>
        <button className="btn m-2 btn-clr" onClick={handleReverseText}>
          Reverse
        </button>
        <button className="btn m-2 btn-clr" onClick={handleDownload}>
          Download
        </button>
        <button className="btn m-2 btn-clr" onClick={handleReset}>
          Reset
        </button>
      </div>

      <div className="container my-3">
        <h4 className="heading my-3">{props.heading2}</h4>
        <p>
          <b>Wrods:</b> {text.length === 0 ? 0 : text.split(" ").length} <br />
          <b>Charecters:</b> {text.length} <br />
          <b>Reading Time:</b>{" "}
          {text.length === 0 ? 0 : text.split(" ").length * 0.008} min
        </p>
        <h4 className="my-3 heading">{props.heading3}</h4>
        <p className="preview-text" style={{ color: props.selectedColor }}> {/* ← Add style here */}
  {text.length > 0
    ? text.length < 500
      ? text
      : text.substring(0, 500 - 3) + "..."
    : "Enter something in textbox above to preview here..."}
</p>

      </div>
    </>
  );
}
