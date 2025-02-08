import React from 'react';
import StakeLogo from '../assets/ORG_block-bet-logo5215_46948.svg';
import Footer from './Footer';
import Header from './Header';
const BlockBet = () => {
    return (
        <div>

        <Header />
      <div className="container-fluid bg-rev">
        <div className="container">
            <div className="row">
            <div className="stake-review-container">
  {/* Breadcrumb */}
  <div className="stake-breadcrumb">
    <span>🏠</span> <a href="#">Reviews</a> <span>›</span> <a href="#">BlockBet</a>
  </div>


  {/* Review Section */}
  <div className="stake-review-content">
    {/* Left Side */}
    <div className="stake-review-left">
      <div className="stake-rating">
      <img src={StakeLogo} alt="Stake Logo" className="stake-brand-logo" />
      <h2 className="stake-title">BlockBet Review</h2>
        ⭐⭐⭐⭐<span className="stake-half-star">⭐</span>
        <span className="stake-rating-score">4.5</span>

      </div>
    </div>

    {/* Right Side */}
        <div className="stake-review-right">
      <h3 className="stake-bonus-text">Get $100 Sign-up bonus</h3>
      <p className="stake-promo-text">
        with <strong>Promo Code NEWBONUS</strong>
      </p>
      <p className="stake-promo-details">
        Claim the maximum new Stake.com bonus offer now when you join with promo code
        <strong> NEWBONUS.</strong> Up to $100 +
      </p>

      <button className="stake-claim-btn"><a href="https://www.blockbet.gg/en/promotions/welcome-bonus?affiliateid=ADdV93UBZdh_yNxZGFcdnWNd7ZgqdRLk" target="_blank" rel="noreferrer">Claim</a></button>
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

export default BlockBet;