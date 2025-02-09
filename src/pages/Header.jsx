import { useState } from 'react';
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
import '../header.css';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <div>
      <div className="container-fluid header-bg-color">
        <div className="container">
          <header className="header">
            {/* Toggle Menu Button */}
          

            {/* Sidebar Menu with Dropdown Mega Menu */}
            <div className={`sidebar-menu ${isSidebarOpen ? "open" : ""}`}>
              <button className="close-btn" onClick={closeSidebar}>✖</button>
              <ul>
                <li><a href="/Promo">Promo Codes</a></li>
                <li onClick={() => toggleDropdown("betting")}>
                  Betting Sites <span className="dropdown-arrow">▼</span>
                  {dropdownOpen === "betting" && (
                    <ul className="sub-menu show">
                      <li><a href="/Football">Football</a></li>
                      <li><a href="/Tennis">Tennis</a></li>
                      <li><a href="/AmericanFootball">American Football</a></li>
                      <li><a href="/Basketball">Basketball</a></li>
                      <li><a href="/Darts">Darts</a></li>
                    </ul>
                  )}
                </li>
                <li><a href="/Poker">Poker</a></li>
                <li onClick={() => toggleDropdown("casinos")}>
                  Casinos <span className="dropdown-arrow">▼</span>
                  {dropdownOpen === "casinos" && (
                    <ul className="sub-menu show">
                      <li><a href="/Dealer">Live Dealer</a></li>
                      <li><a href="/Blackjack">Blackjack</a></li>
                      <li><a href="/Baccarat">Baccarat</a></li>
                      <li><a href="/Reviews">Reviews</a></li>
                      <li><a href="/CrashGames">Crash Games</a></li>
                    </ul>
                  )}
                </li>
                <li onClick={() => toggleDropdown("currencies")}>
                  Currencies <span className="dropdown-arrow">▼</span>
                  {dropdownOpen === "currencies" && (
                    <ul className="sub-menu show">
                      <li><a href="/Bitcoin">Bitcoin</a></li>
                      <li><a href="/Ethereum">Ethereum</a></li>
                      <li><a href="/Litecoin">Litecoin</a></li>
                      <li><a href="/Tether">Tether</a></li>
                      <li><a href="/BNB">BNB</a></li>
                      <li><a href="/Dogecoin">Dogecoin</a></li>
                      <li><a href="/Tron">Tron</a></li>
                      <li><a href="/EOS">EOS</a></li>
                      <li><a href="/Solana">Solana</a></li>
                      <li><a href="/SHIBA">Shiba Inu</a></li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>

            <div className="logo d-flex justify-content-between">
            <div className="toggle-menu" onClick={toggleSidebar}>
              <i className="fa-solid fa-bars"></i>
            </div>
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
                         
                            <a href="/Football">Football</a>
                            <a href="/Tennis">Tennis</a>
                            <a href="/AmericanFootball">American Football</a>
                            <a href="/Basketball">Basketball</a>
                            <a href="/Darts">Darts</a>

                        </div>
                        <div className="mega-menu-column">

                            <a href="/Baseball">Baseball</a>
                            <a href="/IceHockey">Ice Hockey</a>
                            <a href="/Boxing">Boxing</a>
                            <a href="/Golf">Golf</a>
                          

                        </div>
                        <div className="mega-menu-column">
                          
                            <a href="/UFC">UFC & MMA</a>
                            <a href="/HorseRacing">Horse Racing</a>
                            <a href="/RugbyLeague">Rugby League</a>
                            <a href="/Cricket">Cricket</a>
                            

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
                         
                            <a href="/Dealer">Live Dealer</a>
                            <a href="/Blackjack">Blackjack</a>
                        </div>
                        <div className="mega-menu-column">
                         
                            <a href="/Baccarat">Baccarat</a>
                            <a href="/Reviews">Reviews</a>
                        </div>
                        <div className="mega-menu-column">
                          
                            <a href="/CrashGames">Crash Games</a>
                         
                        </div>
                    </div>
                </li>


                <li className="dropdown">
                    <span className="text-center">
                        <a href="/Currencies"> <i className="fa-solid fa-money-bill-transfer"></i> <br />  Currencies</a>

                    </span>
                    <div className="dropdown-content mega-menu">
                        <div className="mega-menu-column">                          
                            <a href="/Bitcoin">Bitcoin</a>
                            <a href="/Ethereum">Ethereum</a>
                            <a href="/Litecoin">Litecoin</a>
                            <a href="/Tether">Tether</a>                             
                        </div>
                        <div className="mega-menu-column">                       
                            <a href="/BNB">BNB</a>
                            <a href="/Dogecoin">Dogecoin</a>
                            <a href="/Tron">Tron</a>        
                        </div>
                        <div className="mega-menu-column">
                            <a href="/EOS">EOS</a>
                            <a href="/Solana">Solana</a>
                            <a href="/SHIBA">Shiba Inu</a>                             
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
            <div className="mobile-data d-flex ">
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




// import { useState } from 'react';
// import '../App.css';
// import onwWin from '../assets/ORG_1win4001_36014.svg';
// import OneX from '../assets/ORG_1xbet.svg';
// import bc from '../assets/ORG_2515_22641.svg';
// import bill from '../assets/ORG_billybets-casino-logo2422_21806.svg';
// import game from '../assets/ORG_Gamdom logo2710_24394.svg';
// import met from '../assets/ORG_MelBet4781_43035.svg';
// import razed from '../assets/ORG_razed-logo5431_48891.svg';
// import Root from '../assets/ORG_roobet5510_49598.svg';
// import stake from '../assets/ORG_stake2726_24544.svg';
// import '../header.css';
// const Header = () => {

//   return (
//     <div>
//       <div className="container-fluid header-bg-color">
//         <div className="container">
//         <header className="header">


//         <div className="toggle-menu">
//             <i className="fa-solid fa-bars"></i>
//         </div>


//         <div className="logo">
//             <a href="/">
//                 <span>CRYPTO <span className="ninjas">NINJAS</span></span>
//             </a>
//         </div>
        // <nav className="nav">
        //     <ul>
        //         <li className="dropdown">
        //             <span className="text-center">
                  
        //                 <a href="/Promo">   <i className="fa-solid fa-diamond"></i> <br />Promo Codes</a>
        //             </span>
        //         </li>
        //         <li className="dropdown">
        //             <span className="text-center">
        //                 <a href="/betting"> <i className="fa-solid fa-gear"></i> <br /> Betting Sites</a>
        //             </span>

                
        //             <div className="dropdown-content mega-menu">
        //                 <div className="mega-menu-column">
                         
        //                     <a href="/Football">Football</a>
        //                     <a href="/Tennis">Tennis</a>
        //                     <a href="/AmericanFootball">American Football</a>
        //                     <a href="/Basketball">Basketball</a>
        //                     <a href="/Darts">Darts</a>

        //                 </div>
        //                 <div className="mega-menu-column">
                         
        //                     <a href="/Baseball">Baseball</a>
        //                     <a href="/IceHockey">Ice Hockey</a>
        //                     <a href="/Boxing">Boxing</a>
        //                     <a href="/Golf">Golf</a>
                          

        //                 </div>
        //                 <div className="mega-menu-column">
                          
        //                     <a href="/UFC">UFC & MMA</a>
        //                     <a href="/HorseRacing">Horse Racing</a>
        //                     <a href="/RugbyLeague">Rugby League</a>
        //                     <a href="/Cricket">Cricket</a>
                            

        //                 </div>
                      
        //             </div>
        //         </li>
        //         <li className="dropdown">
        //             <span className="text-center">
        //                 <a href="/Poker"> <i className="fa-solid fa-receipt"></i> <br /> Poker</a>
        //             </span>

        //         </li>


        //         <li className="dropdown">
        //             <span className="text-center">
        //                 <a href="/Casinos"> <i className="fa-solid fa-cash-register"></i> <br />Casinos</a>
        //             </span>
        //             <div className="dropdown-content mega-menu">
        //                 <div className="mega-menu-column">
                         
        //                     <a href="/Dealer">Live Dealer</a>
        //                     <a href="/Blackjack">Blackjack</a>
        //                 </div>
        //                 <div className="mega-menu-column">
                         
        //                     <a href="/Baccarat">Baccarat</a>
        //                     <a href="/Reviews">Reviews</a>
        //                 </div>
        //                 <div className="mega-menu-column">
                          
        //                     <a href="/CrashGames">Crash Games</a>
                         
        //                 </div>
        //             </div>
        //         </li>


        //         <li className="dropdown">
        //             <span className="text-center">
        //                 <a href="/Currencies"> <i className="fa-solid fa-money-bill-transfer"></i> <br />  Currencies</a>

        //             </span>
        //             <div className="dropdown-content mega-menu">
        //                 <div className="mega-menu-column">                          
        //                     <a href="/Bitcoin">Bitcoin</a>
        //                     <a href="/Ethereum">Ethereum</a>
        //                     <a href="/Litecoin">Litecoin</a>
        //                      <a href="/Tether">Tether</a>                             
        //                 </div>
        //                 <div className="mega-menu-column">                       
        //                         <a href="/BNB">BNB</a>
        //                           <a href="/Dogecoin">Dogecoin</a>
        //                           <a href="/Tron">Tron</a>        
        //                 </div>
        //                 <div className="mega-menu-column">
        //                 <a href="/EOS">EOS</a>
        //                 <a href="/Solana">Solana</a>
        //                         <a href="/SHIBA">Shiba Inu</a>                             
        //                 </div>
        //             </div>
        //         </li>
        //     </ul>
        // </nav>
//         <div className="actions">
//             <button className="crypto-betting">
//                 <a href="/cryptoBetting">Crypto Betting</a>
//             </button>
//         </div>
//     </header>


//         </div>
//       </div>
      // <div className="container-fluid icon-bg-color">
      //   <div className="container">
      //     <div className="icons-bar">
      //       <div className="icon">
      //         <span className="badge">1</span>
      //         <a href="https://stake.com/?c=newbonus">
      //           <img src={stake} alt="" />
      //         </a>
      //       </div>
      //       <div className="icon">
      //         <span className="badge">2</span> 
      //         <a href="https://1xlite-088578.top/en?tag=d_470241m_97c_NEWBONUS">
      //           <img src={OneX} alt="" />
      //         </a>
      //       </div>
      //       <div className="icon">
      //         <span className="badge">3</span> 
      //         <a href="https://bc.game/bn/?stag=12184_679ebd3b4473d0ffd5c0c66b&i=4cxse6dr">
      //           <img src={bc} alt="" />
      //         </a>
      //       </div>
      //       <div className="icon">
      //         <span className="badge">4</span> 
      //         <a href="https://gamdom.com/landing?aff=newbonus">
      //           <img src={game} alt="" />
      //         </a>
      //       </div>
      //       <div className="icon">
      //         <span className="badge">5</span> 
      //         <a href="https://melbet-516558.top/en?tag=d_2297877m_45415c_Newbonus">
      //           <img src={met} alt="" />
      //         </a>
      //       </div>
      //       <div className="icon">
      //         <span className="badge">6</span> 
      //         <a href="https://roobet.com/en/welcome?aff=newbonus">
      //           <img src={Root} alt="" />
      //         </a>
      //       </div>

      //       <div className="icon">
      //         <span className="badge">7</span> 
      //         <a href="https://bill.com/en/welcome?aff=newbonus">
      //           <img src={bill} alt="" />
      //         </a>
      //       </div>


      //       <div className="icon">
      //         <span className="badge">8</span> 
      //         <a href="https://razed.com/en/welcome?aff=newbonus">
      //           <img src={razed} alt="" />
      //         </a>
      //       </div>


      //       <div className="icon">
      //         <span className="badge">9</span> 
      //         <a href="https://1win4001.com/en/welcome?aff=newbonus">
      //           <img src={onwWin} alt="" />
      //         </a>
      //       </div>

      //       <div className="icon text-center">
      //         <a href="/Casinos">See all</a>
      //       </div>

      //     </div>
      //   </div>
      // </div>
//     </div>
//   );
// };

// export default Header;
