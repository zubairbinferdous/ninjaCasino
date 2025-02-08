import React from 'react';
import Onexbit from '../assets/ORG_1xbit1956_17612.svg';
import Footer from './Footer';
import Header from './Header';

const OnexbitRev = () => {
    return (
        <div>

        <Header />
      <div className="container-fluid bg-rev">
        <div className="container">
            <div className="row">
            <div className="stake-review-container">
  {/* Breadcrumb */}
  <div className="stake-breadcrumb">
    <span>🏠</span> <a href="#">Reviews</a> <span>›</span> <a href="#">1xbit Review
    </a>
  </div>


  {/* Review Section */}
  <div className="stake-review-content">
    {/* Left Side */}
    <div className="stake-review-left">
      <div className="stake-rating">
      <img src={Onexbit} alt="Stake Logo" className="stake-brand-logo" />
      <h2 className="stake-title">1xbit Review </h2>
        ⭐⭐⭐⭐<span className="stake-half-star">⭐</span>
        <span className="stake-rating-score">4.5</span>


      </div>
    </div>

    {/* Right Side */}
        <div className="stake-review-right">
      <h3 className="stake-bonus-text">7 BTC bonus</h3>
      <p className="stake-promo-text">
      with promo code NEWBONUS

      </p>
      <p className="stake-promo-details">
      18+ only. Minimum deposit of 5 mBTC. 40x wagering applies. Ts and Cs apply
      </p>

      <button className="stake-claim-btn"><a href="https://1xbit1.com/?tag=b_652505m_3425c_NEWBONUS" target="_blank" rel="noreferrer">Claim</a></button>
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

export default OnexbitRev;