import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import './Gallery.css';
import { X as CloseIcon, Maximize2 } from 'lucide-react';

// Images for the gallery from your links
const galleryImages = [
    { id: 1, src: 'https://img.freepik.com/free-photo/anime-style-character-with-water_23-2151080193.jpg', alt: 'Water Character', title: 'Aqua Weaver' },
    { id: 2, src: 'https://img.freepik.com/free-photo/samurai-sunset-japan_23-2151976350.jpg', alt: 'Samurai Sunset', title: 'Ronin\'s Dusk' },
    { id: 3, src: 'https://img.freepik.com/free-photo/anime-style-boy-girl-couple_23-2151451512.jpg', alt: 'Anime Couple', title: 'Shared Dreams' },
    { id: 4, src: 'https://img.freepik.com/free-photo/anime-character-traveling_23-2151278762.jpg', alt: 'Traveler Character', title: 'Endless Journey' },
    { id: 5, src: 'https://img.freepik.com/free-photo/anime-landscape-person-traveling_23-2151038160.jpg', alt: 'Landscape Traveler', title: 'Whispering Peaks' },
    { id: 6, src: 'https://img.freepik.com/free-photo/medium-shot-anime-girl-hugging-elephant_23-2150970759.jpg', alt: 'Girl Hugging Elephant', title: 'Gentle Giant Friend' },
    { id: 7, src: 'https://img.freepik.com/free-photo/beautiful-anime-new-year-s-eve-scene_23-2151038098.jpg', alt: 'New Year Scene', title: 'Festival Lights' },
    { id: 8, src: 'https://img.freepik.com/free-photo/anime-style-scene-with-people-showing-affection-outdoors-street_23-2151500150.jpg', alt: 'Street Affection', title: 'City Embrace' },
    { id: 9, src: 'https://img.freepik.com/free-photo/anime-like-illustration-girl-by-sea_23-2151835242.jpg', alt: 'Girl by Sea', title: 'Ocean\'s Serenade' },
    { id: 10, src: 'https://img.freepik.com/free-vector/japanese-street-neon-lights_52683-44989.jpg', alt: 'Neon Street', title: 'Cyber Alley' },
    { id: 11, src: 'https://img.freepik.com/free-photo/anime-character-traveling_23-2151140116.jpg', alt: 'Traveling Anime Character', title: 'Path Unknown' },
    { id: 12, src: 'https://img.freepik.com/free-photo/cityscape-anime-inspired-urban-area_23-2151028663.jpg', alt: 'Anime Cityscape', title: 'Urban Dreams' },
    { id: 13, src: 'https://img.freepik.com/free-photo/anime-like-illustration-girl-kimono_23-2151835185.jpg', alt: 'Girl in Kimono', title: 'Sakura Elegance' },
    { id: 14, src: 'https://img.freepik.com/free-photo/geisha-bridge-cherry-blossom-garden-sunrise_23-2151976341.jpg', alt: 'Geisha on Bridge', title: 'Sunrise Stroll' },
    { id: 15, src: 'https://img.freepik.com/free-photo/nighttime-serenity-temple-scene_23-2151976348.jpg', alt: 'Night Temple', title: 'Moonlit Sanctuary' },
    { id: 16, src: 'https://img.freepik.com/free-photo/anime-style-portrait-traditional-japanese-samurai-character_23-2151499090.jpg', alt: 'Samurai Portrait', title: 'Warrior\'s Gaze' },
];


const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        AOS.refresh(); // Refresh AOS if images load and shift layout
    }, []);

    const openModal = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto'; // Restore scroll
    };

    // Handle Escape key to close modal
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };
        if (selectedImage) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedImage]);


    return (
        <div className="gallery-page section-padding">
            <h1 className="section-title" data-aos="fade-down">
                <span className="glitch-text" data-text="AnimePremi Gallery">AnimePremi Gallery</span>
            </h1>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
                A curated collection of breathtaking visuals from the world of anime.
            </p>

            <div className="gallery-grid">
                {galleryImages.map((image, index) => (
                    <div
                        key={image.id}
                        className="gallery-item"
                        data-aos="zoom-in-up"
                        data-aos-delay={ (index % 4) * 100 } // Stagger animation slightly per row
                        onClick={() => openModal(image)}
                    >
                        <img src={image.src} alt={image.alt} />
                        <div className="gallery-item-overlay">
                            <Maximize2 size={24} />
                            <p>{image.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="gallery-modal-backdrop" onClick={closeModal}>
                    <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-button" onClick={closeModal} aria-label="Close image viewer">
                            <CloseIcon size={32} />
                        </button>
                        <img src={selectedImage.src} alt={selectedImage.alt} className="modal-image"/>
                        <p className="modal-image-caption">{selectedImage.title}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;