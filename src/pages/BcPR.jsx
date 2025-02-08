import React, { useState } from "react"; // ✅ Fixed import
import Stake from "../assets/ORG_2515_22641.svg"; // ✅ Ensure correct import
import Footer from "./Footer";
import Header from "./Header";

const BcPR = () => {
    const [isRevealed, setIsRevealed] = useState(false);
    return (
        <div>
      <Header />

      <div className="container">
        <div className="row">
          <h2 className="promoo-title mt-5 prom-title">BC.Game Promo Code</h2>

          <div className="promo-box">
            {/* Left Side (Promo Box) */}
            <div className="promo-content">
              <div className="stake-logo">
                <img src={Stake} alt="Stake Logo" /> {/* ✅ Fixed */}
              </div>

              {/* Promo Details */}
              <p className="promo-deposit">
              $20,000 
              </p>
              <p className="promo-code-text">
                with promo code <span className="bold-text">NEWBONUS</span>
              </p>

              {/* Promo Code Box */}
              <a href="https://stake.com/" className="aR">
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
                <span className="last-used"> - Last used 35 minutes ago</span>
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
              <a href="https://bc.game" className="visit-btn" target="_blank" rel="noreferrer">
                Visit bc.game
              </a>
            </div>


          </div>
        </div>
      </div>
      <Footer />
    </div>
    );
};

export default BcPR;