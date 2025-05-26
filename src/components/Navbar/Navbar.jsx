import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom'; // Using React Router components
import './Navbar.css';
import { Search, Menu, X, Home as HomeIcon } from 'lucide-react'; // Added HomeIcon

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    }

    const siteName = "AnimePremi";

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    {siteName.split("").map((char, index) => (
                        <span key={index} style={{ animationDelay: `${index * 0.05}s` }} className="logo-char">
                            {char}
                        </span>
                    ))}
                    <span className="logo-glow-effect"></span>
                </Link>

                <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
                    <NavLink to="/" className="nav-link" onClick={closeMobileMenu} end>
                        <HomeIcon size={18} className="nav-link-icon"/> Home
                    </NavLink>
                    <NavLink to="/about" className="nav-link" onClick={closeMobileMenu}>About</NavLink>
                    <NavLink to="/gallery" className="nav-link" onClick={closeMobileMenu}>Gallery</NavLink>
                    <NavLink to="/contact" className="nav-link" onClick={closeMobileMenu}>Contact</NavLink>
                </div>

                <div className="navbar-actions">
                    <div className="search-container">
                        <input type="text" placeholder="Search Anime..." className="search-input" />
                        <Search className="search-icon" size={20} />
                    </div>
                    <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;