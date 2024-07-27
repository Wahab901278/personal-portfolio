import React from "react";

const carprice = () => {
  return (
    <div className="project-card">
      <div className="card-content">
        <div className="blue-bar"></div>
        <div className="left-content">
          <p className="heading">Certificate Verification Portal</p>
          <div className="description">
            <p>
              I developed a certificate verification portal using HTML, CSS, and
              JavaScript. This portal ensures the authenticity of certificates
              by utilizing a blockchain mechanism to securely store and verify
              certificate data. The data is retrieved from a data.json file and
              processed using a custom blockchain implementation.
            </p>
            Technologies:
            <p></p>
            <ul>
              <li>HTML,CSS</li>
              <p></p>
              <li>JavaScript</li>
              <p></p>
              <li>JSON, CryptoJS(SHA256)</li>
            </ul>
            <Githubfooter />
          </div>
        </div>
        <div className="right-content">
          <img src={Block} alt="Block" className="Block-img" />
        </div>
      </div>
    </div>
  );
};

export default carprice;
