
import React, { useState } from 'react';
import Stake from "../assets/ORG_stake2726_24544.svg";
import Footer from "./Footer";
import Header from "./Header";

const oneXbetR = () => {

    
    const [isRevealed, setIsRevealed] = useState(false);
    return (
        <div>
            <Header></Header>
           <div className="container">
            <div className="row">
          


<h2 className="promoo-title mt-5 prom-title"> 1xBet Promo Code</h2>
<div className="promo-box">
  {/* Left Side (Promo Box) */}
  <div className="promo-content">
    <div className="stake-logo">
      <img
        src={Stake} // Replace with actual logo
        alt="Stake Logo"
      />
    </div>


    {/* Promo Details */}
    <p className="promo-deposit">
      Deposit <span>$1500</span> Get <span>$3000</span>
    </p>
    <p className="promo-code-text ">
      with promo code <span className="bold-text">NEWBONUS</span>
    </p>

    {/* Promo Code Box */}
    <a href="https://1xbet.com/" className="aR">
    <div className="promo-code-boxx" onClick={() => setIsRevealed(true)}>

      {isRevealed ? (
        <span className="revealed-codex">NEWBONUS</span>
      ) : (
        <span>
          Get Code <span className="hidden-code">XXXX</span>
        </span>
      )}
    </div>
    </a>
    {/* Tested info */}
    <div className="promo-tested">
      <span className="green-check">✔ Tested</span>
      <span className="last-used"> - Last used 31 minutes ago</span>
    </div>
  </div>


  {/* Right Side (Steps) */}
  <div className="promo-steps">
    <ul>
      <li>
        <span className="step-number">1</span>
        <p>
          <strong>Reveal bonus code</strong> <br />
          Click on the box to see our bonus code
        </p>
      </li>
      <li>
        <span className="step-number">2</span>
        <p>
          <strong>Open the site</strong> <br />
          Register and use the promotion code
        </p>
      </li>
      <li>
        <span className="step-number">3</span>
        <p>
          <strong>Sign up</strong> <br />
          Benefit from exclusive bonus when you sign up
        </p>
      </li>
    </ul>

    {/* Button */}
    <a href="https://1xbet.com" className="visit-btn" target="_blank" rel="noreferrer">
      Visit 1xBet.com 
    </a>
  </div>

</div>
            </div>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default oneXbetR;