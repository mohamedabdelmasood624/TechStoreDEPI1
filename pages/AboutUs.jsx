import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import "./AboutUs.css";

import rightPart from "../assets/c06971648f6d61a45a1b8b19548b2eb1.jpg";
import leftPart from "../assets/6cf9b39a07cc17527a15742b85efb4df.jpg";
import Mohamed from "../assets/Screenshot 2025-07-22 185937.png";
import Nour from "../assets/Screenshot 2025-10-25 013834.png";
import Saif from "../assets/Screenshot 2025-10-25 014031.png";
import Yosef from "../assets/Screenshot 2025-10-25 014232.png";

const { faShield, faTruckFast, faHeadset, faDollarSign } = solidIcons;

export default function AboutUs() {
    const [showTalkButton, setShowTalkButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) setShowTalkButton(true);
            else if (window.scrollY <= 100) setShowTalkButton(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    //  LinkedIn
    const teamMembers = [
        {
            img: Mohamed,
            name: "Mohamed Abdelmaqsoud",
            linkedin: "https://www.linkedin.com/in/mohamed-abdelmaqsoud/",
            position: "Team Member",
            desc: "Passionate about technology and innovation"
        },
        {
            img: Nour,
            name: "Noureldein Islam",
            linkedin: "https://www.linkedin.com/in/noureldin-islam-106707364/",
            position: "Team Member",
            desc: "Dedicated to creating amazing user experiences"
        },
        {
            img: Saif,
            name: "Saif Mahmoud",
            linkedin: "https://www.linkedin.com/in/saif-zaki-cse/",
            position: "Team Member",
            desc: "Focused on delivering quality solutions"
        },
        {
            img: Yosef,
            name: "Youssef Mohamed",
            linkedin: "https://www.linkedin.com/in/youssef-mohamed-a55401316/",
            position: "Team Member",
            desc: "Committed to excellence in every project"
        },
    ];

    const handleLinkedInClick = (linkedinUrl) => {
        window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            {/* About Hero Banner */}
            <header className="about-hero text-white d-flex align-items-center">
                <div className="hero-overlay"></div>
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="about-title mb-3">About TechStore</h1>
                            <p className="about-subtitle mb-0">
                                Your Trusted Hub for the Latest Technology
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Our Mission Section */}
            <section
                className="py-5 our-mission-section"
                style={{ backgroundColor: "#F5F6F8" }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="mission-content">
                                <h2 className="mission-title mb-4">Our Mission</h2>
                                <p className="mission-text mb-4">
                                    Our mission is to become the world's most trusted technology
                                    retailer, known for exceptional customer service, competitive
                                    pricing, and an unmatched selection of premium products.
                                </p>
                                <p className="mission-text mb-0">
                                    We carefully curate our product selection to include only the
                                    most innovative and reliable technology from trusted brands worldwide.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="mission-image">
                                <img
                                    src={rightPart}
                                    alt="Futuristic Tech Environment"
                                    className="img-fluid rounded-3"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Vision Section */}
            <section className="py-5 our-vision-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="vision-image">
                                <img
                                    src={leftPart}
                                    alt="Futuristic Tech Environment"
                                    className="img-fluid rounded-3"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="vision-content">
                                <h2 className="vision-title mb-4">Our Vision</h2>
                                <p className="vision-text mb-4">
                                    Our vision is to become the world's most trusted technology
                                    retailer, known for exceptional customer service, competitive
                                    pricing, and an unmatched selection of premium products.
                                </p>
                                <p className="vision-text mb-0">
                                    We envision a future where technology seamlessly integrates
                                    into every aspect of life, empowering individuals and
                                    businesses to achieve their full potential.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose TechStore Section */}
            <section className="py-5 why-choose-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="why-choose-title mb-3">Why Choose TechStore?</h2>
                        <p className="why-choose-subtitle">
                            We're committed to providing the best technology shopping experience
                        </p>
                    </div>

                    <div className="row g-4">
                        {[
                            {
                                icon: faShield,
                                title: "Premium Quality",
                                text: "We source only the highest quality products from trusted brands worldwide",
                            },
                            {
                                icon: faTruckFast,
                                title: "Fast Shipping",
                                text: "Quick and reliable delivery to get your tech products to you faster",
                            },
                            {
                                icon: faHeadset,
                                title: "24/7 Support",
                                text: "Our expert team is always ready to help you with any questions or issues",
                            },
                            {
                                icon: faDollarSign,
                                title: "Best Prices",
                                text: "Competitive pricing with regular deals and exclusive offers for our customers",
                            },
                        ].map((item, idx) => (
                            <div className="col-12 col-md-6 col-lg-3" key={idx}>
                                <div className="why-choose-card h-100 text-center p-4">
                                    <div className="why-choose-icon mx-auto mb-3">
                                        <FontAwesomeIcon icon={item.icon} size="2x" />
                                    </div>
                                    <h5 className="why-choose-card-title mb-2">{item.title}</h5>
                                    <p className="why-choose-card-text mb-0">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="py-5 our-team-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="team-title mb-3">Meet Our Team</h2>
                        <p className="team-subtitle">
                            The passionate professionals behind TechStore's success
                        </p>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {teamMembers.map((member, idx) => (
                            <div className="col-12 col-md-6 col-lg-3" key={idx}>
                                <div
                                    className="team-card h-100 text-center"
                                    onClick={() => handleLinkedInClick(member.linkedin)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="team-image mb-3">
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="img-fluid rounded-circle"
                                        />
                                    </div>
                                    <h5 className="team-name mb-2">{member.name}</h5>
                                    <p className="team-position mb-2">{member.position}</p>
                                    <p className="team-description mb-0">{member.desc}</p>
                                    <div className="linkedin-indicator mt-2">
                                        <small className="text-muted">Click to view LinkedIn</small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fixed Talk with Us Button */}
            {showTalkButton && (
                <div className="fixed-talk-button">
                    <button className="btn btn-talk-us">
                        <FontAwesomeIcon icon={faHeadset} /> <span>Talk with Us</span>
                    </button>
                </div>
            )}
        </>
    );
}