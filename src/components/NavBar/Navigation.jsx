import React from 'react'
import './Navigation.css'

export default function NavBar() {
    return (
        <nav className="container">
            <div className="logo">
                <img src="/public/images/brand_logo.png" alt="Brand Logo" />
            </div>
            <ul>
                <li>
                    <a href="#">Menu</a>
                </li>
                <li>
                    <a href="#">Location</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
            <button>Login</button>
        </nav>
    )
}
