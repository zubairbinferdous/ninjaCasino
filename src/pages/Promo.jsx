import React from "react";
import "../App.css";
import Thunderpick from "../assets/CR_ORG_ThunderPick-8106277.webp";
import Onewin from "../assets/ORG_1win4001_36014.svg";
import OneX from '../assets/ORG_1xbet.svg';
import bc from '../assets/ORG_2515_22641.svg';
import Duelbits from "../assets/ORG_Duelbits_logo1817_16358.svg";
import game from '../assets/ORG_Gamdom logo2710_24394.svg';
import met from '../assets/ORG_MelBet4781_43035.svg';
import Pinnacle from "../assets/ORG_Pinnacle2223_20016.svg";
import Rake from "../assets/ORG_Rocketpot5207_46869.svg";
import Shuffle from "../assets/ORG_Sportaza3214_28934.svg";
import Sportsbet from "../assets/ORG_Sportsbet.io3524_31724.svg";
import Vave from "../assets/ORG_Vave3911_35207.svg";
import Ybets from "../assets/ORG_betplay-logo4912_44220.svg";
import Kingmaker from "../assets/ORG_kingmaker3597_32376.svg";
import Root from '../assets/ORG_roobet5510_49598.svg';
import stake from "../assets/ORG_stake2726_24544.svg";
import bg from "../assets/promoBG.webp";
import Footer from "./Footer";
import Header from "./Header";


