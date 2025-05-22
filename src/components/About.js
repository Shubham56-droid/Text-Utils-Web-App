import React from "react";

export default function About() {
  return (
    <div className="container" id="aboutContent">
      <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              What we do ?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
             At Text-Forge, we provide simple and effective tools to help you manipulate and analyze text effortlessly. Whether you're looking to convert text to uppercase/lowercase, remove extra spaces, count characters or words, or just clean up your writing — we’ve got you covered. Our mission is to make text formatting and editing quick, easy, and accessible for everyone.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              How it works ?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
             Using Text-Forge is easy. Just enter your text into the input area, select the tool or function you want to apply — and see the results instantly! There’s no need to download anything or sign up. It’s all in your browser, lightning-fast and user-friendly.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Tell Us How You Feel
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
             We'd love to hear from you! Whether you have feedback, feature suggestions, or just want to say hi — your input means a lot to us. Drop us a message through our contact form or connect with us on social media. Together, let’s make Text-forge even better!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
