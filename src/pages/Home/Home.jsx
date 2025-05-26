import React, { useEffect, useRef } from 'react';
import './Home.css';
import { 
    Shield, 
    Wand2, 
    Rocket, 
    Smile, 
    Zap, 
    Film, 
    Map as MapIcon,  
    Users, 
    Award, 
    CalendarDays, 
    Linkedin, 
    Github, 
    Instagram as InstaIcon 
} from 'lucide-react';

// Your local image for creator profile
import gulshanJadounImage from '../../assets/gulshan.jpg';
import heroBg from '../../assets/heroBg.jpg';

// Image URLs
// const heroBg = 'https://img.freepik.com/free-photo/beautiful-anime-landscape-cartoon-scene_23-2151035237.jpg?uid=R113422793&ga=GA1.1.1195760834.1725803531&semt=ais_hybrid&w=740';
const parallaxBg1 = 'https://img.freepik.com/free-photo/illustration-anime-city_23-2151779669.jpg';
const parallaxBg2 = 'https://img.freepik.com/free-photo/anime-landscape-person-traveling_23-2151038162.jpg';
const parallaxBg3 = 'https://img.freepik.com/free-vector/japanese-street-neon-lights_52683-44989.jpg';
const parallaxBg4 = 'https://img.freepik.com/free-photo/nighttime-serenity-temple-scene_23-2151976348.jpg';

const trendImg1 = 'https://img.freepik.com/free-photo/samurai-sunset-japan_23-2151976350.jpg';
const trendImg2 = 'https://img.freepik.com/free-photo/anime-style-character-with-water_23-2151080193.jpg';
const trendImg3 = 'https://img.freepik.com/free-photo/anime-style-boy-girl-couple_23-2151451512.jpg';
const trendImg4 = 'https://img.freepik.com/free-photo/anime-character-traveling_23-2151278762.jpg';
const trendImg5 = 'https://img.freepik.com/free-photo/anime-landscape-person-traveling_23-2151038160.jpg';
const trendImg6 = 'https://img.freepik.com/free-photo/beautiful-anime-new-year-s-eve-scene_23-2151038098.jpg';

const behindTheScenesImg = 'https://img.freepik.com/free-photo/anime-style-house-architecture_23-2151064966.jpg';
const communityArt1 = 'https://img.freepik.com/free-photo/anime-like-illustration-girl-by-sea_23-2151835242.jpg';
const communityArt2 = 'https://img.freepik.com/free-photo/medium-shot-anime-girl-hugging-elephant_23-2150970759.jpg';
const upcomingThumb1 = 'https://img.freepik.com/free-photo/geisha-bridge-cherry-blossom-garden-sunrise_23-2151976341.jpg';
const upcomingThumb2 = 'https://img.freepik.com/free-photo/anime-style-character-with-lit-candles_23-2151152211.jpg';
const exclusiveThumb = 'https://img.freepik.com/free-photo/anime-style-portrait-traditional-japanese-samurai-character_23-2151499090.jpg';
const worldMapBase = 'https://img.freepik.com/free-photo/cityscape-anime-inspired-urban-area_23-2151028663.jpg';
const userAvatar1 = 'https://randomuser.me/api/portraits/women/65.jpg';
const userAvatar2 = 'https://randomuser.me/api/portraits/men/32.jpg';


