"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import Clogo from"url:../assets/Castura T&T Logo.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    // Check if screen is mobile size
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        // Initial check
        checkScreenSize()

        // Add event listener for window resize
        window.addEventListener("resize", checkScreenSize)

        // Cleanup
        return () => window.removeEventListener("resize", checkScreenSize)
    }, [])

    // Toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="header-container">
            <div className="logo-container">
                <img src={Clogo} alt="logo" className="logo" />
            </div>

            {/* Burger menu icon for mobile */}
            {isMobile && (
                <button className="burger-menu-btn" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
                    {isMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
                </button>
            )}

            {/* Navigation items */}
            <div className={`nav-items ${isMobile ? "mobile" : ""} ${isMenuOpen ? "open" : ""}`}>
                <ul>
                    <Link to="/" className="same-a" onClick={() => setIsMenuOpen(false)}>
                        <li>Home</li>
                    </Link>
                    <Link to="/components/packages" className="same-a" onClick={() => setIsMenuOpen(false)}>
                        <li>Packages</li>
                    </Link>
                    <Link to="/components/Contact" className="same-a" onClick={() => setIsMenuOpen(false)}>
                        <li>Contact Us</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Header
