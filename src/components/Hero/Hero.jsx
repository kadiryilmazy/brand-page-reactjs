import React from 'react'
import './Hero.css'

export default function NavBar() {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="hero-button">
                    <button href="#" >
                     
                     Shop Now
                    </button>
                    <button>Category</button>
                </div>
                <div className="shopping">
                    <p>Also Available On</p>
                </div>
                <div className="brand-icons">
                    <img src="/public/images/amazon.png" />
                    <img src="/public/images/flipkart.png" />
                </div>
            </div>

            <div className="hero-image">
                <img src="/public/images/hero-image.png" alt="Hero Image" />
            </div>
        </main>
    )
}
