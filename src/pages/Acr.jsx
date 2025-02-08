import React, { useState } from 'react';
import Stake from '../assets/ORG_ACR-logo1396_12570.svg';
import Footer from './Footer';
import Header from './Header';
import TopFive from './TopFive';

const Acr = () => {
    const [isRevealed, setIsRevealed] = useState(false);
    return (

        <div>    
      <Header />

      <div className="container">
        <div className="row">
          <h2 className="promoo-title mt-5 prom-title">ACR Poker Promo Code</h2>

          <div className="promo-box">
            {/* Left Side (Promo Box) */}
            <div className="promo-content">
              <div className="stake-logo">
                <img src={Stake} alt="Stake Logo" /> {/* ✅ Fixed */}
              </div>

              {/* Promo Details */}
              <p className="promo-deposit">
              Deposit $2000 Get $2000
              </p>
              <p className="promo-code-text">
                with promo code <span className="bold-text">NEWBONUS</span>
              </p>

              {/* Promo Code Box */}
              <a href="https://affiliates.acrpoker.eu/first-deposit-bonus/" className="aR">
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
              <a href="https://affiliates.acrpoker.eu/first-deposit-bonus/" className="visit-btn" target="_blank" rel="noreferrer">
                Visit ACR Poker
              </a>
            </div>


          </div>
        </div>
      </div>

      <div className="container content-area my-4">
  <div className="row">
    <div className="col-md-8">
      <h2 className="fw-bold" id="Stake">How To Claim ACR Poker Promo Code</h2>
      <p>
        Finding a new gambling site is exciting enough, but when there is a promo code available to make the most of it, it takes that excitement to a whole new level. <br /><br />
        Not only is there the prospect of finding new favourite games to play, but there’s also the chance of being able to make some serious bonus profits while playing them. <br /><br />
        Promo codes are offered by online casinos and betting sites as a way of enticing new customers, and those customers that know how to use them the right way can make this opportunity particularly lucrative. <br /><br />
        They can grant a number of different bonus types, including deposit bonuses, no deposit bonuses, free spins, and more, and we’ll go into a bit more detail about these later. <br /><br />
        On this page, you’ll find all the information you need about crypto casino promo codes, including where to find them and how to use them.
      </p>

      <h3 className="fw-bold" id="Conditions">Important Terms And Conditions</h3>
      <p>
        Promo code welcome bonuses will always come hand-in-hand with a set of terms and conditions that essentially provide you with the instructions you need in order to qualify for the promotion. <br /><br />
        The most important of these terms and conditions will usually include minimum deposits, minimum wagers, restricted games, restricted deposit methods, wagering requirements, and how long you have until the promotion expires after you create your account. <br /><br />
        You will also need to be creating your first new account with the casino and be of the legal gambling age in your region.
      </p>

      <h3 className="fw-bold" id="Requirements">Promo Code Wagering Requirements</h3>
      <p>
        If you’ve yet to encounter wagering requirements, it’s important that you become familiar with what they are and how they work. <br /><br />
        Particularly with sports betting sites, you’ll find that any time something is given for free, there will be strings attached. With bonus funds and free spins, this usually means wagering requirements. <br /><br />
        Wagering requirements state how many times you have to play through the bonus amount before it can be withdrawn as cash.
      </p>

      <h3 className="fw-bold" id="Currencies">Supported Currencies</h3>
      <p>As a crypto poker site, ACR Poker accepts a decent range of cryptocurrencies as payment options.</p>
      <p>
        These cryptocurrencies include: <br />
        Bitcoin <br />
        Bitcoin Cash <br />
        Ethereum <br />
        Litecoin <br />
        Dogecoin <br />
        Tron <br />
        Ripple <br />
        Even though these are the cryptocurrencies that you are depositing and playing with, you will notice that your playing funds will still be displayed as the value of your crypto in GBP, USD, or EUR.
      </p>

      <h3 className="fw-bold" id="FreeSpins">VIP Programmes At ACR Poker</h3>
      <p>
        The reality is that even as a regular player, you may enjoy yourself immensely at your favorite poker site. But there's no denying that joining a VIP programme at an online poker site will elevate your playing. <br /><br />
        If you often play online, it won't be long until these loyalty programmes provide you access to a variety of benefits, such as bonus cash, cashback incentives, special promotions, free spins, and much more.
      </p>

      <h3 className="fw-bold" id="Sportsbook">ACR Poker Platform</h3>
      <p>
        ACR Poker is a premier poker platform that offers a wide range of poker tournaments and cash games. Whether you’re looking for high-stakes action or low-stakes entertainment, ACR Poker provides a seamless experience with multiple poker variants. <br /><br />
        The platform allows you to enjoy real-money poker using cryptocurrencies, providing instant deposits and fast withdrawals with full security.
      </p>

      <h3 className="fw-bold" id="Markets">ACR Poker Tournaments</h3>
      <p>
        ACR Poker, which has grown in recent years to become one of the top poker sites around the world, offers an incredibly huge number of tournaments and cash games. <br /><br />
        Some of the popular formats include Sit & Go tournaments, Multi-table tournaments, Knockout tournaments, and High-Roller events, providing a variety of gameplay experiences for every type of poker player.
      </p>

      <h5 className="fw-bold" id="CustomerService">Customer Service at ACR Poker</h5>
      <p>
        Customer satisfaction is crucial to a genuine poker site since customers are the foundation of any online gaming service. By offering a trustworthy customer care department, ACR Poker exhibits a clear understanding of this reality and a sincere commitment to communication. <br /><br />
        Every player at ACR Poker deserves to be treated like a VIP, thus you can count on getting assistance every single day from ACR Poker's customer service team.
      </p>

      <h3 className="fw-bold" id="PromoCodesFAQs">Promo Codes FAQs</h3>
      <div className="border-bottom pb-3 mb-3">
        <h5 className="fw-bold">Is ACR Poker Legal?</h5>
        <p>ACR Poker is an authorised poker platform and a legitimate online poker site that operates with a valid gaming license.</p>
      </div>
      <div className="border-bottom pb-3 mb-3">
        <h5 className="fw-bold">Which Cryptocurrencies Does ACR Poker Accept?</h5>
        <p>ACR Poker accepts Bitcoin, Bitcoin Cash, Ethereum, Litecoin, Dogecoin, Tron, and Ripple.</p>
      </div>
      <div>
        <h5 className="fw-bold">What Is The Minimum Deposit At ACR Poker?</h5>
        <p>
          For cryptocurrencies, there is an ACR Poker minimum deposit requirement. For instance, you must deposit $/£5 in Bitcoin (0.0001198BTC). The smallest withdrawal amount is likewise $/£5.
        </p>
      </div>
      <h3 className="fw-bold">Top 3 Poker Sites</h3>
      <TopFive />
    </div>

    {/* Sidebar Navigation */}
    <div className="col-md-4">
      <div className="p-3 border rounded bg-light mt30 bg-menu sticky-top">
        <ul className="list-unstyled">
          <li><a href="#Stake" className="text-decoration-none">How To Claim ACR Poker Promo Code</a></li>
          <li><a href="#Conditions" className="text-decoration-none">Important Terms And Conditions</a></li>
          <li><a href="#Requirements" className="text-decoration-none">Promo Code Wagering Requirements</a></li>
          <li><a href="#Currencies" className="text-decoration-none">Supported Currencies</a></li>
          <li><a href="#FreeSpins" className="text-decoration-none">VIP Programmes At ACR Poker</a></li>
          <li><a href="#Sportsbook" className="text-decoration-none">ACR Poker Platform</a></li>
          <li><a href="#Markets" className="text-decoration-none">ACR Poker Tournaments</a></li>
          <li><a href="#PromoCodesFAQs" className="text-decoration-none">Promo Codes FAQs</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>



      <Footer />
    </div>
    );
};

export default Acr;