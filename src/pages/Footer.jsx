import React from 'react';
import '../App.css';


const Footer = () => {
    return (
        <footer className="footer container-fluid">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-2"><strong><a href="/Promo">Promo Codes</a></strong></div>
                    <div className="col-md-2"><strong><a href="/BettingSites">Betting Sites</a></strong><br /><a href="/Esports">Esports</a><br /><a href="/Football">Football</a><br /><a href="/Tennis">Tennis</a></div>
                    <div className="col-md-2"><strong><a href="/Poker">Poker</a></strong></div>
                    <div className="col-md-2"><strong><a href="/Casinos">Casinos</a></strong><br /><a href="/LiveDealer">Live Dealer</a><br /><a href="/Blackjack">Blackjack</a><br /><a href="/Baccarat">Baccarat</a></div>
                    <div className="col-md-2"><strong><a href="/Currencies">Currencies</a></strong><br /><a href="/Bitcoin">Bitcoin</a><br /><a href="/Ethereum">Ethereum</a><br /><a href="/Litecoin">Litecoin</a></div>
                </div>
                <hr className="bg-light" />
                <div className="row text-center">
                    <div className="col-12">
                        <a href="#">Terms and Conditions</a> |
                        <a href="#">Privacy Policy</a> |
                        <a href="#">Cookie Policy</a> |
                        <a href="#">Contact Us</a>
                    </div>
                </div>
                <p className="mt-3">
                    Crypto Ninjas &reg; is a registered trademark. Copyright &copy; 2025. 
                    Reproduction in whole or in part without express written permission is prohibited. 
                    Players must be 18 or over. Please play responsibly. 
                    If you or someone you know has a gambling problem, seek help.
                </p>
              
            </div>
        </footer>
    );
};

export default Footer;
