
import '../App.css';
import onwWin from '../assets/ORG_1win4001_36014.svg';
import OneX from '../assets/ORG_1xbet.svg';
import bc from '../assets/ORG_2515_22641.svg';
import bill from '../assets/ORG_billybets-casino-logo2422_21806.svg';
import game from '../assets/ORG_Gamdom logo2710_24394.svg';
import met from '../assets/ORG_MelBet4781_43035.svg';
import razed from '../assets/ORG_razed-logo5431_48891.svg';
import Root from '../assets/ORG_roobet5510_49598.svg';
import stake from '../assets/ORG_stake2726_24544.svg';

const Header = () => {
  return (
    <div>
      <div className="container-fluid header-bg-color">
        <div className="container">


<header className="header">
        <div className="logo">
            <a href="/">
                <span>CRYPTO <span className="ninjas">NINJAS</span></span>
            </a>
        </div>
        <nav className="nav">
            <ul>
                <li className="dropdown">
                    <span className="text-center">
                  
                        <a href="/Promo">   <i className="fa-solid fa-diamond"></i> <br />Promo Codes</a>
                    </span>
                </li>
                <li className="dropdown">
                    <span className="text-center">
                        <a href="/betting"> <i className="fa-solid fa-gear"></i> <br /> Betting Sites</a>
                    </span>

                
                    <div className="dropdown-content mega-menu">
                        <div className="mega-menu-column">
                         
                            <a href="/Promo/Casino/FreeSpins">Esports</a>
                            <a href="/Promo/Casino/DepositBonus">Football</a>
                            <a href="/Promo/Casino/NoDeposit">Tennis</a>
                            <a href="/Promo/Sports/WelcomeBonus">American Football</a>
                            <a href="/Promo/Sports/Cashback">Basketball</a>
                            <a href="/Promo/Poker/SignupBonus">Darts</a>

                        </div>
                        <div className="mega-menu-column">
                         
                            <a href="/Promo/Sports/BoostedOdds">Baseball</a>
                            <a href="/Promo/Poker/Freerolls">Ice Hockey</a>
                            <a href="/Promo/Poker/Rakeback">Boxing</a>
                            <a href="/Promo/Poker/SignupBonus">Golf</a>
                            <a href="/Promo/Poker/Rakeback">F1</a>

                        </div>
                        <div className="mega-menu-column">
                          
                            <a href="/Promo/Poker/Freerolls">UFC & MMA</a>
                            <a href="/Promo/Poker/Rakeback">Horse Racing</a>
                            <a href="/Promo/Poker/SignupBonus">Rugby League</a>
                            <a href="/Promo/Poker/SignupBonus">Cricket</a>
                            <a href="/Promo/Poker/Freerolls">Rugby Union</a>

                        </div>
                      
                    </div>
                </li>
                <li className="dropdown">
                    <span className="text-center">
                        <a href="/Poker"> <i className="fa-solid fa-receipt"></i> <br /> Poker</a>
                    </span>

                </li>
                <li className="dropdown">
                    <span className="text-center">
                        <a href="/Casinos"> <i className="fa-solid fa-cash-register"></i> <br />Casinos</a>
                    </span>
                    <div className="dropdown-content mega-menu">
                        <div className="mega-menu-column">
                         
                            <a href="/Promo/Casino/FreeSpins">Live Dealer</a>
                            <a href="/Promo/Casino/DepositBonus">Blackjack</a>
                        </div>
                        <div className="mega-menu-column">
                         
                            <a href="/Promo/Casino/NoDeposit">Baccarat</a>
                            <a href="/Promo/Sports/WelcomeBonus">Reviews</a>
                        </div>
                        <div className="mega-menu-column">
                          
                            <a href="/Promo/Sports/Cashback">Crash Games</a>
                         
                        </div>
                    </div>
                </li>
                <li className="dropdown">
                    <span className="text-center">
                        <a href="/Currencies"> <i className="fa-solid fa-money-bill-transfer"></i> <br />  Currencies</a>

                    </span>
                    <div className="dropdown-content mega-menu">
                        <div className="mega-menu-column">
                           
                            <a href="/Currencies/Bitcoin">Bitcoin</a>
                            <a href="/Currencies/Ethereum">Ethereum</a>
                            <a href="/Currencies/Litecoin">Litecoin</a>
                                <a href="/Currencies/Tether USD">Tether USD</a>
                                <a href="/Currencies/Ripple">Ripple</a>
                                <a href="/Currencies/BNB">BNB</a>
                                <a href="/Currencies/Dogecoin">Dogecoin</a>
                                <a href="/Currencies/Tron">Tron</a>
                                <a href="/Currencies/Cardano">Cardano</a>
                                <a href="/Currencies/Monero">Monero</a>
                               
                               
                              
                                
                        </div>
                        <div className="mega-menu-column">
                        <a href="/Currencies/EOS">EOS</a>
                        <a href="/Currencies/USD Coin">USD Coin</a>
                                <a href="/Currencies/Shiba Inu">Shiba Inu</a>
                                <a href="/Currencies/Solana">Solana</a>
                                <a href="/Currencies/Terra">Terra</a>
                                <a href="/Currencies/Avalanche">Avalanche</a>
                                <a href="/Currencies/Polkadot">Polkadot</a>
                                <a href="/Currencies/ApeCoin">ApeCoin</a>
                                <a href="/Currencies/Binance USD">Binance USD</a>
                                <a href="/Currencies/Bitcoin Cash">Bitcoin Cash</a>
                        </div>
                        <div className="mega-menu-column">
                        <a href="/Currencies/Cronos">Cronos</a>
                                <a href="/Currencies/Chainlink">Chainlink</a>
                                <a href="/Currencies/CAD Coin">CAD Coin</a>
                                <a href="/Currencies/Borealis">Borealis</a>
                                <a href="/Currencies/The Sandbox">The Sandbox</a>
                        <a href="/Currencies/DAI">DAI</a>
                            <a href="/Currencies/Uniswap">Uniswap</a>
                                <a href="/Currencies/JPY Coin">JPY Coin</a>
                                <a href="/Currencies/Polygon">Polygon</a>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
        <div className="actions">
            <button className="crypto-betting">
                <a href="/cryptoBetting">Crypto Betting</a>
            </button>
        </div>
    </header>


        </div>
      </div>
      <div className="container-fluid icon-bg-color">
        <div className="container">
          <div className="icons-bar">
            <div className="icon">
              <span className="badge">1</span>
              <a href="https://stake.com/?c=newbonus">
                <img src={stake} alt="" />
              </a>
            </div>
            <div className="icon">
              <span className="badge">2</span> 
              <a href="https://1xlite-088578.top/en?tag=d_470241m_97c_NEWBONUS">
                <img src={OneX} alt="" />
              </a>
            </div>
            <div className="icon">
              <span className="badge">3</span> 
              <a href="https://bc.game/bn/?stag=12184_679ebd3b4473d0ffd5c0c66b&i=4cxse6dr">
                <img src={bc} alt="" />
              </a>
            </div>
            <div className="icon">
              <span className="badge">4</span> 
              <a href="https://gamdom.com/landing?aff=newbonus">
                <img src={game} alt="" />
              </a>
            </div>
            <div className="icon">
              <span className="badge">5</span> 
              <a href="https://melbet-516558.top/en?tag=d_2297877m_45415c_Newbonus">
                <img src={met} alt="" />
              </a>
            </div>
            <div className="icon">
              <span className="badge">6</span> 
              <a href="https://roobet.com/en/welcome?aff=newbonus">
                <img src={Root} alt="" />
              </a>
            </div>

            <div className="icon">
              <span className="badge">7</span> 
              <a href="https://bill.com/en/welcome?aff=newbonus">
                <img src={bill} alt="" />
              </a>
            </div>


            <div className="icon">
              <span className="badge">8</span> 
              <a href="https://razed.com/en/welcome?aff=newbonus">
                <img src={razed} alt="" />
              </a>
            </div>


            <div className="icon">
              <span className="badge">9</span> 
              <a href="https://1win4001.com/en/welcome?aff=newbonus">
                <img src={onwWin} alt="" />
              </a>
            </div>

            <div className="icon text-center">
              <a href="">See all</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
