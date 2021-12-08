import React from 'react'


function Card() {
    return (
        <div className = "Card">
            <div className = "NFT_cantainer">
                <img id = "NFT" src="./images/image-equilibrium.jpg" alt=""></img>
            </div>

            <div className = "content">
                <h3>Equilibrium #3429</h3>
                <p>Our Equilibrium collection promotes balance and calm.</p>

                <div className = 'description'>
                    <div className = "stat">
                        <img src="./images/icon-ethereum.svg" alt="ethereum_icon"></img>
                        <p>0.041ETH</p>
                    </div>

                    <div className ="stat">
                        <img src="./images/icon-clock.svg" alt="clock"></img>
                    <p>3 days left</p>
                </div>
                </div>
                
            </div>

            <div className = "footer">
                <img src="./images/image-avatar.png" alt=""></img>
                <p>Creation of Jules Wyvern</p>
            </div>
        </div>
    )
}

export default Card
