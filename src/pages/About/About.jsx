import React, { useEffect } from 'react';
import AOS from 'aos';
import { Award, Users, Rocket as InnovationIcon } from 'lucide-react';
// Removed 'aos/dist/aos.css' import as it's in App.js
import './About.css';

// Your local image
import gulshanJadounImage from '../../assets/gulshan.jpg';

// Placeholder images - replace with actuals
const missionImage = 'https://img.freepik.com/free-photo/anime-moon-landscape_23-2151645915.jpg';
// Icons from lucide-react


const About = () => {
    // useEffect for AOS is now handled in App.js
    // If you need page-specific AOS refresh, you can do it here
    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <div className="about-page"> {/* paddingTop removed, handled by main tag in App.js */}
            {/* --- Hero Section for About Page --- */}
            <section className="about-hero">
                {/* ... (same as previous) ... */}
                <div className="about-hero-overlay"></div>
                <div className="about-hero-content" data-aos="fade-up">
                    <h1>About <span className="highlight">AnimePremi</span></h1>
                    <p>Your Universe of Limitless Anime Adventures</p>
                </div>
                <div className="hero-bg-pattern"></div>
            </section>

            {/* --- Our Mission Section --- */}
            <section className="our-mission section-padding-about">
                {/* ... (same as previous) ... */}
                <div className="mission-content-grid">
                    <div className="mission-text" data-aos="fade-right">
                        <h2>Our Cosmic Mission</h2>
                        <p>
                            At AnimePremi, we're driven by a singular passion: to create the most immersive and
                            captivating anime platform in the galaxy. We believe anime is more than just entertainment;
                            it's a portal to diverse cultures, breathtaking stories, and emotions that resonate deeply.
                        </p>
                        <p>
                            Our mission is to connect fans worldwide with the anime they love, discover new gems,
                            and foster a vibrant community where everyone feels welcome to share their passion.
                        </p>
                    </div>
                    <div className="mission-image-container" data-aos="fade-left" data-aos-delay="200">
                        <img src={missionImage} alt="Our Mission Illustration" />
                        <div className="mission-image-accent"></div>
                    </div>
                </div>
            </section>

            {/* --- Core Values Section --- */}
            <section className="core-values section-padding-about alt-bg-about">
                <h2 className="section-title-about" data-aos="zoom-in-down">Our Guiding Stars (Values)</h2>
                <div className="values-grid">
                    <div className="value-card" data-aos="fade-up" data-aos-delay="0">
                        <InnovationIcon className="value-icon" size={48} strokeWidth={1.5} />
                        <h3>Passion & Innovation</h3>
                        <p>Fueling our journey with a love for anime and a drive to constantly innovate the viewing experience.</p>
                    </div>
                    <div className="value-card" data-aos="fade-up" data-aos-delay="150">
                        <Users className="value-icon" size={48} strokeWidth={1.5} />
                        <h3>Community Centric</h3>
                        <p>Building a welcoming and inclusive space for fans to connect, share, and celebrate anime together.</p>
                    </div>
                    <div className="value-card" data-aos="fade-up" data-aos-delay="300">
                        <Award className="value-icon" size={48} strokeWidth={1.5} />
                        <h3>Uncompromising Quality</h3>
                        <p>Delivering a premium, seamless experience with high-quality content and cutting-edge features.</p>
                    </div>
                </div>
            </section>

            {/* --- Meet The Team Section (Single Profile) --- */}
            <section className="meet-the-team section-padding-about">
                <h2 className="section-title-about" data-aos="fade-down">The Architect of AnimePremi</h2>
                <div className="team-grid single-profile-focus"> {/* Added class for styling single profile */}
                    <div className="team-member-card gulshan-profile-card" data-aos="zoom-in-up" data-aos-duration="1000">
                         <div className="card-border-glow"></div> {/* For crazy hover */}
                        <div className="team-member-img-wrapper">
                            <img src={gulshanJadounImage} alt="Gulshan Kumar Jadoun" />
                        </div>
                        <h3>Gulshan Kumar Jadoun</h3>
                        <p className="profile-role">Founder & Lead Visionary</p>
                        <p className="profile-bio">
                            Driven by an unwavering passion for anime's boundless storytelling and a zeal for pioneering digital experiences,
                            Gulshan is the creative force and technical architect behind AnimePremi. His vision is to forge a universe
                            where fans can not only watch but truly live the anime dream, connecting worlds and hearts through shared adventures.
                        </p>
                        <div className="profile-skills">
                            <span>React</span><span>Node.js</span><span>Python</span><span>AI/ML</span><span>CyberSec</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Join Us / CTA --- */}
            {/* ... (same as previous) ... */}
            <section className="join-us-cta section-padding-about alt-bg-about">
                <div className="join-us-content" data-aos="zoom-in">
                    <h2>Ready to Join the Adventure?</h2>
                    <p>Become a part of the AnimePremi universe today. Explore, connect, and experience anime like never before!</p>
                    <a href="/" className="futuristic-button-about">Explore AnimePremi Home</a>
                </div>
                <div className="cta-bg-elements">
                    <div className="cta-bg-blob blob1"></div>
                    <div className="cta-bg-blob blob2"></div>
                </div>
            </section>
        </div>
    );
};

export default About;