const Promo = () => {
  return (
    <div>
      <Header></Header>
      <div className="container my-4">
        <div className="text-start text-white bg-dark p-5 rounded d-flex justify-content-between">
         <div className="">
         <p className="text-uppercase small">Promo Codes</p>
          <h1 className="fw-bold">Crypto Promo Codes</h1>
          <p>
            Find the most generous promo codes for the biggest crypto casino
            sites. Take advantage of the best crypto offers.
          </p>
         </div>
          <img src={bg} alt="" />
        </div>
        <h3 className="fw-bold mt-4">Find the latest promo codes here</h3>
        <div className="row mt-3">
          <div className="col-md-12">
            <div className="promo-box d-flex justify-content-between">
              <div className="promo-header">
                <img src={stake} alt="" />
                <div className="promo-info">
                  <div className="promo-title">Stake.com</div>
                  <div className="promo-rating">⭐ 9.9</div>
                </div>
              </div>
              <div className="promo-details">
                <div className="promo-text">
                  Deposit $1500 Get $3000 <br /> with promo code NEWBONUS
                </div>
                <div className="promo-code-box">
                  <button className="get-code-btn"> <a href="https://stake.com/">NEWBONUS</a></button>
                  <button className="claim-btn"><a href="https://stake.com/">Claim</a></button>
                </div>
              </div>
            </div>


            <div className="promo-box d-flex justify-content-between">
                <div className="promo-header">
                    <img src={OneX} alt="1xBet" />
                    <div className="promo-info">
                        <div className="promo-title">1xBet</div>
                        <div className="promo-rating">⭐ 9.8</div>
                    </div>
                </div>
                <div className="promo-details">
                    <div className="promo-text">Bet 10,000 Get 10,000 BDT <br /> with promo code NEWBONUS</div>
                    <div className="promo-code-box">
                        <button className="get-code-btn"><a href="https://1xbet.com/en">NEWBONUS</a></button>
                        <button className="claim-btn"><a href="https://1xbet.com/en">Claim</a></button>
                    </div>
                </div>
            </div>
            
            <div className="promo-box d-flex justify-content-between">
                <div className="promo-header">
                    <img src={bc} alt="BC.Game Sport" />
                    <div className="promo-info">
                        <div className="promo-title">BC.Game Sport</div>
                        <div className="promo-rating">⭐ 9.6</div>
                    </div>
                </div>
                <div className="promo-details">
                    <div className="promo-text">$20,000 <br /> with promo code NEWBONUS</div>
                    <div className="promo-code-box">
                        <button className="get-code-btn"><a href="https://bc.game">NEWBONUS</a></button>
                        <button className="claim-btn"><a href="https://bc.game">Claim</a></button>
                    </div>
                </div>
            </div>
            
            <div className="promo-box d-flex justify-content-between">
                <div className="promo-header">
                    <img src={game} alt="Gamdom Sports" />
                    <div className="promo-info">
                        <div className="promo-title">Gamdom Sports</div>
                        <div className="promo-rating">⭐ 9.6</div>
                    </div>
                </div>
                <div className="promo-details">
                    <div className="promo-text">Rewards 2.0 enabled <br /> with promo code newbonus</div>
                    <div className="promo-code-box">
                        <button className="get-code-btn"><a href="https://gamdom.com">newbonus</a></button>
                        <button className="claim-btn"><a href="https://gamdom.com">Claim</a></button>
                    </div>
                </div>
            </div>
            
            <div className="promo-box d-flex justify-content-between">
                <div className="promo-header">
                    <img src={met} alt="Melbet" />
                    <div className="promo-info">
                        <div className="promo-title">Melbet</div>
                        <div className="promo-rating">⭐ 9.5</div>
                    </div>
                </div>
                <div className="promo-details">
                    <div className="promo-text">$130 Bonus - 30% extra <br /> with promo code NEWBONUS</div>
                    <div className="promo-code-box">
                        <button className="get-code-btn"><a href="https://melbet.com">NEWBONUS</a></button>
                        <button className="claim-btn"><a href="https://melbet.com">Claim</a></button>
                    </div>
                </div>
            </div>
            
            <div className="promo-box d-flex justify-content-between">
                <div className="promo-header">
                    <img src={Root} alt="Roobet" />
                    <div className="promo-info">
                        <div className="promo-title">Roobet</div>
                        <div className="promo-rating">⭐ 9.3</div>
                    </div>
                </div>
                <div className="promo-details">
                    <div className="promo-text">$5 Free Bet & 20% Cashback <br /> with promo code MAXBONUS</div>
                    <div className="promo-code-box">
                        <button className="get-code-btn"><a href="https://roobet.com">MAXBONUS</a></button>
                        <button className="claim-btn"><a href="https://roobet.com">Claim</a></button>
                    </div>
                </div>
            </div>


            <div className="promo-box d-flex justify-content-between">
    <div className="promo-header">
        <img src={Onewin} alt="1win" />
        <div className="promo-info">
            <div className="promo-title">1win</div>
            <div className="promo-rating">⭐ 9.3</div>
        </div>
    </div>
    <div className="promo-details">
        <div className="promo-text">Claim the Max Free Bet $1025 <br /> Use promo code NEWBONUS</div>
        <div className="promo-code-box">
            <button className="get-code-btn"><a href="https://shuffle.gg/">Get Code</a></button>
            <button className="claim-btn"><a href="https://shuffle.gg/">Claim</a></button>
        </div>
    </div>
</div>

<div className="promo-box d-flex justify-content-between">
    <div className="promo-header">
        <img src={Duelbits} alt="Duelbits" />
        <div className="promo-info">
            <div className="promo-title">Duelbits</div>
            <div className="promo-rating">⭐ 9.2</div>
        </div>
    </div>
    <div className="promo-details">
        <div className="promo-text">Deposit $100 Get $100 <br /> Use referral code "maxbonus"</div>
        <div className="promo-code-box">
            <button className="get-code-btn"><a href="https://shuffle.gg/">Get Code</a></button>
            <button className="claim-btn"><a href="https://shuffle.gg/">Claim</a></button>
        </div>
    </div>
</div>

<div className="promo-box d-flex justify-content-between">
    <div className="promo-header">
        <img src={Pinnacle} alt="Pinnacle" />
        <div className="promo-info">
            <div className="promo-title">Pinnacle</div>
            <div className="promo-rating">⭐ 9.0</div>
        </div>
    </div>
    <div className="promo-details">
        <div className="promo-text">Bookmaker with biggest limits <br /> Use the NEWBONUS promo code</div>
        <div className="promo-code-box">
            <button className="get-code-btn"><a href="https://shuffle.gg/">Get Code</a></button>
            <button className="claim-btn"><a href="https://shuffle.gg/">Claim</a></button>
        </div>
    </div>
</div>

<div className="promo-box d-flex justify-content-between">
    <div className="promo-header">
        <img src={OneX} alt="1xBit" />
        <div className="promo-info">
            <div className="promo-title">1xBit</div>
            <div className="promo-rating">⭐ 9.0</div>
        </div>
    </div>
    <div className="promo-details">
        <div className="promo-text">7 BTC bonus <br /> with promo code NEWBONUS</div>
        <div className="promo-code-box">
            <button className="get-code-btn"><a href="https://shuffle.gg/">Get Code</a></button>
            <button className="claim-btn"><a href="https://shuffle.gg/">Claim</a></button>
        </div>
    </div>
</div>

<div className="promo-box d-flex justify-content-between">
    <div className="promo-header">
        <img src={Kingmaker} alt="Kingmaker Sports" />
        <div className="promo-info">
            <div className="promo-title">Kingmaker Sports</div>
            <div className="promo-rating">⭐ 8.9</div>
        </div>
    </div>
    <div className="promo-details">
        <div className="promo-text">100% up to €500 <br /> Use promo code NEWBONUS</div>
        <div className="promo-code-box">
            <button className="get-code-btn"><a href="https://shuffle.gg/">Get Code</a></button>
            <button className="claim-btn"><a href="https://shuffle.gg/">Claim</a></button>
        </div>
    </div>
</div>


<div className="promo-box d-flex justify-content-between">
    <div className="promo-header">
        <img src={Sportsbet} alt="Sportsbet.io" />
        <div className="promo-info">
            <div className="promo-title">Sportsbet.io</div>
            <div className="promo-rating">⭐ 8.7</div>
        </div>
    </div>
    <div className="promo-details">
        <div className="promo-text">Leading Sportsbook <br /> Immediate Bonuses</div>
        <div className="promo-code-box">
            <button className="get-code-btn"><a href="https://shuffle.gg/">Get Code</a></button>
            <button className="claim-btn"><a href="https://shuffle.gg/">Claim</a></button>
        </div>
    </div>
</div>

<div className="promo-box d-flex justify-content-between">
    <div className="promo-header">
        <img src={Vave} alt="Vave" />
        <div className="promo-info">
            <div className="promo-title">Vave</div>
            <div className="promo-rating">⭐ 8.7</div>
        </div>
    </div>
    <div className="promo-details">
        <div className="promo-text">Up to 1BTC free <br /> with promo code NEWBONUS</div>
        <div className="promo-code-box">
            <button className="get-code-btn"><a href="https://shuffle.gg/">Get Code</a></button>
            <button className="claim-btn"><a href="https://shuffle.gg/">Claim</a></button>
        </div>
    </div>
</div>

<div className="promo-box d-flex justify-content-between">
    <div className="promo-header">
        <img src={Ybets} alt="Ybets" />
        <div className="promo-info">
            <div className="promo-title">Ybets</div>
            <div className="promo-rating">⭐ 8.6</div>
        </div>
    </div>
    <div className="promo-details">
        <div className="promo-text">Get $8000 in Bonuses <br /> 500% with promo code NEWBONUS</div>
        <div className="promo-code-box">
            <button className="get-code-btn"><a href="https://shuffle.gg/">Get Code</a></button>
            <button className="claim-btn"><a href="https://shuffle.gg/">Claim</a></button>
        </div>
    </div>
</div>

<div className="promo-box d-flex justify-content-between">
    <div className="promo-header">
        <img src={Thunderpick} alt="Thunderpick" />
        <div className="promo-info">
            <div className="promo-title">Thunderpick</div>
            <div className="promo-rating">⭐ 8.4</div>
        </div>
    </div>
    <div className="promo-details">
        <div className="promo-text">Deposit €600 Get €600 <br /> with promo code NEWBONUS</div>
        <div className="promo-code-box">
            <button className="get-code-btn"><a href="https://shuffle.gg/">Get Code</a></button>
            <button className="claim-btn"><a href="https://shuffle.gg/">Claim</a></button>
        </div>
    </div>
</div>

<div className="promo-box d-flex justify-content-between">
    <div className="promo-header">
        <img src={Rake} alt="Rake" />
        <div className="promo-info">
            <div className="promo-title">Rake</div>
            <div className="promo-rating">⭐ 8.4</div>
        </div>
    </div>
    <div className="promo-details">
        <div className="promo-text">Deposit $10,000, Get $10,000 <br /> Use code CRYPTOBETS</div>
        <div className="promo-code-box">
            <button className="get-code-btn"><a href="https://shuffle.gg/">Get Code</a></button>
            <button className="claim-btn"><a href="https://shuffle.gg/">Claim</a></button>
        </div>
    </div>
</div>

<div className="promo-box d-flex justify-content-between">
    <div className="promo-header">
        <img src={Shuffle} alt="Shuffle" />
        <div className="promo-info">
            <div className="promo-title">Shuffle</div>
            <div className="promo-rating">⭐ 8.3</div>
        </div>
    </div>
    <div className="promo-details">
        <div className="promo-text">Deposit $1,000 Get $1,000 <br /> Referral code MAXBONUS</div>
        <div className="promo-code-box">
            <button className="get-code-btn"><a href="https://shuffle.gg/">Get Code</a></button>
            <button className="claim-btn"><a href="https://shuffle.gg/">Claim</a></button>
        </div>
    </div>
</div>





          </div>
        </div>
      </div>

      <div className="container content-area my-4">
        <div className="row">
          <div className="col-md-8">
            <h2 className="fw-bold" id="CryptoPromoCodes">Crypto Promo Codes</h2>
            <p>
              Finding a new gambling site is exciting enough, but when there is
              a promo code available to make the most of it, it takes that
              excitement to a whole new level.
            </p>
            <p>
              Not only is there the prospect of finding new favourite games to
              play, but there’s also the chance of being able to make some
              serious bonus profits while playing them.
            </p>
            <p>
              Promo codes are offered by{" "}
              <a href="#" className="text-primary">
                online casinos
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary">
                betting sites
              </a>{" "}
              as a way of enticing new customers, and those customers that know
              how to use them the right way can make this opportunity
              particularly lucrative.
            </p>
            <p>
              They can grant a number of different bonus types, including
              deposit bonuses, no deposit bonuses, free spins and more, and
              we’ll go into a bit more detail about these later.
            </p>
            <p>
              On this page, you’ll find all the information you need about
              crypto casino promo codes, including where to find them and how to
              use them.
            </p>

            <h3 className="fw-bold" id="TypesOfWelcomeBonuses">Types Of Welcome Bonuses</h3>
            <p>
              Every online casino site takes a somewhat unique approach to the
              matter of welcome incentives for new players. In this section, we
              explain what players should anticipate when they start using a new
              cryptocurrency casino.
            </p>

            <h3 className="fw-bold" id="DepositBonuses">Deposit Bonuses</h3>
            <p>
              The most popular sort of incentive given by online casinos is
              deposit bonuses. These incentives may be collected by depositing a
              particular quantity of bitcoin, as the name implies.
            </p>
            <p>
              Deposit incentives are normally calculated by multiplying the
              amount of money you deposit by a particular percentage. Typically,
              the percentage is 50%, 100%, or even 200%. Take, for example, a
              casino that provides a 100% match on the initial deposit. This
              implies that if a player puts 1 BTC into their casino wallet, they
              will get a bonus of 1 BTC.
            </p>
            <p>
              Furthermore, deposit incentives normally have a limit. For
              example, a casino may restrict the initial deposit bonus to 1 BTC.
              Despite depositing 2 BTC, the player would only get a bonus of 1
              BTC in the case given in the preceding paragraph.
            </p>
            <p>
              Deposit incentives are frequently distributed across many
              deposits. The welcome bonus is usually distributed over the first
              three or four deposits at a casino.
            </p>
            <p>
              Players should read the bonus terms and conditions before starting
              to use a casino since the matching percentage and deposit limit on
              each deposit may fluctuate.
            </p>

            <h3 className="fw-bold" id="NoDepositBonuses">No Deposit Bonuses</h3>
            <p>
              Bonuses that may be collected without having to deposit any money
              into the casino wallet are known as no deposit bonuses. No deposit
              bonuses are difficult to come by, but they may be discovered with
              a little effort.
            </p>
            <p>
              As one would assume, these incentives are often tiny and intended
              to give players a taste of the action. They also come with a slew
              of terms and conditions attached.
            </p>
            <p>
              Users may be able to use the no deposit bonus to bet at a casino,
              but they will not be able to cash out their wins unless they also
              deposit money.
            </p>
            <p>
              As a financial incentive, no deposit bonuses are uncommon.
              Instead, they usually provide customers more free time to play one
              or more games. Free spins are the most prevalent no deposit
              incentives, which are detailed next.
            </p>

            <h3 className="fw-bold" id="FreeSpins">Free Spins</h3>
            <p>
              Free spins are the second most prevalent cryptocurrency incentive
              behind deposit matching. Players may utilise these bonuses to try
              their luck on a limited number of games on the site.
            </p>
            <p>
              As an example, a casino’s welcome offer can include “200 free
              spins on slots”. This means that gamers will be able to spin the
              slot machine 200 times without paying any costs.
            </p>
            <p>
              Any profits generated by the free spins are kept by the players.
              However, there may be restrictions on how much money you may
              withdraw if you win.
            </p>
            <p>
              When free spins are given as a no deposit bonus, the earnings are
              usually not able to be withdrawn until specific conditions are
              satisfied. When free spins are provided as part of a deposit
              bonus, the wins are typically able to be withdrawn.
            </p>

            <h3 className="fw-bold" id="HowToUseCryptoCasinoPromoCodes">How To Use Crypto Casino Promo Codes</h3>
            <p>
              When it comes to actually using casino promo codes, the first step
              is to go to the bookmaker’s website, which can be found easily via
              a link and then click on the register button, which is normally
              located on the page’s main bar.
            </p>
            <p>
              It will be essential to complete the personal and account
              information sections of the registration form.
            </p>
            <p>
              Following these steps, a field will appear for you to enter
              something they will call either a “Promotion code,” “Promotional
              code,” or “Bonus code,” and is of course the location where the
              bonus code is entered.
            </p>
            <p>
              When you have followed all of the promo code instructions and all
              of the promotional terms and conditions, you will be awarded
              whatever was promised to you by the offer, whether bonus funds,
              free spins or whatever else.
            </p>

            <h3 className="fw-bold" id="OtherCryptoCasinoBonusTypes">Other Crypto Casino Bonus Types</h3>
            <p>
              Promo code bonuses may be one of the greatest value promotions
              available, but they will rarely be the end of the promotions that
              you receive from a particular crypto casino.
            </p>
            <p>
              As well as welcome bonuses, most crypto casinos will also have
              ongoing promotions for loyal customers. Here are some of the most
              common bonuses that crypto casinos offer their existing customers:
            </p>
            <h5 className="fw-bold" id="WeeklyDepositBonuses">Weekly Deposit Bonuses</h5>
            <p>
              Some online casinos offer additional deposit bonuses after the
              promo codes and welcome bonuses have been utilised.
            </p>
            <p>
              They may not always be weekly, although they often are, but
              usually, if a player gambles a particular amount within a week,
              they will be awarded a deposit bonus the following Monday, for
              example, as thanks for their loyalty.
            </p>
            <h5 className="fw-bold" id="WeeklyFreeSpins">Weekly Free Spins</h5>
            <p>
              Similarly to how the weekly deposit bonuses work above, some
              crypto casinos will offer weekly free spins instead or as well as
              deposit bonuses.
            </p>
            <p>
              The free spin quantity will vary of course, depending on the
              casino, but can often be 50 which is certainly enough to provide a
              big boost to your casino bankroll.
            </p>
            <h5 className="fw-bold">Cashback Bonuses</h5>
            <p>
              Finally, we have cashback bonuses, where a crypto casino may offer
              cashback on either the total spent or the total lost within a
              timeframe.
            </p>
            <p>
              For example, if you deposit and lose £100 within a week, a 10%
              cashback bonus would see a bonus of £10 added back into your
              casino wallet.
            </p>

            <h3 className="fw-bold" id="PromoCodesFAQs">Promo Codes FAQs</h3>
            <div className="border-bottom pb-3 mb-3">
              <h5 className="fw-bold">
                What Is A Crypto Casino Site Promo Code?
              </h5>
              <p>
                A promo code can be used at a number of crypto casino sites in
                order to receive unique perks and welcome bonuses.
              </p>
              <p>
                Promo codes are usually entered during either account
                registration or the initial deposit process, which will be
                stated in the promotional terms and conditions.
              </p>
            </div>
            <div className="border-bottom pb-3 mb-3">
              <h5 className="fw-bold">What Bonuses Can A Promo Code Offer?</h5>
              <p>
                New players that enter a promo code when they sign up and
                deposit their crypto at an online casino site are granted
                bonuses such as a matched deposit bonus, free spins or sometimes
                both.
              </p>
            </div>
            <div>
              <h5 className="fw-bold">What Is The Best Crypto Promo Code?</h5>
              <p>
                The best crypto promo code is the one that gives you the most
                bonus funds and most free spins at a site that suits your
                personal crypto gambling preferences.
              </p>
              <p>
                The site that offers the biggest bonus may not immediately be
                the best since that site may not accept your choice of
                cryptocurrency or may be difficult to navigate, for example.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 border rounded bg-light mt30 bg-menu sticky-top">
              
              <ul className="list-unstyled">
                <li>
                  <a href="#CryptoPromoCodes" className="text-decoration-none">
                    Crypto Promo Codes
                  </a>
                </li>
                <li>
                  <a href="#TypesOfWelcomeBonuses" className="text-decoration-none">
                    Types Of Welcome Bonuses
                  </a>
                </li>
                <li>
                  <a href="#DepositBonuses" className="text-decoration-none">
                    Deposit Bonuses
                  </a>
                </li>
                <li>
                  <a href="#NoDepositBonuses" className="text-decoration-none">
                    No Deposit Bonuses
                  </a>
                </li>
                <li>
                  <a href="#FreeSpins" className="text-decoration-none">
                    Free Spins
                  </a>
                </li>
                <li>
                  <a href="#WeeklyDepositBonuses" className="text-decoration-none">
                    Weekly Deposit Bonuses
                  </a>
                </li>
                <li>
                  <a href="#WeeklyFreeSpins" className="text-decoration-none">
                    Weekly Free Spins
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Promo;
