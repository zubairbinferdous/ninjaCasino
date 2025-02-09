
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking a link
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <div>
      <div className="container-fluid header-bg-color">
        <div className="container">


        <header className="header">
      {/* Toggle Menu Button */}
      <div className="toggle-menu" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>

      {/* Side Navigation Menu */}
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}>&times;</button>
        <nav>
          <ul>
            <li>
              <Link to="/Promo" onClick={closeMenu}>
                <i className="fa-solid fa-diamond"></i> Promo Codes
              </Link>
            </li>
            <li>
              <Link to="/betting" onClick={closeMenu}>
                <i className="fa-solid fa-gear"></i> Betting Sites
              </Link>
            </li>
            <li>
              <Link to="/Poker" onClick={closeMenu}>
                <i className="fa-solid fa-receipt"></i> Poker
              </Link>
            </li>
            <li>
              <Link to="/Casinos" onClick={closeMenu}>
                <i className="fa-solid fa-cash-register"></i> Casinos
              </Link>
            </li>
            <li>
              <Link to="/Currencies" onClick={closeMenu}>
                <i className="fa-solid fa-money-bill-transfer"></i> Currencies
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Logo */}
      <div className="logo">
        <Link to="/">
          <span>CRYPTO <span className="ninjas">NINJAS</span></span>
        </Link>
      </div>

      {/* Normal Navigation (Hidden on Mobile) */}
      <nav className="nav">
        <ul>
          <li className="dropdown">
            <span className="text-center">
              <Link to="/Promo">
                <i className="fa-solid fa-diamond"></i> <br />Promo Codes
              </Link>
            </span>
          </li>
          <li className="dropdown">
            <span className="text-center">
              <Link to="/betting">
                <i className="fa-solid fa-gear"></i> <br /> Betting Sites
              </Link>
            </span>
          </li>
          <li className="dropdown">
            <span className="text-center">
              <Link to="/Poker">
                <i className="fa-solid fa-receipt"></i> <br /> Poker
              </Link>
            </span>
          </li>
          <li className="dropdown">
            <span className="text-center">
              <Link to="/Casinos">
                <i className="fa-solid fa-cash-register"></i> <br />Casinos
              </Link>
            </span>
          </li>
          <li className="dropdown">
            <span className="text-center">
              <Link to="/Currencies">
                <i className="fa-solid fa-money-bill-transfer"></i> <br /> Currencies
              </Link>
            </span>
          </li>
        </ul>
      </nav>

      {/* Action Button */}
      <div className="actions">
        <button className="crypto-betting">
          <Link to="/cryptoBetting">Crypto Betting</Link>
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
              <a href="/Casinos">See all</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
