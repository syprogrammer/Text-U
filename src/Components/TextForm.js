import React, { useState } from "react";

export default function TextForm({ heading,showalert }) {
  const [text, setText] = useState("Enter text here");
  const handleOnChange = (event) => {
       setText(event.target.value);
  };
  const handleUpClick = () => {
   
      let newText = text.toUpperCase();
      setText(newText);
      showalert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
   
      let newText = text.toLowerCase();
      setText(newText);
      showalert("Converted to Lowercase!", "success");
  };
  const handleclear = () => {
   
      let newText = '';
      setText(newText);
      showalert("cleared text!", "success");
    };
    const speak = () => {

  let msg = new SpeechSynthesisUtterance();

  msg.text = text;
  msg.rate = 0.9; // From 0.1 to 10
  msg.pitch = 1;
        window.speechSynthesis.speak(msg);
        showalert("Thanks for using our text-to-speech feature", "hi");

}
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="myBox">
            <h1>{heading}</h1>
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows={8}
            onChange={handleOnChange}
            value={text}
          />
        </div>

        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleclear}
          style={{ padding: 0 }}
        >
          <img
            src="data:image/png;base64,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"
            alt=""
            style={{ width: 40, padding: 0 }}
          />
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={speak}
          style={{ padding: 0 }}
        >
          <img
            src="https://image.shutterstock.com/shutterstock/photos/739667332/display_1500/stock-vector-speaking-woman-silhouette-vector-illustration-739667332.jpg"
            alt=""
            style={{ width: 40, padding: 0 }}
          />
        </button>
      </div>
      <div className="container my-4">
        <h2>your Text summary</h2>
        <p>
          {text.split(" ").length-1} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes take to read</p>
        <h1>preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
