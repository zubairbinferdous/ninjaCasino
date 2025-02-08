import React from 'react';
import StakeLogo from '../assets/ORG_888-starz-logo3922_35307.svg';
import Footer from './Footer';
import Header from './Header';

const StarzRev = () => {
    return (
        <div>

        <Header />
      <div className="container-fluid bg-rev">
        <div className="container">
            <div className="row">
            <div className="stake-review-container">
  {/* Breadcrumb */}
  <div className="stake-breadcrumb">
    <span>🏠</span> <a href="#">Reviews</a> <span>›</span> <a href="#">888Starz</a>
  </div>

  {/* Review Section */}
  <div className="stake-review-content">
    {/* Left Side */}
    <div className="stake-review-left">
      <div className="stake-rating">
      <img src={StakeLogo} alt="Stake Logo" className="stake-brand-logo" />
      <h2 className="stake-title">888Starz Review</h2>
        ⭐⭐⭐⭐<span className="stake-half-star">⭐</span>
        <span className="stake-rating-score">4.5</span>
      </div>
    </div>

    {/* Right Side */}
    <div className="stake-review-right">
      <h3 className="stake-bonus-text">Get $200 Sign-up bonus</h3>
      <p className="stake-promo-text">
        with <strong>Promo Code NEWBONUS</strong>
      </p>
      <p className="stake-promo-details">
        Claim the maximum new Stake.com bonus offer now when you join with promo code
        <strong> NEWBONUS.</strong> Up to $3000 +
      </p>
      <button className="stake-claim-btn"><a href="https://saxoneu5.xyz/en/registration?tag=d_894251m_64133c_freetips_com_%7Bposition%7D_&pb=5f67f3dae1c546cc959563fb696ce998&click_id=2i60ci4bhvvo" target="_blank" rel="noreferrer">Claim</a></button>
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

export default StarzRev;