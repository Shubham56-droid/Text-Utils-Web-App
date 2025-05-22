import React from 'react'

export default function Contact() {
  return (
    <div className="container" id="footer-container">
    <h1>Contact Us</h1>
    <p className="description" id="descriptionContact">
      Have questions or feedback about Text Utils? We'd love to hear from you!
      Reach out through any of the platforms below.
    </p>

    <div className="social-icons" id="social-icons-contacts">
      <a href="https://www.linkedin.com/in/shubham-bawankar-458342200/" className="linkedin">
        <ion-icon name="logo-linkedin"></ion-icon>
        <span>LinkedIn</span>
      </a>
      <a href="mailto:shubhambawankar735@gmail.com" className="gmail">
        <ion-icon name="mail-outline"></ion-icon>
        <span>Gmail</span>
      </a>
      <a href="https://github.com/Shubham56-droid"  className="github">
        <ion-icon name="logo-github"></ion-icon>
        <span>GitHub</span>
      </a>
    </div>

    <div className="footer-logo">
      <ion-icon name="logo-ionitron"></ion-icon>
      <p>Text Forge App</p>
    </div>
  </div>
  )
}
