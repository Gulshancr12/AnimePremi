import React from 'react';
import './Footer.css';
import { Github, Twitter, Youtube, Twitch, Instagram } from 'lucide-react'; // Added Instagram

const Footer = () => {
    return (
        <footer className="site-footer" id="contact"> {/* id="contact" agar contact section yahi hai */}
            <div className="footer-animated-bg"></div> {/* New: For subtle animated background texture */}
            <div className="footer-content-wrapper">
                <div className="footer-top-glow"></div>
                <div className="footer-main-content">
                    <div className="footer-section about-us" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="footer-title">AnimePremi</h3>
                        <p>Your ultimate portal to the infinite realms of anime. Discover, watch, and connect with a universe of stories and fans.</p>
                    </div>
                    <div className="footer-section quick-links" data-aos="fade-up" data-aos-delay="200">
                        <h4 className="footer-subtitle">Explore</h4>
                        <ul>
                            {/* Replace #home, #gallery etc. with actual paths like / or /gallery */}
                            <li><a href="/">Home</a></li>
                            <li><a href="/gallery">Gallery</a></li>
                            <li><a href="/#universe">Universe Guide</a></li> {/* Example link to a section on home page */}
                            <li><a href="/blog">Blog (Example)</a></li>
                            <li><a href="/faq">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="footer-section legal-links" data-aos="fade-up" data-aos-delay="300">
                        <h4 className="footer-subtitle">Legal</h4>
                        <ul>
                            <li><a href="/terms">Terms of Service</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/dmca">DMCA</a></li>
                        </ul>
                    </div>
                    <div className="footer-section connect" data-aos="fade-up" data-aos-delay="400">
                        <h4 className="footer-subtitle">Connect With Us</h4>
                        <div className="social-icons">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter /></a>
                            <a href="https://github.com/Gulshancr12" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a>
                            <a href="https://www.instagram.com/just_edits_._/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a> {/* YOUR INSTAGRAM LINK ADDED HERE */}
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube /></a>
                            <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer" aria-label="Twitch"><Twitch /></a>
                        </div>
                        <p className="newsletter-prompt">Stay updated with our newsletter!</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="your.email@example.com" required />
                            <button type="submit" className="futuristic-button">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} AnimePremi. All rights reserved. Crafted with <span className="heart-pulse">💖</span> for anime lovers.</p>
                    <p>Disclaimer: This is a fictional website for demonstration purposes.</p>
                </div>
            </div>
            <div className="footer-bg-elements">
                <div className="footer-bg-shape shape-1"></div>
                <div className="footer-bg-shape shape-2"></div>
                <div className="footer-bg-shape shape-3"></div>
            </div>
        </footer>
    );
};

export default Footer;