/* eslint-disable react/jsx-no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import CryptoBeting from './pages/CryptoBeting.jsx'
// import Home from './pages/Home.jsx'
import BcGameRev from './pages/BcGameRev.jsx'
import BcPR from './pages/BcPR.jsx'
import BetandyouRev from './pages/BetandyouRev.jsx'
import BetibetRev from './pages/BetibetRev.jsx'
import Bitcoin from './pages/Bitcoin.jsx'
import BlockBet from './pages/BlockBet.jsx'
import BNB from './pages/BNB.jsx'
import Cardano from './pages/Cardano.jsx'
import Casinos from './pages/Casinos.jsx'
import CbetggRev from './pages/CbetggRev.jsx'
import CbetRev from './pages/CbetRev.jsx'
import CoinpokerRev from './pages/CoinpokerRev.jsx'
import Currencies from './pages/Currencies.jsx'
import DAI from './pages/DAI.jsx'
import Dogecoin from './pages/Dogecoin.jsx'
import DuelbitsR from './pages/DuelbitsR.jsx'
import EOS from './pages/EOS.jsx'
import Ethereum from './pages/Ethereum.jsx'
import GamdomRev from './pages/GamdomRev.jsx'
import GameR from './pages/GameR.jsx'
import GGPokerRev from './pages/GGPokerRev.jsx'
import KingmakerR from './pages/KingmakerR.jsx'
import Litecoin from './pages/Litecoin.jsx'
import MelbetRev from './pages/MelbetRev.jsx'
import MetR from './pages/MetR.jsx'
import Monero from './pages/Monero.jsx'
import MonkeyTIRev from './pages/MonkeyTIRev.jsx'
import MostbetRev from './pages/MostbetRev.jsx'
import Natural8Rev from './pages/Natural8Rev.jsx'
import OnebitR from './pages/OnebitR.jsx'
import OnewinR from './pages/OnewinR.jsx'
import OnewinRev from './pages/OnewinRev.jsx'
import OnexbitRev from './pages/OnexbitRev.jsx'
import OxBet from './pages/OxBet.jsx'
import PinnacleR from './pages/PinnacleR.jsx'
import PinnacleRev from './pages/PinnacleRev.jsx'
import Poker from './pages/Poker.jsx'
import Polkadot from './pages/Polkadot.jsx'
import Promo from './pages/Promo.jsx'
import RakeR from './pages/RakeR.jsx'
import RazedrRev from './pages/RazedrRev.jsx'
import RevStake from './pages/RevStake.jsx'
import Ripple from './pages/Ripple.jsx'
import RoobetRev from './pages/RoobetRev.jsx'
import RootR from './pages/RootR.jsx'
import SapphirebetRev from './pages/SapphirebetRev.jsx'
import SHIBA from './pages/SHIBA.jsx'
import ShuffleR from './pages/ShuffleR.jsx'
import Solana from './pages/Solana.jsx'
import SportsbetR from './pages/SportsbetR.jsx'
import SportsbetRev from './pages/SportsbetRev.jsx'
import StakeR from './pages/StakeR.jsx'
import StarzRev from './pages/StarzRev.jsx'
import Tether from './pages/Tether.jsx'
import ThunderpickR from './pages/ThunderpickR.jsx'
import ThunderpickRev from './pages/ThunderpickRev.jsx'
import Tron from './pages/Tron.jsx'
import VaveR from './pages/VaveR.jsx'
import VaveRev from './pages/VaveRev.jsx'
import WildioRev from './pages/WildioRev.jsx'
import Ybets from './pages/Ybets.jsx'
import YbetsR from './pages/YbetsR.jsx'
import ZotabetRev from './pages/ZotabetRev.jsx'
  const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>
  },
  {
    path:'/Promo',
    element:<Promo></Promo>
  },
  {
    path:'/Poker',
    element:<Poker></Poker>
  },
  {
    path:'/cryptoBetting',
    element:<CryptoBeting></CryptoBeting>
  },
  {
    path:'/betting',
    element:<CryptoBeting></CryptoBeting>
  },
  {
    path:'/Casinos',
    element:<Casinos></Casinos>
  },

  {
    path:'/Currencies',
    element:<Currencies></Currencies>
  },

    // Currencies navber 
  {
    path:'/Bitcoin',
    element:<Bitcoin></Bitcoin>

  },

  {
    path:'/Ethereum',
    element:<Ethereum></Ethereum>
  },
  {
    path:'/Litecoin',
    element:<Litecoin></Litecoin>
  },

  {
    path:'/Dogecoin',
    element:<Dogecoin></Dogecoin>
  },
  {
    path:'/Tether',
    element:<Tether></Tether>
  },
  {
    path:'/Ripple',
    element:<Ripple></Ripple>
  },
  {
    path:'/BNB',
    element:<BNB></BNB>
  },
  {
    path:'/Tron',
    element:<Tron></Tron>
  },
  {
    path:'/Cardano',
    element:<Cardano></Cardano>
  },
  {
    path:'/Monero',
    element:<Monero></Monero>
  },
  {
    path:'/EOS',
    element:<EOS></EOS>
  },
  {
    path:'/SHIBA',
    element:<SHIBA></SHIBA>
  },
  {
    path:'/DAI',
    element:<DAI></DAI>
  },
  {
    path:'/Polkadot',
    element:<Polkadot></Polkadot>
  },
  {
    path:'/Solana',
    element:<Solana></Solana>
  },

  // promo review 
  {
    path:'/StakeR',
    element:<StakeR></StakeR>
  },
  {
    path:'/oneXbetR',
    element:<OxBet></OxBet>
  },
  {
    path:'/BcPR',
    element:<BcPR></BcPR>
  },
  {
    path:'/gameR',
    element:<GameR></GameR>
  },
  {
    path:'/metR',
    element:<MetR></MetR>
  },
  {
    path:'/RootR',
    element:<RootR></RootR>
  },
  {
    path:'/OnewinR',
    element:<OnewinR></OnewinR>
  },
  {
    path:'/DuelbitsR',
    element:<DuelbitsR></DuelbitsR>
  },
  {
    path:'/PinnacleR',
    element:<PinnacleR></PinnacleR>
  },
  {
    path:'/OnebitR',
    element:<OnebitR></OnebitR>
  },
  {
    path:'/KingmakerR',
    element:<KingmakerR></KingmakerR>
  },
  {
    path:'/SportsbetR',
    element:<SportsbetR></SportsbetR>
  },
  {
    path:'/VaveR',
    element:<VaveR></VaveR>
  },
  {
    path:'/YbetsR',
    element:<YbetsR></YbetsR>
  },
  {
    path:'/ThunderpickR',
    element:<ThunderpickR></ThunderpickR>
  },
  {
    path:'/RakeR',
    element:<RakeR></RakeR>
  },
  {
    path:'/ShuffleR',
    element:<ShuffleR></ShuffleR>
  },

  // Review 
  {
    path:'/RevStake',
    element:<RevStake></RevStake>
  },

  {
    path:'/OnewinRev',
    element:<OnewinRev></OnewinRev>
  },
  {
    path:'/BcGameRev',
    element:<BcGameRev></BcGameRev>
  },
  {
    path:'/RoobetRev',
    element:<RoobetRev></RoobetRev>
  },
  {
    path:'/MostbetRev',
    element:<MostbetRev></MostbetRev>
  },
  {
    path:'/MelbetRev',
    element:<MelbetRev></MelbetRev>
  },
  {
    path:'/CbetRev',
    element:<CbetRev></CbetRev>
  },
  {
    path:'/MonkeyTIRev',
    element:<MonkeyTIRev></MonkeyTIRev>
  },
  {
    path:'/Ybets',
    element:<Ybets></Ybets>
  },
  {
    path:'/StarzRev',
    element:<StarzRev></StarzRev>
  },
  {
    path:'/BlockBetRev',
    element:<BlockBet></BlockBet>
  } ,
  {
    path:'/GGPokerRev',
    element:<GGPokerRev></GGPokerRev>
  } ,
  {
    path:'/RazedrRev',
    element:<RazedrRev></RazedrRev>
  },
  {
    path:'/PinnacleRev',
    element:<PinnacleRev></PinnacleRev>
  },
  {
    path:'/OnexbitRev',
    element:<OnexbitRev></OnexbitRev>
  },
  {
    path:'/SapphirebetRev',
    element:<SapphirebetRev></SapphirebetRev>
  },
  {
    path:'/Natural8Rev',
    element:<Natural8Rev></Natural8Rev>
  },
  {
    path:'/ZotabetRev',
    element:<ZotabetRev></ZotabetRev>
  },
  {
    path:'/BetibetRev',
    element:<BetibetRev></BetibetRev>
  },
  {
    path:'/WildioRev',
    element:<WildioRev></WildioRev>
  },
  {
    path:'/CoinpokerRev',
    element:<CoinpokerRev></CoinpokerRev>
  },
  {
    path:'/BetandyouRev',
    element:<BetandyouRev></BetandyouRev>
  },
  {
    path:'/SportsbetRev',
    element:<SportsbetRev></SportsbetRev>
  },
  {
    path:'/ThunderpickRev',
    element:<ThunderpickRev></ThunderpickRev>
  },
  {
    path:'/GamdomRev',
    element:<GamdomRev></GamdomRev>
  },

  {
    path:'/VaveRev',
    element:<VaveRev></VaveRev>
  },
  {
    path:'/CbetggRev',
    element:<CbetggRev></CbetggRev>
  },




]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)



// logo -> 235*51
// banner pic  -> 1500*500 
// category pic -> 116*64
// Daily pic -> 402*300
// product pic -> 163*160
// Special Snacks -> 551*250
// Brand -> 151*135
// Don't Miss Out adds -> 583 * 377
// sing up and in -> 400*600
