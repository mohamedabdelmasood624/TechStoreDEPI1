import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(() => {
        // Initialize from localStorage using lazy initial state
        return localStorage.getItem('darkMode') === 'enabled';
    });

    const [cartCount] = useState(3);
    const location = useLocation();

    // Apply dark mode when state changes
    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
        localStorage.setItem('darkMode', darkMode ? 'enabled' : 'disabled');
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    // Check if current path is active
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top shadow-sm">
            <div className="container">
                {/* Logo + Brand */}
                <div className="d-flex align-items-center">
                    <div className="logo-box">
                        <div className="logo-circle-overlay"></div>
                        <span className="logo-text">T</span>
                    </div>

                    <Link className="navbar-brand mx-3 fs-3 fw-bolder" to="/">
                        <span className="tech-text">Tech</span>
                        <span className="store-text">Store</span>
                        <p className="premium-tech text-muted mb-0">Premium Tech</p>
                    </Link>
                </div>

                {/* Toggle button for mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar links */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className={`nav-link fs-6 ${isActive('/') ? 'active' : ''}`}
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link fs-6 ${isActive('/products') ? 'active' : ''}`}
                                to="/products"
                            >
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link fs-6 ${isActive('/about') ? 'active' : ''}`}
                                to="/about"
                            >
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link fs-6 ${isActive('/contact') ? 'active' : ''}`}
                                to="/contact"
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>

                    {/* Right buttons */}
                    <div className="d-flex align-items-center gap-2">
                        {/* Dark Mode */}
                        <button
                            type="button"
                            className="btn btn-nav"
                            onClick={toggleDarkMode}
                            aria-label="Toggle dark mode"
                        >
                            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                        </button>



                        {/* Login */}
                        <Link to="/login" className="btn btn-nav">
                            <FontAwesomeIcon icon={faUser} /> <span className="ms-1">Login</span>
                        </Link>

                        {/* Cart */}
                        <Link to="/cart" className="btn btn-nav position-relative">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            {cartCount > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;