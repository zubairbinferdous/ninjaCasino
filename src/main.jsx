/* eslint-disable react/jsx-no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import CryptoBeting from './pages/CryptoBeting.jsx'
// import Home from './pages/Home.jsx'
import BcPR from './pages/BcPR.jsx'
import Bitcoin from './pages/Bitcoin.jsx'
import BNB from './pages/BNB.jsx'
import Cardano from './pages/Cardano.jsx'
import Casinos from './pages/Casinos.jsx'
import Currencies from './pages/Currencies.jsx'
import DAI from './pages/DAI.jsx'
import Dogecoin from './pages/Dogecoin.jsx'
import DuelbitsR from './pages/DuelbitsR.jsx'
import EOS from './pages/EOS.jsx'
import Ethereum from './pages/Ethereum.jsx'
import GameR from './pages/GameR.jsx'
import KingmakerR from './pages/KingmakerR.jsx'
import Litecoin from './pages/Litecoin.jsx'
import MetR from './pages/MetR.jsx'
import Monero from './pages/Monero.jsx'
import OnebitR from './pages/OnebitR.jsx'
import OnewinR from './pages/OnewinR.jsx'
import OxBet from './pages/OxBet.jsx'
import PinnacleR from './pages/PinnacleR.jsx'
import Poker from './pages/Poker.jsx'
import Polkadot from './pages/Polkadot.jsx'
import Promo from './pages/Promo.jsx'
import RakeR from './pages/RakeR.jsx'
import Ripple from './pages/Ripple.jsx'
import RootR from './pages/RootR.jsx'
import SHIBA from './pages/SHIBA.jsx'
import ShuffleR from './pages/ShuffleR.jsx'
import Solana from './pages/Solana.jsx'
import SportsbetR from './pages/SportsbetR.jsx'
import StakeR from './pages/StakeR.jsx'
import Tether from './pages/Tether.jsx'
import ThunderpickR from './pages/ThunderpickR.jsx'
import Tron from './pages/Tron.jsx'
import VaveR from './pages/VaveR.jsx'
import YbetsR from './pages/YbetsR.jsx'
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
  }


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
