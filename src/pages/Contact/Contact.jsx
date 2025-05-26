import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import axios from 'axios'; // Or use fetch
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Contact.css';
import { 
    Send, 
    Loader2, 
    CheckCircle, 
    AlertTriangle, 
    Mail, 
    User,         // This User icon is for the form field
    MessageSquare,
    Users,        // <-- This Users icon is for "Social Media"
    Map           // <-- This Map icon is for the "Digital Headquarters"
} from 'lucide-react';

// Validation Schema
const ContactSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    subject: Yup.string().min(5, 'Too Short!').max(100, 'Too Long!').required('Subject is required'),
    message: Yup.string().min(10, 'Message too short!').max(1000, 'Too Long!').required('Message is required'),
});

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

    // IMPORTANT: Replace with your Formspree endpoint!
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xovdobbw"; // e.g., "https://formspree.io/f/YOUR_UNIQUE_ID"

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validationSchema: ContactSchema,
        onSubmit: async (values, { resetForm }) => {
            if (FORMSPREE_ENDPOINT === "YOUR_FORMSPREE_ENDPOINT_HERE") {
                console.error("Formspree endpoint not configured!");
                setSubmitStatus('error');
                setIsSubmitting(false);
                alert("Developer: Formspree endpoint is not configured.");
                return;
            }
            setIsSubmitting(true);
            setSubmitStatus(null);
            // Add 'submitting' class for animation
            const submitButton = document.querySelector('.submit-button');
            if (submitButton) submitButton.classList.add('submitting');

            try {
                await axios.post(FORMSPREE_ENDPOINT, values);
                setSubmitStatus('success');
                resetForm();
            } catch (error) {
                console.error("Form submission error:", error);
                setSubmitStatus('error');
            }
            setIsSubmitting(false);
            if (submitButton) submitButton.classList.remove('submitting');
        },
    });

    useEffect(() => {
        AOS.refresh(); // Refresh AOS on component mount/update
        if (submitStatus === 'success' || submitStatus === 'error') {
            const timer = setTimeout(() => setSubmitStatus(null), 5000); // Clear status after 5s
            return () => clearTimeout(timer);
        }
    }, [submitStatus]);

    return (
        <div className="contact-page section-padding">
            <div className="contact-header" data-aos="fade-down">
                <Mail size={48} className="contact-header-icon" />
                <h1 className="section-title">
                    <span className="glitch-text" data-text="Get In Touch">Get In Touch</span>
                </h1>
                <p className="section-subtitle">
                    Have questions, suggestions, or just want to say hi? We'd love to hear from you!
                </p>
            </div>

            <div className="contact-content-wrapper">
                <div className="contact-form-container" data-aos="fade-right" data-aos-delay="200">
                    <form onSubmit={formik.handleSubmit} className="contact-form">
                        <div className="form-grid">
                            <div className={`form-group ${formik.touched.name && formik.errors.name ? 'error' : ''}`}>
                                <label htmlFor="name">
                                    <User size={18} /> Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="e.g., Sakura Chan"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                                {formik.touched.name && formik.errors.name ? (
                                    <div className="error-message">{formik.errors.name}</div>
                                ) : null}
                            </div>

                            <div className={`form-group ${formik.touched.email && formik.errors.email ? 'error' : ''}`}>
                                <label htmlFor="email">
                                    <Mail size={18} /> Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="error-message">{formik.errors.email}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className={`form-group ${formik.touched.subject && formik.errors.subject ? 'error' : ''}`}>
                            <label htmlFor="subject">
                                <MessageSquare size={18} /> Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Regarding..."
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.subject}
                            />
                            {formik.touched.subject && formik.errors.subject ? (
                                <div className="error-message">{formik.errors.subject}</div>
                            ) : null}
                        </div>

                        <div className={`form-group ${formik.touched.message && formik.errors.message ? 'error' : ''}`}>
                            <label htmlFor="message">
                                <MessageSquare size={18} /> Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                placeholder="Tell us what's on your mind..."
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                            ></textarea>
                            {formik.touched.message && formik.errors.message ? (
                                <div className="error-message">{formik.errors.message}</div>
                            ) : null}
                        </div>
                        
                        <button type="submit" className="submit-button futuristic-button" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <Loader2 size={20} className="icon-spin" />
                            ) : (
                                <Send size={18} />
                            )}
                            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                            <div className="button-particles"></div> {/* Particles container */}
                        </button>

                        {submitStatus === 'success' && (
                            <div className="form-status-message success-message" data-aos="zoom-in">
                                <CheckCircle size={24} /> Message Sent! We'll get back to you soon.
                            </div>
                        )}
                        {submitStatus === 'error' && (
                             <div className="form-status-message error-message-box" data-aos="zoom-in">
                                <AlertTriangle size={24} /> Oops! Something went wrong. Please try again.
                            </div>
                        )}
                    </form>
                </div>

                <div className="contact-info-container" data-aos="fade-left" data-aos-delay="400">
                    <h3>Other Ways to Reach Us</h3>
                    <p>
                        While the form is the quickest way, you can also connect with us through these channels.
                        We're always excited to engage with the AnimePremi community!
                    </p>
                    <div className="contact-info-item">
                        <h4><Mail size={20}/> Email (Support)</h4>
                        <p><a href={`mailto:${"gulshancr12@gmail.com"}`}>{"gulshancr12@gmail.com"}</a></p>
                    </div>
                    <div className="contact-info-item">
                        <h4><Users size={20}/> Social Media</h4> {/* Corrected: Users icon */}
                        <p>Follow us on Twitter, Instagram, and Discord (links in footer!).</p>
                    </div>
                    <div className="contact-info-item">
                        <h4><MessageSquare size={20}/> Community Forums</h4>
                        <p>Join the discussions on our official forums.</p>
                    </div>
                    <div className="contact-map-placeholder">
                        <p>Our Digital Headquarters is Everywhere the Anime Spirit Shines!</p>
                         <div className="map-icon-pulse">
                            <Map size={60}/> {/* Corrected: Map icon */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;