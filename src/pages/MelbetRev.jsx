import React from 'react';
import StakeLogo from '../assets/ORG_MelBet4781_43035.svg';
import Footer from './Footer';
import Header from './Header';

const MelbetRev = () => {
    return (
        <div>

        <Header />
      <div className="container-fluid bg-rev">
        <div className="container">
            <div className="row">
            <div className="stake-review-container">
  {/* Breadcrumb */}
  <div className="stake-breadcrumb">
    <span>🏠</span> <a href="#">Reviews</a> <span>›</span> <a href="https://melbet-516558.top/en?tag=d_2297877m_45415c_Newbonus">Melbet Review</a>
  </div>

  {/* Review Section */}
  <div className="stake-review-content">
    {/* Left Side */}
    <div className="stake-review-left">
      <div className="stake-rating">
      <img src={StakeLogo} alt="Stake Logo" className="stake-brand-logo" />
      <h2 className="stake-title">Melbet Review</h2>
        ⭐⭐⭐⭐<span className="stake-half-star">⭐</span>
        <span className="stake-rating-score">4.5</span>
      </div>
    </div>

    {/* Right Side */}
    <div className="stake-review-right">
      <h3 className="stake-bonus-text">$130 in bitcoin - 30% extra</h3>
      <p className="stake-promo-text">
      Use code NEWBONUS

      </p>
      <p className="stake-promo-details">
      18+ only. Use the MELBET promo code "NEWBONUS" to get 30% extra free in bitcoin.
      </p>
      <button className="stake-claim-btn"><a href="https://melbet-516558.top/en?tag=d_2297877m_45415c_Newbonus" target="_blank" rel="noreferrer">Claim</a></button>
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

export default MelbetRev;