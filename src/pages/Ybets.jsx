import React from 'react';
import StakeLogo from '../assets/ORG_ybets4069_36627.svg';
import Footer from './Footer';
import Header from './Header';

const Ybets = () => {
    return (
        <div>

        <Header />
      <div className="container-fluid bg-rev">
        <div className="container">
            <div className="row">
            <div className="stake-review-container">
  {/* Breadcrumb */}
  <div className="stake-breadcrumb">
    <span>🏠</span> <a href="#">Reviews</a> <span>›</span> <a href="#">Stake.com</a>
  </div>

  {/* Review Section */}
  <div className="stake-review-content">
    {/* Left Side */}
    <div className="stake-review-left">
      <div className="stake-rating">
      <img src={StakeLogo} alt="Stake Logo" className="stake-brand-logo" />
      <h2 className="stake-title">Ybets Review</h2>
        ⭐⭐⭐⭐<span className="stake-half-star">⭐</span>
        <span className="stake-rating-score">4.5</span>
      </div>
    </div>

    {/* Right Side */}
    <div className="stake-review-right">
      <h3 className="stake-bonus-text">Get $8000 in Bonuses</h3>
      <p className="stake-promo-text">
      500% with promocode NEWBONUS
      </p>
      <p className="stake-promo-details">
      18+. T&Cs apply
      </p>
      <button className="stake-claim-btn"><a href="https://ybets.net/?stag=116632_67a70c3e1a20d4255fdbfda2&http_referrer=https%3A%2F%2Fwww.cryptoninjas.com%2F&loyaltyCode=NEWBONUS&tmp=2&tracking_link=http%3A%2F%2Fybetspromo.io%2Fdcc41354c" target="_blank" rel="noreferrer">Claim</a></button>
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

export default Ybets;