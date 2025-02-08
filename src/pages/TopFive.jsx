import React from 'react';
import xbet from "../assets/ORG_1xbet.svg";
import bc from '../assets/ORG_2515_22641.svg';
import stake from "../assets/ORG_stake2726_24544.svg";


const TopFive = () => {
    return (
        <div>
            <div className="bonus-card ">
<div className="bonus-logo">
<div className="">
  <img src={xbet} alt="" />
</div>
</div>

<div className="bonus-details">
<div className="">
  <div className="bonus-title">$ 1,025</div>
  <div className="bonus-amount">Deposit $205 Get $1025</div>
  <p>
    Use promo code : <strong>NEWBONUS</strong>
  </p>
</div>
</div>

<div className="bonus-rating">
<span className="fw-bold text-warning"> ★★★★☆</span>
</div>

<div className="bonus-rating">
<span className="fw-bold text-warning">
  {" "}
  <span className="rating-number">9.6</span>
</span>
</div>

<div className="bonus-actions">
<a href="#" className="bonus-button">
  Get Bonus
</a>
<a href="/OnewinRev" className="bonus-link">
  Review 1Win Casino
</a>
</div>
</div>


<div className="bonus-card ">
<div className="bonus-logo">
<div className="">
  <img src={stake} alt="" />
</div>
</div>
<div className="bonus-details">
<div className="">
  <div className="bonus-title">$3,000</div>
  <div className="bonus-amount">Get $3,000 Welcome Bonus</div>
  <p>
    Use promo code : <strong>NEWBONUS</strong>
  </p>
</div>
</div>
<div className="bonus-rating">
<span className="fw-bold text-warning">★★★★★</span>
</div>
<div className="bonus-rating">
<span className="fw-bold text-warning">
  <span className="rating-number">9.9</span>
</span>
</div>
<div className="bonus-actions">
<a href="https://stake.com/" className="bonus-button">
  Get Bonus
</a>
<a href="/RevStake" className="bonus-link">
  Visit Stake Casino
</a>
</div>
</div>


<div className="bonus-card ">
<div className="bonus-logo">
<div className="">
  <img src={bc} alt="" />
</div>
</div>
<div className="bonus-details">
<div className="">
  <div className="bonus-title">$1,500</div>
  <div className="bonus-amount">+150 Free Spins</div>
  <p>
    Use promo code : <strong>NEWBONUS</strong>
  </p>
</div>
</div>
<div className="bonus-rating">
<span className="fw-bold text-warning">★★★★☆</span>
</div>


<div className="bonus-rating">
<span className="fw-bold text-warning">
  <span className="rating-number">9.8</span>
</span>
</div>
<div className="bonus-actions">
<a href="https://bc.game/bn/?stag=12184_67a6fb7b1a20d4255fda90af&i=4cxse6dr&utm_source=4cxse6dr" className="bonus-button">
  Get Bonus
</a>
<a href="/BcGameRev" className="bonus-link">
  
Visit Bc.Game Sport
</a>
</div>
</div>




        </div>
    );
};

export default TopFive;