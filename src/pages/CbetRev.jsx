import React from 'react';
import StakeLogo from '../assets/ORG_Cbet4776_42996.svg';
import Footer from './Footer';
import Header from './Header';
const CbetRev = () => {
    return (
        <div>

        <Header />
      <div className="container-fluid bg-rev">
        <div className="container">
            <div className="row">
            <div className="stake-review-container">
  {/* Breadcrumb */}
  <div className="stake-breadcrumb">
    <span>🏠</span> <a href="#">Reviews</a> <span>›</span> <a href="#">BC.Game</a>
  </div>

  {/* Review Section */}
  <div className="stake-review-content">
    {/* Left Side */}
    <div className="stake-review-left">
      <div className="stake-rating">
      <img src={StakeLogo} alt="Stake Logo" className="stake-brand-logo" />
      <h2 className="stake-title">Cbet Review</h2>
        ⭐⭐⭐⭐<span className="stake-half-star">⭐</span>
        <span className="stake-rating-score">4.5</span>
      </div>
    </div>

    {/* Right Side */}
    <div className="stake-review-right">
      <h3 className="stake-bonus-text">$200 Bonus</h3>
      <p className="stake-promo-text">
      $200 Bonus
      Use code NEWBONUS
      </p>
      <p className="stake-promo-details">
      Use the code NEWBONUS and get up to $200 when you sign up. 18+ only. T&Cs apply.


      </p>
      <button className="stake-claim-btn"><a href="https://cbet.fund/en-US/?stag=41429_67a7066bf85ea395d5ee9f27&affiliate=affilka#registration" target="_blank" rel="noreferrer">Claim</a></button>
    </div>
  </div>
</div>

            </div>
        </div>
      </div>
<Footer />
    </div>
    );
};

export default CbetRev;