import React from "react";
import "../App.css";
import bg from "../assets/cryto_bg.webp";
import oneWin from "../assets/ORG_1win4001_36014.svg";
import xbet from "../assets/ORG_1xbet.svg";
import oneXbit from "../assets/ORG_1xbit1956_17612.svg";
import bcgame from "../assets/ORG_2515_22641.svg";
import gamdom from "../assets/ORG_Gamdom logo2710_24394.svg";
import melbet from "../assets/ORG_MelBet4781_43035.svg";
import pinnacle from "../assets/ORG_Pinnacle2223_20016.svg";
import shuffle from "../assets/ORG_Sportaza3214_28934.svg";
import sportsbet from "../assets/ORG_Sportsbet.io3524_31724.svg";
import stake from "../assets/ORG_stake2726_24544.svg";
import thunderpick from "../assets/ORG_Thunderpick logo4610_41502.svg";
import vave from "../assets/ORG_Vave3911_35207.svg";
import Footer from "./Footer";
import Header from "./Header";

const CryptoBeting = () => {
  return (
    <div>
      <Header></Header>
      <div className="container my-4">
        
        <div className="text-start text-white bg-dark p-5 rounded d-flex justify-content-between">
          <div className="">
            <p className="text-uppercase small">Betting Sites</p>
            <h1 className="fw-bold">Crypto Betting Sites</h1>
            <p>
              We've ranked rated and reviewed all the major crypto betting sites
            to give you a list of the trusted sites for sports betting using
            cryptocurrencies.
          </p>
          </div>
          <img src={bg} alt="" />
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="casino-bg p-3 mb-3 border-warning d-flex justify-content-between">
              <div className="d-flex promo-area">
                <img src={stake} className="me-3" alt="Stake Logo" />
                <div className="promo-areaa ms-3">
                  <h5 className="fw-bold mb-1">Deposit $1500 Get $3000</h5>
                  <p>
                    Use promo code: <strong>NEWBONUS</strong>
                  </p>
                  <ul>
                    <li>
                      World’s biggest crypto betting site with a huge welcome
                      bonus and excellent VIP Program.
                    </li>
                    <li>
                      Stake accepts all major crypto currencies as well as fiat
                      including Japanese Yen, Brazilian Real, Canadian Dollars,
                      Indian Rupees, and more.
                    </li>
                    <li>
                      Exclusive games, $50,000 Leaderboard Race, Daily
                      Promotions & Cashback Offers.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="coin-rating">
                <span className="fw-bold text-warning">
                  {" "}
                  <span className="fw-boldd">9.9</span> <br /> ★★★★★
                </span>
              </div>
              <div className="mt-2 button-area">
                <a href="https://stake.com/en/welcome-bonus"> visit stake</a>
              </div>
            </div>

            {/* 1xBet Section */}
            <div className="casino-bg p-3 mb-3 border-warning d-flex justify-content-between">
              <div className="d-flex promo-area">
                <img src={xbet} className="me-3" alt="1xBet Logo" />
                  <div className="promo-areaa ms-3">
                  <h5 className="fw-bold mb-1">Bet 10,000 Get 10,000 BDT</h5>
                  <p>
                    Use promo code: <strong>NEWBONUS</strong>
                  </p>
                  <ul>
                    <li>
                      1xbet is a world-leading sports betting site with top
                      odds, a range of markets, and live streaming.
                    </li>
                    <li>
                      Unrivalled promotions including daily boosts, cashback,
                      and win sports cars.
                    </li>
                    <li>
                      All the cryptocurrencies as deposit and withdrawal
                      options. Supports anonymous registration.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="coin-rating">
                <span className="fw-bold text-warning">
                  {" "}
                  <span className="fw-boldd">9.8</span> <br /> ★★★★★
                </span>
              </div>
              <div className="mt-2 button-area">
                <a href="https://1xbet.com"> visit 1xbet</a>
              </div>
            </div>

            {/* BC.Game Section */}
            <div className="casino-bg p-3 mb-3 border-warning d-flex justify-content-between">
              <div className="d-flex promo-area">
                <img src={bcgame} className="me-3" alt="BC.Game Logo" />
                <div className="promo-areaa ms-3">
                  <h5 className="fw-bold mb-1">$20,000</h5>
                  <p>
                    Use promo code: <strong>NEWBONUS</strong>
                  </p>
                  <ul>
                    <li>
                      BC.Game accepts a huge number of crypto currencies
                      including firm favourites like Bitcoin, Ethereum,
                      Litecoin.
                    </li>
                    <li>
                      Fully licensed by the Curacao government. Sponsors of
                      Argentina National Football Team and esports team Cloud9.
                    </li>
                    <li>
                      No KYC. Get up to 780% in welcome bonuses with a four-part
                      rewards system for your first four deposits.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="coin-rating">
                <span className="fw-bold text-warning">
                  {" "}
                  <span className="fw-boldd">9.6</span> <br /> ★★★★☆
                </span>
              </div>
              <div className="mt-2 button-area">
                <a href="https://bc.game"> visit bc.game</a>
              </div>
            </div>


             {/* 1. 1win */}
      <div className="casino-bg p-3 mb-3 border-warning d-flex justify-content-between">
        <div className="d-flex promo-area ">
          <img src={oneWin} className="me-3" alt="1Win Logo" />
          <div className="promo-areaa ms-3">
            <h5 className="fw-bold mb-1 ">Claim the Max Free Bet $1025</h5>
            <p>Use promo code: <strong>NEWBONUS</strong></p>
            <ul>
              <li>1win is a leading betting site with millions of customers.</li>
              <li>Accepts Bitcoin, Ethereum, Litecoin, Tether, and more.</li>
              <li>Fast payouts to your crypto wallet.</li>
            </ul>
          </div>
        </div>
        <div className="coin-rating">
          <span className="fw-bold text-warning"><span className="fw-boldd">9.6</span> <br /> ★★★★☆</span>
        </div>
        <div className="mt-2 button-area"><a href="https://1win.com"> visit onewin</a></div>
      </div>

      {/* 2. Gamdom */}
      <div className="casino-bg p-3 mb-3 border-warning d-flex justify-content-between">
        <div className="d-flex promo-area">
          <img src={gamdom} className="me-3" alt="Gamdom Logo" />
          <div className="promo-areaa ms-3">
            <h5 className="fw-bold mb-1">Rewards 2.0 Enabled</h5>
            <p>Use promo code: <strong>NEWBONUS</strong></p>
            <ul>
              <li>One of the original crypto esports betting sites.</li>
              <li>Up to 60% rakeback when using the promo code.</li>
              <li>Huge prize pools through King of the Hill leaderboard.</li>
            </ul>
          </div>
        </div>
        <div className="coin-rating">
          <span className="fw-bold text-warning"><span className="fw-boldd">9.5</span> <br /> ★★★★☆</span>
        </div>
        <div className="mt-2 button-area"><a href="https://gamdom.com"> visit gamdom</a></div>
      </div>

      {/* 3. Sportsbet */}
      <div className="casino-bg p-3 mb-3 border-warning d-flex justify-content-between">
        <div className="d-flex promo-area">
          <img src={sportsbet} className="me-3" alt="Sportsbet Logo" />
              <div className="promo-areaa ms-3">
            <h5 className="fw-bold mb-1">Leading Sportsbook</h5>
            <p>Immediate Bonuses</p>
            <ul>
              <li>One of the top crypto sportsbooks and online casinos.</li>
              <li>Accepts Bitcoin, Ethereum, Litecoin, and more.</li>
              <li>Up to 100,000 USDT in weekly bonuses.</li>
            </ul>
          </div>
        </div>
        <div className="coin-rating">
          <span className="fw-bold text-warning"><span className="fw-boldd">9.3</span> <br /> ★★★★☆</span>
        </div>
        <div className="mt-2 button-area"><a href="https://sportsbet.io"> visit sportsbet</a></div>
      </div>

            <div className="casino-bg p-3 mb-3 border-warning d-flex justify-content-between">
        <div className="d-flex promo-area">
          <img src={pinnacle} className="me-3" alt="Pinnacle Logo" />
          <div className="promo-areaa ms-3">
            <h5 className="fw-bold mb-1">Biggest Betting Limits</h5>
            <p>Use promo code: <strong>NEWBONUS</strong></p>
            <ul>
              <li>Deposit via 30+ cryptocurrencies or fiat payment methods.</li>
              <li>Accepts Bitcoin, Ethereum, Litecoin, Dogecoin, USD Coin, Tron & more.</li>
              <li>Unlimited bet stakes and highest sportsbook odds.</li>
            </ul>
          </div>
        </div>
        <div className="coin-rating">
          <span className="fw-bold text-warning"><span className="fw-boldd">9.0</span> <br /> ★★★★☆</span>
        </div>
        <div className="mt-2 button-area"><a href="https://pinnacle.com"> visit pinnacle</a></div>
      </div>

      {/* 2. Shuffle */}
      <div className="casino-bg p-3 mb-3 border-warning d-flex justify-content-between">
        <div className="d-flex promo-area">
          <img src={shuffle} className="me-3" alt="Shuffle Logo" />
          <div className="promo-areaa ms-3">
            <h5 className="fw-bold mb-1">Deposit $1,000 Get $1,000</h5>
            <p>Use promo code: <strong>MAXBONUS</strong></p>
            <ul>
              <li>Newly launched crypto betting site with casino games & poker.</li>
              <li>Focuses on best crypto casino & sports betting experience.</li>
              <li>Shuffle coin available to buy via the official site.</li>
            </ul>
          </div>
        </div>
        <div className="coin-rating">
          <span className="fw-bold text-warning"><span className="fw-boldd">8.9</span> <br /> ★★★★☆</span>
        </div>
        <div className="mt-2 button-area"><a href="https://shuffle.com"> visit shuffle</a></div>
      </div>

      {/* 3. Thunderpick */}
      <div className="casino-bg p-3 mb-3 border-warning d-flex justify-content-between">
        <div className="d-flex promo-area">
          <img src={thunderpick} className="me-3" alt="Thunderpick Logo" />
          <div className="promo-areaa ms-3">
            <h5 className="fw-bold mb-1">Deposit €600 Get €600</h5>
            <p>Use promo code: <strong>NEWBONUS</strong></p>
            <ul>
              <li>Deposit & withdraw using all major crypto coins.</li>
              <li>Participate in weekly races & giveaways.</li>
              <li>Over 3000 casino games & top sportsbook odds.</li>
            </ul>
          </div>
        </div>
        <div className="coin-rating">
          <span className="fw-bold text-warning"><span className="fw-boldd">8.7</span> <br /> ★★★★☆</span>
        </div>
        <div className="mt-2 button-area"><a href="https://thunderpick.com"> visit thunderpick</a></div>
      </div>

      {/* 4. Vave */}
      <div className="casino-bg p-3 mb-3 border-warning d-flex justify-content-between">
        <div className="d-flex promo-area">
          <img src={vave} className="me-3" alt="Vave Logo" />
          <div className="promo-areaa ms-3">
            <h5 className="fw-bold mb-1">Up to 1BTC Free</h5>
            <p>Use promo code: <strong>NEWBONUS</strong></p>
            <ul>
              <li>Fast, secure & anonymous transactions.</li>
              <li>No KYC required for betting with full privacy.</li>
              <li>Bet on 35+ sports & 4000+ games.</li>
            </ul>
          </div>
        </div>
        <div className="coin-rating">
          <span className="fw-bold text-warning"><span className="fw-boldd">9.3</span> <br /> ★★★★☆</span>
        </div>
        <div className="mt-2 button-area"><a href="https://vave.com"> visit vave</a></div>
      </div>

      {/* 5. 1xBit */}
      <div className="casino-bg p-3 mb-3 border-warning d-flex justify-content-between">
        <div className="d-flex promo-area">
          <img src={oneXbit} className="me-3" alt="1xBit Logo" />
          <div className="promo-areaa ms-3">
            <h5 className="fw-bold mb-1">7 BTC Bonus</h5>
            <p>Use promo code: <strong>NEWBONUS</strong></p>
            <ul>
              <li>Bet using Bitcoin, Ethereum & Dogecoin.</li>
              <li>Bet against fellow bettors in exchange mode.</li>
              <li>Trade bets on financial markets.</li>
            </ul>
          </div>
        </div>
        <div className="coin-rating">
          <span className="fw-bold text-warning"><span className="fw-boldd">9.2</span> <br /> ★★★★☆</span>
        </div>
        <div className="mt-2 button-area">
          <a href="https://1xbit.com"> visit 1xbit</a>
        </div>
      </div>

      {/* 6. Melbet */}
      <div className="casino-bg p-3 mb-3 border-warning d-flex justify-content-between">
        <div className="d-flex promo-area">
          <img src={melbet} className="me-3" alt="Melbet Logo" />
          <div className="promo-areaa ms-3">
            <h5 className="fw-bold mb-1">$130 Bonus - 30% Extra</h5>
            <p>Use promo code: <strong>NEWBONUS</strong></p>
            <ul>
              <li>Large sportsbook, casino & bingo platform.</li>
              <li>Supports 30+ cryptocurrencies for transactions.</li>
              <li>Fast withdrawals using all crypto methods.</li>
            </ul>
          </div>
        </div>
        <div className="coin-rating">
          <span className="fw-bold text-warning"><span className="fw-boldd">9.0</span> <br /> ★★★★☆</span>
        </div>
        <div className="mt-2 button-area"><a href="https://melbet.com"> visit melbet</a></div>
      </div>



          </div>
        </div>
      </div>

      <div className="container content-area my-4">
        <div className="row">
          <div className="row mt-4">
            <div className="col-md-8">
              <h3 className="fw-bold" id="the-top-crypto-betting-sites">The Top Crypto Betting Sites</h3>
              <p>
                We've taken a look at the best crypto bookmakers and rated them
                based on a number of factors. From highest odds to live
                streaming, and from market choice to offers and promotions, we
                rank the best from the rest.
              </p>

              <h3 className="fw-bold" id="crypto-betting-sites">Crypto Betting Sites</h3>
              <p>
                Some of the world's biggest and best bookmakers allow you to
                play with crypto and you can join the increasingly popular world
                of online betting within seconds.
              </p>
              <p>
                Here at Crypto Ninjas, we are constantly assessing just what
                each of the crypto betting sites offer punters. You want to bet
                with trusted crypto bookmakers, who offer the biggest odds,
                promotions and the opportunity to watch live sport or racing
                streams while betting ...and we rank the best from the rest with
                our guide to the best crypto betting sites.
              </p>
              <p>
                The list of crypto online bookmakers above provides a rating and
                a link to bookmaker reviews for you to choose the perfect best
                betting sites for your punting needs. From placing a bet to
                cashing out, and payment methods to the features the betting
                websites, we provide you with a comprehensive verdict on which
                crypto betting sites stand out from the crowd.{" "}
              </p>
              <p>
                All crypto betting sites we feature have been tested and are
                trusted. You can rest assured that you are betting with
                bookmakers who provide a first class services, the best odds
                available and the quickest and easiest ways to get your wagers
                on.
              </p>

              <h3 className="fw-bold">
                Crypto Betting Sites v Normal Sites: Key Differences
              </h3>
              <p>
                There are a few key differences between regular sports betting
                sites and crypto betting sites.{" "}
              </p>
              <p>
                Most obviously crypto sports betting sites accept
                cryptocurrencies like Bitcoin to place wagers on sportsbook
                markets. Since cryptocurrencies were first introduced to the
                world, ever more businesses have been taking these virtual
                currencies as a form of payment. Today, all sports betting sites
                that operate in regions where crypto is permitted as a form of
                payment tend to offer it as a deposit and withdrawal option.
                Some of these crypto enabled sites are among the most popular
                sports betting sites all around the world.{" "}
              </p>
              <p>
                When choosing a crypto sportsbook we recommend that you ensure
                that the site you choose offers end-to-end crypto. By this we
                mean that if you deposit in a cryptocurrency you can bet in that
                and withdraw your winnings in that currency. If a sportsbook
                allows you to deposit in a currency and then converts to fiat
                and then converts back on withdrawal you will lose out on the
                currency exchange.
              </p>
              <p>
                There is an additional feature of crypto sports betting sites
                that is good to mention. Anonymity. Many crypto betting sites
                allow you to sign up using a number and password that they
                allocate to you without an email address. Depending on where you
                live, and if you think your email could be intercepted, this
                could be helpful.
              </p>
              <p>
                As you can see there are various considerations when choosing a
                crypto betting site. We hope that your crypto sports betting
                experience will be profitable as possible, but always remember
                to only bet with sums that you can afford and always take the
                time to stop and think about the sums you are playing with.
                Sports betting should be enjoyable and should be to enhance your
                enjoyment of sports. It should never be something that you do to
                make money. If you find yourself chasing losses or trying to
                make money from sports betting you should stop immediately and
                seek professional
              </p>

              <h3 className="fw-bold" id="top-crypto-betting-sites"   >Top Crypto Betting Sites</h3>
              <ul>
                <li>Stake.com</li>
                <li>BC.Game</li>
                <li>Sportsbet.io</li>
                <li>Shuffle</li>
                <li>Gamdom</li>
                <li>Razed</li>
                <li>1xbet</li>
                <li>Vave</li>
                <li>1xbit</li>
                <li>Melbet</li>
                <li>Sportbet.one</li>
                <li>Linebet</li>
                <li>Paripesa</li>
                <li>20Bet</li>
                <li>Mystake.com</li>
                <li>Wild.io</li>
                <li>BetPanda</li>
                <li>Ivibet</li>
              </ul>

              <h3 className="fw-bold" id="crypto-betting-site-reviews">Crypto Betting Site Reviews</h3>
              <p>
                Crypto betting site reviews are one of the most important tools
                that should be used when deciding where to spend your
                hard-earned crypto funds.
              </p>
              <p>
                Using reviews like our own, you can make sure you know exactly
                what to expect from a crypto sports site before even looking at
                their website. This can save you time and money and can make
                sure you find the best site for your specific requirements much
                sooner.
              </p>
              <p>
                Within our reviews, you will find sections that are dedicated to
                the most important criteria, such as the quality of bonuses, the
                generosity of the odds, the cryptocurrencies that are accepted,
                and even the efficiency of the site’s customer support team.
              </p>

              <h3 className="fw-bold" id="football">Football</h3>
              <p>
                One of the most consistently and commonly wagered sports around
                the world is football. <br />
                When it comes to football betting, there is such a large number
                of markets that can be wagered on that doing so will never
                become boring. <br />
                Popular football markets include “outright winner”, “goals
                scored”, “handicaps”, and markets for the first half and second
                half separately. <br />
                Some of the most popular competitions to bet on when it comes to
                football include the World Cup, the Champions League, the
                English Premier League, Ligue 1 and La Liga.
              </p>

              <h3 className="fw-bold" id="tennis">Tennis</h3>
              <p>
                Tennis is another sport that has consistently remained one of
                the most popular sports to wager on around the world. <br />
                If you’re a regular tennis wagering enthusiast, you’ll know that
                the most popular betting markets within tennis include the
                match-winner, score handicaps, the total number of sets in a
                match, the total number of games in a match and outright
                tournament winners. <br />
                There are many popular tennis tournaments that take place
                annually across the globe, but you’ll find that the ones that
                are most often wagered on include Wimbledon, the US Open, the
                French Open, the Australian Open, the WTP Finals and the ATP
                Finals
              </p>

              <h3 className="fw-bold" id="american-football">American Football</h3>
              <p>
                With over a million high school kids participating, American
                Football is the most popular sport in the United States. The
                sport's major competition is the National Football League (NFL),
                which is headquartered in the United States but also covers
                Canada. <br />
                With so much going on in this sport, there is a large number of
                markets that gamblers can wager their crypto on, including
                “spreads”, “match-winners”, “scores”, “team props” and “player
                props”. <br />
                While the NFL itself is a very enjoyable competition to bet on,
                nothing beats wagering a few Bitcoins on the Superbowl, which
                takes place at the end of each NFL season
              </p>

              <h3 className="fw-bold" id="basketball">Basketball</h3>
              <p>
                Since basketball was invented back in 1891, hundreds of
                professional basketball leagues have been established around the
                world.
                <br />
                While playing the sport tends to be exclusive to taller people,
                gambling on the sport is certainly for everyone - everyone over
                the legal gambling age, of course.
                <br />
                “Match winner”, “total spread”, “total points” and “individual
                performances” are the most common basketball markets to wager
                on. In terms of leagues and competitions, there’s no arguing
                that the NBA in America is the first league to look at.
              </p>

              <h3 className="fw-bold" id="baseball"   >Baseball</h3>
              <p>
                Major League Baseball (MLB) in America receives the most
                exposure, although baseball is played at various levels across
                the globe.
                <br />
                While baseball rules might be confusing, particularly for
                beginners, wagering on the sport with crypto remains simple
                thanks to the many possible betting markets.
                <br />
                These betting markets include “outright winner”, of course, as
                well as “run markets”, “first home run”, “inning props” and
                “player props”. If there’s one competition to try your luck on,
                it should be the World Series.
              </p>

              <h3 className="fw-bold" id="hockey">Hockey</h3>
              <p>
                While hockey is certainly played all around the world, it was
                certainly the Canadians that pioneered the sport and raised it
                to where it is today.
                <br />
                Ice hockey, in general, has fewer scoring plays than many other
                sports. However, there are certainly enough markets to keep you
                busy at crypto hockey betting sites.
                <br />
                If you’re new to gambling on hockey, you might be interested to
                know that “Moneyline”, “handicap”, “exact score” and
                “over/under” goals are the most popular markets to bet on. The
                biggest hockey tournament to bet on could well be the Hockey
                World Cup.
              </p>

              <h3 className="fw-bold" id="boxing">Boxing</h3>
              <p>
                Boxing is one of those sports where if there’s a big event
                happening anywhere in the world, absolutely everybody will know
                about it. Whether the fight itself is in Las Vegas, London or
                Dubai, the world will stop to watch it.
                <br />
                The energy of the sport immediately translates to the
                sportsbooks, with millions of gamblers heading online and
                getting their crypto wallets out.
                <br />
                The most popular markets to wager on most definitely include the
                outright match-winner, how the match will be decided and which
                round the match will be won in. When it comes to which fights to
                wager on, you seriously can’t go wrong, but look out for the
                title fights in particular.
              </p>

              <h3 className="fw-bold" id="golf">Golf</h3>
              <p>
                Golf wagering remains one of the best and most popular
                activities throughout the globe.
                <br />
                According to golfing players and experts, it is one of the
                finest sports for huge profits because of the exceptionally high
                odds available, especially when predicting tournament champions.
                <br />
                The top market for betting is easily tournament winners, however
                “head-to-head”, “round leader”, “prop” and “futures” bets can
                also be very profitable. If you’re waiting for a big tournament
                to bet your crypto on, look no further than the PGA Tour.
              </p>

              <h3 className="fw-bold" id="crypto-betting-sites-faqs" >Crypto Betting Sites - FAQs</h3>
              <div className="border-bottom pb-3 mb-3">
                <h5 className="fw-bold">What Is A Crypto Betting Site?</h5>
                <p>
                  There is just one little distinction between traditional
                  sports betting and cryptocurrency sports betting. This
                  particular is the capability of making bets on sportsbook
                  marketplaces using cryptocurrencies like Bitcoin. <br />
                  More and more companies are accepting cryptocurrencies as a
                  means of payment ever since they were first made available to
                  the public. The gaming business is not any different in this
                  regard.
                </p>
              </div>
              <div className="border-bottom pb-3 mb-3">
                <h5 className="fw-bold">
                  What Are The Most Popular Sports For Wagering Crypto?
                </h5>
                <p>
                  The most popular sports for wagering cryptocurrencies on
                  depend on the region but are typically very similar to those
                  that are popular at standard online sportsbooks.
                  <br />
                  Football, horse racing, cricket, boxing, tennis, American
                  football and golf are all included, however one small
                  difference is that eSports is a little more popular on crypto
                  betting sites, likely due to the virtual nature of both
                  elements.
                </p>
              </div>
              <div>
                <h5 className="fw-bold">
                  What Are The Most Popular Cryptos For Sports Betting?
                </h5>
                <p>
                  The most popular cryptocurrencies for sports betting are the
                  big two - Bitcoin and Etherurm - as well as some of the more
                  popular altcoins like Litecoin, Dogecoin and Binance. <br />
                  Tethered coins are some of the safer cryptos to gamble with as
                  they do not fluctuate in value as much as other cryptos. This
                  safer gaming does mean you could miss out on making much more
                  money if your choice of crypto is on the rise, though.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 border rounded bg-light bg-menu sticky-top">
                {/* <h5 className="fw-bold">Navigation</h5> */}
                <ul className="list-unstyled">

                  <li>
                    <a href="#the-top-crypto-betting-sites" className="text-decoration-none">
                      The Top Crypto Betting Sites
                    </a>
                  </li>
                  <li>
                    <a href="#crypto-betting-sites " className="text-decoration-none">
                      Crypto Betting Sites
                    </a>
                  </li>

                  <li>
                    <a href="#top-crypto-betting-sites" className="text-decoration-none">
                      Top Crypto Betting Sites
                    </a>
                  </li>
                  <li>
                    <a href="#crypto-betting-site-reviews " className="text-decoration-none">
                      Crypto Betting Site Reviews
                    </a>
                  </li>
                  <li>
                    <a href="#football" className="text-decoration-none">
                      Football
                    </a>
                  </li>
                  <li>
                    <a href="#tennis" className="text-decoration-none">
                      Tennis
                    </a>
                  </li>
                  <li>
                    <a href="#american-football" className="text-decoration-none">
                      American Football
                    </a>
                  </li>
                  <li>
                    <a href="#basketball" className="text-decoration-none">
                      Basketball
                    </a>
                  </li>
                  <li>
                    <a href="#baseball" className="text-decoration-none">
                      Baseball
                    </a>
                  </li>
                  <li>
                    <a href="#hockey" className="text-decoration-none">
                      Hockey
                    </a>
                  </li>
                  <li>
                    <a href="#boxing" className="text-decoration-none">
                      Boxing
                    </a>
                  </li>
                  <li>
                    <a href="#golf" className="text-decoration-none">
                      Golf
                    </a>
                  </li>
                  <li>
                    <a href="#crypto-betting-sites-faqs" className="text-decoration-none">
                      Crypto Betting Sites - FAQs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CryptoBeting;
