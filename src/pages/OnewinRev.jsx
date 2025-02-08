import React from "react";
import StakeLogo from "../assets/ORG_1xbet.svg";
import Footer from "./Footer";
import Header from "./Header";
const OnewinRev = () => {
  return (
    <div>
      <div>
        <Header />
        <div className="container-fluid bg-rev">
          <div className="container">
            <div className="row">
              <div className="stake-review-container">
                {/* Breadcrumb */}
                <div className="stake-breadcrumb">
                  <span>🏠</span> <a href="#">Reviews</a> <span>›</span>{" "}
                  <a href="https://1xlite-088578.top/en?tag=d_470241m_97c_NEWBONUS">
                    1xBet
                  </a>
                </div>

                {/* Review Section */}
                <div className="stake-review-content">
                  {/* Left Side */}
                  <div className="stake-review-left">
                    <div className="stake-rating">
                      <img
                        src={StakeLogo}
                        alt="Stake Logo"
                        className="stake-brand-logo"
                      />
                      <h2 className="stake-title">1xBet Review</h2>
                      ⭐⭐⭐⭐<span className="stake-half-star">⭐</span>
                      <span className="stake-rating-score">4.5</span>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="stake-review-right">
                    <h3 className="stake-bonus-text">
                      Bet 10,000 Get 10,000 BDT
                    </h3>
                    <p className="stake-promo-text">
                      with <strong>Promo Code NEWBONUS</strong>
                    </p>
                    <p className="stake-promo-details">
                      Get a 10000 BDT bonus when you register with the 1xbet
                      code NEWBONUS. T&Cs apply. Over 18s only.
                    </p>
                    <button className="stake-claim-btn">
                      <a
                        href="https://1xlite-088578.top/en?tag=d_470241m_97c_NEWBONUS"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Claim
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default OnewinRev;