const Home = () => {
    const heroSectionRef = useRef(null);

    useEffect(() => {
        const handleMouseMoveHero = (e) => {
            if (heroSectionRef.current) {
                const { clientX, clientY } = e;
                const { offsetWidth, offsetHeight } = heroSectionRef.current;
                const xPos = (clientX / offsetWidth - 0.5) * 15;
                const yPos = (clientY / offsetHeight - 0.5) * 15;
                heroSectionRef.current.style.setProperty('--hero-bg-x', `${50 + xPos}%`);
                heroSectionRef.current.style.setProperty('--hero-bg-y', `${50 + yPos}%`);
            }
        };
        window.addEventListener('mousemove', handleMouseMoveHero);

        const cards = document.querySelectorAll('.trending-card-interactive');
        const cardMouseMoveHandlers = new Map(); // To store handlers for removal

        cards.forEach(card => {
            const cardInner = card.querySelector('.card-inner');
            if (!cardInner) return;

            const handleMouseMoveCard = (e) => {
                const { clientX, clientY } = e;
                const { left, top, width, height } = card.getBoundingClientRect();
                const x = clientX - left;
                const y = clientY - top;
                const rotateX = ((y / height) - 0.5) * -15;
                const rotateY = ((x / width) - 0.5) * 15;
                cardInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(15px) scale(1.02)`;
            };
            const handleMouseLeaveCard = () => {
                cardInner.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';
            };
            
            card.addEventListener('mousemove', handleMouseMoveCard);
            card.addEventListener('mouseleave', handleMouseLeaveCard);
            cardMouseMoveHandlers.set(card, { move: handleMouseMoveCard, leave: handleMouseLeaveCard });
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMoveHero);
            cardMouseMoveHandlers.forEach((handlers, card) => {
                card.removeEventListener('mousemove', handlers.move);
                card.removeEventListener('mouseleave', handlers.leave);
            });
        };
    }, []);


    const trendingItems = [
        { img: trendImg1, title: "Shadow Ronin", ep: "Ep 05: Crimson Moon" },
        { img: trendImg2, title: "Aqua Sorceress", ep: "Ep 02: Abyss Beckons" },
        { img: trendImg3, title: "Starlight Echoes", ep: "Movie: Celestial Kiss" },
        { img: trendImg4, title: "Nomad's Horizon", ep: "New Series: Ep 01" },
        { img: trendImg5, title: "Whispering Peaks", ep: "Ep 07: Mountain's Secret" },
        { img: trendImg6, title: "Festival of Lanterns", ep: "Special OVA" },
    ];

    const genres = [
        { name: "Action", Icon: Zap, aos: "zoom-in-right", color: "var(--color-accent-primary)" },
        { name: "Fantasy", Icon: Wand2, aos: "zoom-in-up", color: "var(--color-accent-quaternary)" },
        { name: "Sci-Fi", Icon: Rocket, aos: "zoom-in-down", color: "var(--color-accent-secondary)" },
        { name: "Slice of Life", Icon: Smile, aos: "zoom-in-left", color: "var(--color-accent-tertiary)" },
        { name: "Adventure", Icon: MapIcon, aos: "fade-right", color: "#39ff14" },
        { name: "Drama", Icon: Film, aos: "fade-left", color: "#ff8c00" },
    ];


    return (
        <div className="home-page-wrapper">
            {/* --- Hero Section --- */}
            <section
                id="home"
                className="hero-section"
                ref={heroSectionRef}
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="hero-stars-bg"></div>
                <div className="hero-twinkling-stars"></div>
                <div className="hero-distant-nebula"></div>
                <div className="hero-glitch-overlay"></div>
                <div className="hero-particles">
                    {[...Array(30)].map((_, i) => <div key={i} className="particle" style={{
                        '--i': i,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 12}s`,
                        animationDuration: `${7 + Math.random() * 8}s`,
                        width: `${1 + Math.random() * 2.5}px`,
                        height: `${1 + Math.random() * 2.5}px`,
                    }}></div>)}
                </div>

                <div className="hero-content">
                    <div className="hero-cosmic-aura"></div> {/* Cosmic Aura Effect */}
                    <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
                        <span className="title-word" data-text="ANIME">ANIME</span>
                        <span className="title-word highlight" data-text="PREMI">PREMI</span>
                    </h1>
                    <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="400">
                        Your Portal to Infinite Worlds. The Ultimate Anime Odyssey Awaits.
                    </p>
                    <button className="hero-cta futuristic-button" data-aos="zoom-in" data-aos-delay="600">
                        Begin Your Journey
                    </button>
                </div>
                <div className="scroll-indicator" data-aos="fade-up" data-aos-delay="800">
                    <div className="mousey">
                        <div className="scroller"></div>
                    </div>
                </div>
            </section>

            {/* --- Section 2: Trending Now --- */}
            <section id="trending" className="trending-section section-padding">
                <h2 className="section-title" data-aos="fade-right">
                    <span className="glitch-text" data-text="TRENDING NOW">TRENDING NOW</span>
                </h2>
                <div className="trending-grid">
                    {trendingItems.map((item, index) => (
                        <div
                            key={index}
                            className="trending-card-interactive"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="card-inner">
                                <img src={item.img} alt={item.title} className="trending-card-img" />
                                <div className="trending-card-overlay">
                                    <h3>{item.title}</h3>
                                    <p>{item.ep}</p>
                                    <button className="play-button"><Film size={16}/> Watch Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* --- Section 3: Parallax Break 1 --- */}
            <section className="parallax-break-section" style={{ backgroundImage: `url(${parallaxBg1})` }}>
                <div className="parallax-overlay"></div>
                <div className="parallax-content" data-aos="zoom-in-up">
                    <h2>Worlds Beyond Imagination</h2>
                    <p>Explore sprawling cyberpunk metropolises, serene fantasy realms, and galaxies yet unknown.</p>
                </div>
            </section>

            {/* --- Section 4: Explore Genres --- */}
            <section id="genres" className="genre-spotlight-section section-padding">
                 <h2 className="section-title" data-aos="fade-left">
                    <span className="glitch-text" data-text="EXPLORE GENRES">EXPLORE GENRES</span>
                </h2>
                <div className="genre-grid">
                    {genres.map((genre, index) => (
                        <div className="genre-card" key={genre.name} data-aos={genre.aos} data-aos-delay={index * 100} style={{'--genre-color': genre.color}}>
                            <genre.Icon className="genre-icon" size={48} strokeWidth={1.5} />
                            <h3>{genre.name}</h3>
                            <p>Dive into thrilling {genre.name.toLowerCase()} adventures.</p>
                            <a href={`#genre-${genre.name.toLowerCase()}`} className="genre-cta-link">Discover <span className="arrow">→</span></a>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Upcoming & Exclusives --- */}
            <section id="upcoming" className="upcoming-exclusives-section section-padding">
                <h2 className="section-title" data-aos="fade-up"><span className="glitch-text" data-text="COMING SOON & EXCLUSIVES">COMING SOON & EXCLUSIVES</span></h2>
                <div className="upcoming-grid">
                    <div className="upcoming-card large" data-aos="fade-right" style={{backgroundImage: `url(${exclusiveThumb})`}}>
                        <div className="upcoming-card-overlay">
                            <span className="tag exclusive-tag"><Award size={16}/> AnimePremi Exclusive</span>
                            <h3>The Last Samurai King</h3>
                            <p>A legend reborn. Only on AnimePremi.</p>
                            <button className="futuristic-button alt">Watch Trailer <Film size={16}/></button>
                        </div>
                    </div>
                    <div className="upcoming-card small" data-aos="fade-left" data-aos-delay="100" style={{backgroundImage: `url(${upcomingThumb1})`}}>
                         <div className="upcoming-card-overlay">
                            <span className="tag upcoming-tag"><CalendarDays size={16}/> Coming Next Month</span>
                            <h4>Sakura Festival Secrets</h4>
                            <p>A heartwarming tale.</p>
                        </div>
                    </div>
                    <div className="upcoming-card small" data-aos="fade-left" data-aos-delay="200" style={{backgroundImage: `url(${upcomingThumb2})`}}>
                        <div className="upcoming-card-overlay">
                            <span className="tag upcoming-tag"><CalendarDays size={16}/> Premiering Soon</span>
                            <h4>Mystic Candle Chronicles</h4>
                            <p>Unravel the ancient magic.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Glitchverse Intro --- */}
            <section id="universe" className="glitchverse-intro-section section-padding">
                <div className="glitch-bg">
                    {[...Array(10)].map((_,i) => <div key={i} className={`glitch-line line-${i+1}`}></div>)}
                </div>
                <div className="glitchverse-content">
                    <h2 className="section-title glitch-main-title" data-aos="zoom-out-down">
                        <span data-text="ENTER THE">ENTER THE</span>
                        <span data-text="GLITCHVERSE">GLITCHVERSE</span>
                    </h2>
                    <p data-aos="fade" data-aos-delay="300">
                        Where reality fractures and pixels dance. Experience narratives interwoven with digital anomalies.
                        Uncover hidden lore and fractured timelines. Are you ready to decode the signal?
                    </p>
                    <button className="futuristic-button alt" data-aos="zoom-in" data-aos-delay="500">
                        Cross The Threshold
                    </button>
                </div>
            </section>

            {/* --- Behind The Art --- */}
            <section id="behind-the-art" className="behind-art-section section-padding">
                <div className="behind-art-content">
                    <div className="behind-art-text" data-aos="fade-right" data-aos-duration="1200">
                        <h2 className="section-title"><span className="glitch-text" data-text="BEHIND THE ART">BEHIND THE ART</span></h2>
                        <p className="section-subtitle">
                            Explore the intricate process of anime creation. From initial sketches to final animation,
                            witness the dedication and artistry that brings your favorite worlds to life.
                        </p>
                        <ul>
                            <li data-aos="fade-right" data-aos-delay="100"><span className="list-icon">🎨</span> Storyboarding & Concept Art</li>
                            <li data-aos="fade-right" data-aos-delay="200"><span className="list-icon">✏️</span> Character Design & World Building</li>
                            <li data-aos="fade-right" data-aos-delay="300"><span className="list-icon">🎬</span> Animation & Voice Acting Insights</li>
                            <li data-aos="fade-right" data-aos-delay="400"><span className="list-icon">🎵</span> Soundtrack Creation & Sound Design</li>
                        </ul>
                        <button className="futuristic-button alt2" data-aos="zoom-in" data-aos-delay="500">Making Ofs</button>
                    </div>
                    <div className="behind-art-image-container" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">
                        <img src={behindTheScenesImg} alt="Behind the scenes of anime creation" className="behind-art-image" />
                        <div className="image-deco-line line-1"></div>
                        <div className="image-deco-line line-2"></div>
                    </div>
                </div>
            </section>

            {/* --- Parallax Break 2 --- */}
             <section className="parallax-break-section alt-parallax" style={{ backgroundImage: `url(${parallaxBg2})` }}>
                <div className="parallax-overlay deep-overlay"></div>
                <div className="parallax-content" data-aos="fade-right">
                    <h2>Journey Beyond the Known</h2>
                    <p>Every frame a masterpiece, every story an escape into the extraordinary.</p>
                </div>
            </section>

            {/* --- The World of AnimePremi (Conceptual Map) --- */}
            <section id="world-map" className="world-map-section section-padding" style={{backgroundImage: `url(${worldMapBase})`}}>
                <div className="world-map-overlay"></div>
                <h2 className="section-title" data-aos="fade-down"><span className="glitch-text" data-text="THE ANIMEPREMI UNIVERSE">THE ANIMEPREMI UNIVERSE</span></h2>
                <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">Navigate the vast expanse of AnimePremi. Each realm offers unique adventures.</p>
                <div className="map-container">
                    <div className="map-point point-action" data-aos="zoom-in" data-aos-delay="200" style={{top: '20%', left: '15%'}}>
                        <Zap size={24}/><span>Action Arena</span>
                        <div className="map-point-pulse"></div>
                    </div>
                    <div className="map-point point-fantasy" data-aos="zoom-in" data-aos-delay="300" style={{top: '35%', left: '60%'}}>
                        <Wand2 size={24}/><span>Fantasy Isles</span>
                        <div className="map-point-pulse"></div>
                    </div>
                    <div className="map-point point-scifi" data-aos="zoom-in" data-aos-delay="400" style={{top: '65%', left: '25%'}}>
                        <Rocket size={24}/><span>Sci-Fi Sector</span>
                        <div className="map-point-pulse"></div>
                    </div>
                    <div className="map-point point-community" data-aos="zoom-in" data-aos-delay="500" style={{top: '70%', left: '75%'}}>
                        <Users size={24}/><span>Community Citadel</span>
                        <div className="map-point-pulse"></div>
                    </div>
                     <div className="map-point point-exclusives" data-aos="zoom-in" data-aos-delay="600" style={{top: '50%', left: '45%'}}>
                        <Award size={24}/><span>Exclusive Vault</span>
                        <div className="map-point-pulse"></div>
                    </div>
                </div>
            </section>

            {/* --- Featured Creator (You!) --- */}
            <section id="creator-spotlight" className="featured-creators-section section-padding">
                <h2 className="section-title" data-aos="fade-up"><span className="glitch-text" data-text="CREATOR SPOTLIGHT">CREATOR SPOTLIGHT</span></h2>
                <div className="creators-grid single-creator">
                    <div className="creator-card gulshan-card" data-aos="zoom-in-up" data-aos-duration="1200">
                        <div className="creator-card-bg-elements">
                            <div className="bg-shape shape-gc-1"></div>
                            <div className="bg-shape shape-gc-2"></div>
                            <div className="bg-shape shape-gc-3"></div>
                        </div>
                        <div className="creator-logo-wrapper">
                            <img src={gulshanJadounImage} alt="Gulshan Kumar Jadoun" className="creator-logo profile-pic" />
                        </div>
                        <div className="creator-info">
                            <h3>Gulshan Kumar Jadoun</h3>
                            <p className="role-tag">Lead Developer & Anime Visionary</p>
                            <p className="creator-bio">
                                Fuelled by a lifelong passion for anime and cutting-edge technology, Gulshan is the architect
                                behind AnimePremi, striving to build the ultimate immersive experience for fans worldwide.
                            </p>
                            <div className="social-links-creator">
                                <a href="https://www.linkedin.com/in/gulshan-jadoun-790092223/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
                                <a href="https://github.com/Gulshancr12" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a>
                                <a href="https://www.instagram.com/just_edits_._/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstaIcon /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Parallax Break 3 (Neon City) --- */}
            <section className="parallax-break-section neon-parallax" style={{ backgroundImage: `url(${parallaxBg3})` }}>
                <div className="parallax-overlay less-opacity"></div>
                <div className="parallax-content" data-aos="zoom-out">
                    <h2>Neon-Soaked Adventures</h2>
                    <p>Dive into the vibrant, pulsating heart of futuristic cities and cybernetic dreams.</p>
                </div>
            </section>

            {/* --- Community Showcase --- */}
            <section id="community" className="community-showcase-section section-padding">
                <h2 className="section-title" data-aos="fade-up"><span className="glitch-text" data-text="COMMUNITY HUB">COMMUNITY HUB</span></h2>
                <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
                    Connect with fellow fans, share your art, theories, and become part of the AnimePremi family.
                </p>
                <div className="community-grid">
                    <div className="community-card" data-aos="flip-left" data-aos-delay="200">
                        <img src={communityArt1} alt="Community Fan Art 1"/>
                        <div className="community-card-info">
                            <h4>Ocean Serenity</h4>
                            <p>By: @AzureArtist</p>
                        </div>
                    </div>
                    <div className="community-card" data-aos="flip-right" data-aos-delay="300">
                         <img src={communityArt2} alt="Gentle Giant"/>
                        <div className="community-card-info">
                            <h4>Gentle Giant</h4>
                            <p>By: @PixelWhisperer</p>
                        </div>
                    </div>
                    <div className="community-card forum-promo" data-aos="zoom-in" data-aos-delay="400">
                        <h3>Join the Discussion!</h3>
                        <p>Dive into our forums and chat about your favorite series, characters, and theories.</p>
                        <button className="futuristic-button"><Users size={16}/> Visit Forums</button>
                    </div>
                </div>
            </section>

            {/* --- Fan Testimonials/Quotes --- */}
            <section id="testimonials" className="testimonials-section section-padding">
                <h2 className="section-title" data-aos="fade-up"><span className="glitch-text" data-text="WHAT FANS ARE SAYING">WHAT FANS ARE SAYING</span></h2>
                <div className="testimonials-grid">
                    <div className="testimonial-card" data-aos="fade-right" data-aos-delay="100">
                        <img src={userAvatar1} alt="User Avatar" className="testimonial-avatar"/>
                        <p className="testimonial-quote">"AnimePremi is my go-to! The variety is insane, and the exclusives are top-notch. Finally, a platform that gets what anime fans want!"</p>
                        <p className="testimonial-author">- AsunaKiri</p>
                    </div>
                    <div className="testimonial-card" data-aos="fade-left" data-aos-delay="200">
                        <img src={userAvatar2} alt="User Avatar" className="testimonial-avatar"/>
                        <p className="testimonial-quote">"The Glitchverse section is mind-blowing! And the community features make it feel like a real home for anime lovers. Highly recommend!"</p>
                        <p className="testimonial-author">- NeoOtaku77</p>
                    </div>
                </div>
            </section>

             {/* --- Final Parallax Break (Serene Temple) --- */}
             <section className="parallax-break-section serene-parallax" style={{ backgroundImage: `url(${parallaxBg4})` }}>
                <div className="parallax-overlay subtle-overlay"></div>
                <div className="parallax-content" data-aos="fade-up">
                    <h2>Find Your Zen</h2>
                    <p>Moments of tranquility and beauty await in the diverse landscapes of anime.</p>
                </div>
            </section>

            {/* --- Call to Action (Before Footer) --- */}
            <section id="signup" className="cta-final-section section-padding">
                 <div className="cta-content" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="200" data-aos-offset="0">
                    <h2>Ready to Elevate Your Anime Experience?</h2>
                    <p>Sign up for AnimePremi today and unlock a universe of exclusive content, early releases, and a vibrant community that shares your passion.</p>
                    <div className="cta-buttons">
                        <button className="futuristic-button">Sign Up Free</button>
                        <button className="futuristic-button alt2">Explore Features</button>
                    </div>
                </div>
                <div className="animated-bg-lines">
                    {[...Array(12)].map((_, i) => <div key={i} className="line" style={{left: `${i * (100/12)}%`, animationDelay: `${i * 0.2}s`}}></div>)}
                </div>
            </section>
        </div>
    );
};

export default Home;