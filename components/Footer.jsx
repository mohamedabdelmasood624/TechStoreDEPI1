import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export default function Footer() {
    const navigate = useNavigate();

    useEffect(() => { }, []);

    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleCategoryFilter = (category) => {
        navigate('/products', { state: { selectedCategory: category } });
    };

    return (
        <footer className="footer mt-5">
            <div className="container pt-5">
                <div className="row">
                    {/* Company Information */}
                    <div className="col-md-3 mb-4">
                        <div className="logo-container">
                            <div className="logo-circle">
                                <span style={{ color: "white", fontWeight: "bold" }}>T</span>
                            </div>
                            <div className="logo-text">
                                <h5>TechStore</h5>
                                <small>Premium Tech</small>
                            </div>
                        </div>
                        <p>
                            TechStore is your trusted destination for the latest technology
                            products. We offer premium devices with exceptional quality and
                            competitive prices.
                        </p>
                        <div className="social-icons">
                            <div className="social-icon">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                            </div>
                            <div className="social-icon">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </div>
                            <div className="social-icon">
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </div>
                            <div className="social-icon">
                                <a
                                    href="https://www.linkedin.com/in/tech-store1/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-3 mb-4">
                        <h5>Quick Links</h5>
                        <ul>
                            <li>
                                <a
                                    href="#!"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation('/');
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#!"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation('/products');
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Products
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#!"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation('/about');
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#!"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation('/contact');
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="col-md-3 mb-4">
                        <h5>Categories</h5>
                        <ul>
                            <li>
                                <a
                                    href="#!"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleCategoryFilter('laptops');
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Laptops
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#!"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleCategoryFilter('smartphones');
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Smartphones
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#!"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleCategoryFilter('accessories');
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Headphones
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#!"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleCategoryFilter('accessories');
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Smartwatches
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#!"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleCategoryFilter('accessories');
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Cameras
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#!"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleCategoryFilter('accessories');
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Accessories
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Support */}
                    <div className="col-md-3 mb-4">
                        <h5>Customer Support</h5>
                        <ul>
                            <li>
                                <a href="#!">Customer Service</a>
                            </li>
                            <li>
                                <a href="#!">Shipping Info</a>
                            </li>
                            <li>
                                <a href="#!">Returns & Exchanges</a>
                            </li>
                            <li>
                                <a href="#!">Size Guide</a>
                            </li>
                            <li>
                                <a href="#!">FAQ</a>
                            </li>
                            <li>
                                <a href="#!">Track Your Order</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-md-6">
                            <p style={{ margin: 0 }}>© 2024 TechStore - All rights reserved</p>
                        </div>
                        <div
                            className="col-md-6"
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                gap: "20px",
                            }}
                        >
                            <a href="#!">Privacy Policy</a>
                            <a href="#!">Terms of Service</a>
                            <a href="#!">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}