import React from "react";
import '../css/Footer.css';

const Footer = function () {
  return (
    <div className="Footer">
      <p>
        Built by
        <a className='link' href="https://github.com/l-s-b"> l-s-b</a>
        <div id='ar-container'>
            <p id='ar-flag'>🌞</p>
        </div>
      </p>
    </div>
  );
};
export default Footer;