import {
  faAtom,
  faCoins,
  faReceipt,
  faSackDollar,
  faUsersBetweenLines,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import '../App.css';
import onwWin from '../assets/ORG_1win4001_36014.svg';
import OneX from '../assets/ORG_1xbet logo1890_17014.svg';
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
                {" "}
                <span>
                  CRYPTO <span className="ninjas">NINJAS</span>
                </span>
              </a>
            </div>
            <nav className="nav">
              <ul>
                <li >
                  <span className="text-center">
                    <FontAwesomeIcon icon={faAtom}  className='icon-nav'/> 
                    <a href="/Promo">Promo Codes</a>
                  </span>
                </li>
                <li>
                  <span className="text-center">
                    <FontAwesomeIcon icon={faReceipt}  className='icon-nav'/> 
                    <a href="">Betting Sites</a>
                  </span>
                </li>

                <li>
                  <span className="text-center">
                    <FontAwesomeIcon icon={faUsersBetweenLines}  className='icon-nav'/> 
                    <a href="/Poker">Poker</a>
                  </span>
                </li>

                <li>
                  <span className="text-center">
                    <FontAwesomeIcon icon={faSackDollar}  className='icon-nav'/> 
                    <a href="">Casinos</a>
                  </span>
                </li>

                <li>
                  <span className="text-center">
                    <FontAwesomeIcon icon={faCoins}  className='icon-nav'/> 
                    <a href="">Currencies</a>
                  </span>
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
