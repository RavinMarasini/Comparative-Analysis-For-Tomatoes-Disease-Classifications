import React, { useState } from "react";
import "./classify.css";

const Classify = () => {
  const [file, setFile] = useState(null);
  const [pending, setPending] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);
  function handleImageInput(e) {
    setError(false);
    setResult(null);
    setFile(URL.createObjectURL(e.target.files[0]));
    setPending(true);
    const formData = new FormData();
    formData.append("file", e.target.files[0], e.target.files[0].name);

    fetch("http://localhost:8000/predict", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setPending(false);
        console.log("this is the data = ", data);
        setResult(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setPending(false);
        setError(true);
      });
  }

  return (
    <div className="classify">
      <div>
        <input type="file" hidden id="inputImg" onChange={handleImageInput} />
        <label htmlFor="inputImg">Upload Image</label>
      </div>
      <div>{file && <img src={file} alt="Uploaded" />}</div>
      <div>
        {file && pending && (
          <div className="reportLoading loading-effect"></div>
        )}
        {result && (
          <div className="report">
            {result.class === "Healthy" ? (
              <h3>Tomato is healthy.</h3>
            ) : (
              <h3>Disease Detected: {result.class}</h3>
            )}

            <h3>Confidence: {(result.confidence * 100).toFixed(2)}%</h3>
          </div>
        )}
        {error && (
          <h3 className="errorMsg">Something went wrong. Try again later.</h3>
        )}
      </div>
    </div>
  );
};

export default Classify;
