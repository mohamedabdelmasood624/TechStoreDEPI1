import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faExternalLinkAlt,
    faShieldAlt,
    faTruck,
    faHeadset,
    faLaptop,
    faMobileAlt,
    faHeadphones,
    faClock,
    faCamera,
    faGamepad,
    faDesktop,
    faPlug,
    faRocket,
    faMicrochip,
    faGlobe,
    faAward,
    faStar,
    faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

import laptopImage from '../assets/MacBook-Pro-14-inch-M3-Chip-with-8-core-CPU-10-core-GPU-16GB-Unified-Memory-1TB-SSD-Storage-430x319.jpg';
import smartphoneImage from '../assets/iPhone 17 Pro Max Orange – Stunning New Apple Design.jpg';
import headphonesImage from '../assets/Sony WH-1000XM5 Headphones.jpg';
import smartwatchImage from '../assets/Elevate Your Life with the Apple Watch Series 9 - Renewed Edition.jpeg';
import cameraImage from '../assets/Canon_EOS_R6II_3qtr.jpeg';
import gamingImage from '../assets/office-desk-table-with-computer-supplies-coffee-cup.jpg';
import monitorImage from '../assets/OLED.jpg';
import accessoriesImage from '../assets/MX.jpg';

const Home = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [animatedStats, setAnimatedStats] = useState({
        customers: 0,
        products: 0
    });
    const [cartNotification, setCartNotification] = useState({ show: false, product: null });
    const heroRef = useRef(null);
    const statsRef = useRef(null);

    // Mouse move effect for 3D parallax
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (heroRef.current) {
                const { left, top, width, height } = heroRef.current.getBoundingClientRect();
                const x = (e.clientX - left) / width - 0.5;
                const y = (e.clientY - top) / height - 0.5;
                setMousePosition({ x, y });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Animated stats counter
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateNumbers();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    // Cart notification timeout
    useEffect(() => {
        if (cartNotification.show) {
            const timer = setTimeout(() => {
                setCartNotification({ show: false, product: null });
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [cartNotification.show]);

    const animateNumbers = () => {
        let customers = 0;
        let products = 0;
        const customersTarget = 50;
        const productsTarget = 1000;
        const duration = 2000;
        const steps = 60;
        const step = duration / steps;

        const timer = setInterval(() => {
            customers += customersTarget / steps;
            products += productsTarget / steps;

            if (customers >= customersTarget) {
                customers = customersTarget;
                products = productsTarget;
                clearInterval(timer);
            }

            setAnimatedStats({
                customers: Math.floor(customers),
                products: Math.floor(products)
            });
        }, step);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!email.trim()) {
            setError(true);
        } else {
            setError(false);
            alert(`Thank you for subscribing with: ${email}`);
            setEmail('');
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (error) setError(false);
    };

    // Handle Add to Cart
    const handleAddToCart = (product) => {
        // Get existing cart from localStorage or initialize empty array
        const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');

        // Check if product already exists in cart
        const existingProductIndex = existingCart.findIndex(item => item.id === product.id);

        if (existingProductIndex > -1) {
            // If product exists, increase quantity
            existingCart[existingProductIndex].quantity += 1;
        } else {
            // If product doesn't exist, add it with quantity 1
            existingCart.push({
                ...product,
                quantity: 1
            });
        }

        // Save updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(existingCart));

        // Show notification
        setCartNotification({
            show: true,
            product: product.name
        });

        // Optional: You can also navigate directly to cart
        // navigate('/cart');
    };

    // Handle View Cart
    const handleViewCart = () => {
        navigate('/cart');
    };

    // Floating animation elements
    const FloatingElement = ({ icon, position, delay }) => (
        <div
            className="floating-element"
            style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
                animationDelay: `${delay}s`
            }}
        >
            <FontAwesomeIcon icon={icon} />
        </div>
    );

    // Render rating stars
    const renderRatingStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star full-star" />);
        }

        if (hasHalfStar) {
            stars.push(<FontAwesomeIcon key="half" icon={faStar} className="star half-star" />);
        }

        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStar} className="star empty-star" />);
        }

        return stars;
    };

    // Product categories data
    const productCategories = [
        {
            image: laptopImage,
            title: "Laptops",
            count: "250+ Products",
            icon: faLaptop,
            iconClass: "icon-blue",
            description: "High-performance laptops for work and gaming"
        },
        {
            image: smartphoneImage,
            title: "Smartphones",
            count: "320+ Products",
            icon: faMobileAlt,
            iconClass: "",
            description: "Latest smartphones with cutting-edge technology"
        },
        {
            image: headphonesImage,
            title: "Headphones",
            count: "180+ Products",
            icon: faHeadphones,
            iconClass: "",
            description: "Premium audio experience with noise cancellation"
        },
        {
            image: smartwatchImage,
            title: "Smartwatches",
            count: "95+ Products",
            icon: faClock,
            iconClass: "",
            description: "Smart wearables for fitness and connectivity"
        },
        {
            image: cameraImage,
            title: "Cameras",
            count: "140+ Products",
            icon: faCamera,
            iconClass: "",
            description: "Professional cameras for photography enthusiasts"
        },
        {
            image: gamingImage,
            title: "Gaming",
            count: "200+ Products",
            icon: faGamepad,
            iconClass: "",
            description: "Gaming gear and accessories for ultimate experience"
        },
        {
            image: monitorImage,
            title: "Monitors",
            count: "160+ Products",
            icon: faDesktop,
            iconClass: "",
            description: "Crystal-clear displays for work and entertainment"
        },
        {
            image: accessoriesImage,
            title: "Accessories",
            count: "350+ Products",
            icon: faPlug,
            iconClass: "",
            description: "Essential accessories for your tech devices"
        }
    ];

    // Featured products data
    const featuredProducts = [
        {
            id: 1,
            name: "MacBook Pro 16-inch",
            brand: "Apple",
            price: 2499,
            oldPrice: 2799,
            discount: 11,
            rating: 4.8,
            reviews: 324,
            image: laptopImage,
            badge: "new"
        },
        {
            id: 2,
            name: "iPhone 15 Pro Max",
            brand: "Apple",
            price: 1199,
            oldPrice: 1299,
            discount: 8,
            rating: 4.9,
            reviews: 892,
            image: smartphoneImage,
            badge: "hot"
        },
        {
            id: 3,
            name: "Sony WH-1000XM5",
            brand: "Sony",
            price: 399,
            oldPrice: 449,
            discount: 12,
            rating: 4.7,
            reviews: 456,
            image: headphonesImage,
            badge: "sale"
        },
        {
            id: 4,
            name: "Apple Watch Series 9",
            brand: "Apple",
            price: 399,
            oldPrice: 399,
            discount: 0,
            rating: 4.8,
            reviews: 750,
            image: smartwatchImage,
            badge: "featured"
        }
    ];

    const getProductBadge = (badge) => {
        switch (badge) {
            case "new":
                return <span className="product-badge new">NEW</span>;
            case "hot":
                return <span className="product-badge hot">HOT</span>;
            case "sale":
                return <span className="product-badge sale">SALE</span>;
            case "featured":
                return <span className="product-badge featured">FEATURED</span>;
            default:
                return null;
        }
    };

    return (
        <>
            {/* Cart Notification */}
            {cartNotification.show && (
                <div className="cart-notification">
                    <div className="notification-content">
                        <FontAwesomeIcon icon={faShoppingCart} className="notification-icon" />
                        <div className="notification-text">
                            <strong>{cartNotification.product}</strong> added to cart!
                        </div>
                        <button
                            className="notification-view-cart"
                            onClick={handleViewCart}
                        >
                            View Cart
                        </button>
                        <button
                            className="notification-close"
                            onClick={() => setCartNotification({ show: false, product: null })}
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}

            {/* =================================================================================== */}
            {/* Hero Section with Advanced 3D Animation */}
            <section
                className="hero-section container-fluid"
                ref={heroRef}
                style={{
                    '--mouse-x': mousePosition.x,
                    '--mouse-y': mousePosition.y
                }}
            >
                {/* Animated Background Elements */}
                <div className="hero-bg-elements">
                    <div className="floating-orb orb-1"></div>
                    <div className="floating-orb orb-2"></div>
                    <div className="floating-orb orb-3"></div>
                    <div className="animated-grid"></div>
                    <div className="particles-container">
                        {[...Array(50)].map((_, i) => (
                            <div
                                key={i}
                                className="particle"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 5}s`,
                                    animationDuration: `${3 + Math.random() * 4}s`
                                }}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Floating Tech Icons */}
                <FloatingElement icon={faMicrochip} position={{ x: 10, y: 20 }} delay={0} />
                <FloatingElement icon={faRocket} position={{ x: 85, y: 30 }} delay={1.5} />
                <FloatingElement icon={faGlobe} position={{ x: 15, y: 70 }} delay={2.5} />
                <FloatingElement icon={faAward} position={{ x: 90, y: 75 }} delay={3.5} />

                <div className="container-fluid row w-100 align-items-center py-5 hero-content-wrapper">
                    {/* Left Content with 3D Text Effects */}
                    <div className="col-lg-7 col-md-12 hero-content my-5 p-5">
                        <div className="hero-text-container">
                            <h1 className="hero-main-title">
                                <span className="title-gradient">Latest</span>
                                <span className="title-3d">Smartphones</span>
                            </h1>

                            <h2 className="hero-subtitle animated-subtitle">
                                <span className="subtitle-word">Discover</span>
                                <span className="subtitle-word">the</span>
                                <span className="subtitle-word">Future</span>
                                <span className="subtitle-word">in</span>
                                <span className="subtitle-word">Your</span>
                                <span className="subtitle-word">Hands</span>
                            </h2>

                            <p className="hero-description">
                                Experience <span className="highlight-text">cutting-edge mobile technology</span> with our
                                premium smartphone collection featuring the <span className="highlight-text">latest innovations</span>
                                and breakthrough designs that redefine what's possible.
                            </p>

                            <div className="hero-buttons pt-5">
                                <a href="/products" className="btn btn-primary animated-btn">
                                    <span className="btn-text">Show Phones</span>
                                    <span className="btn-icon">
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </span>
                                    <div className="btn-shine"></div>
                                </a>
                                <a href="/products" className="btn btn-outline-light animated-btn">
                                    <span className="btn-text">View Collection</span>
                                    <span className="btn-icon">
                                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                                    </span>
                                </a>
                            </div>

                            {/* Animated Stats */}
                            <div className="hero-stats mt-5" ref={statsRef}>
                                <div className="stat-item animated-stat">
                                    <div className="stat-icon">
                                        <FontAwesomeIcon icon={faAward} />
                                    </div>
                                    <div className="stat-number">{animatedStats.customers}K+</div>
                                    <div className="stat-label">Happy Customers</div>
                                </div>
                                <div className="stat-item animated-stat">
                                    <div className="stat-icon">
                                        <FontAwesomeIcon icon={faMicrochip} />
                                    </div>
                                    <div className="stat-number">{animatedStats.products}+</div>
                                    <div className="stat-label">Premium Products</div>
                                </div>
                                <div className="stat-item animated-stat">
                                    <div className="stat-icon">
                                        <FontAwesomeIcon icon={faHeadset} />
                                    </div>
                                    <div className="stat-number">24/7</div>
                                    <div className="stat-label">Expert Support</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Feature Card with 3D Effect */}
                    <div className="col-lg-5 col-md-12">
                        <div className="feature-card-3d">
                            <div className="feature-item animated-feature">
                                <div className="feature-icon-wrapper">
                                    <FontAwesomeIcon icon={faShieldAlt} />
                                </div>
                                <div className="feature-content">
                                    <h4>Premium Quality</h4>
                                    <p>Certified products with lifetime warranty</p>
                                </div>
                                <div className="feature-glow"></div>
                            </div>
                            <div className="feature-item animated-feature">
                                <div className="feature-icon-wrapper">
                                    <FontAwesomeIcon icon={faTruck} />
                                </div>
                                <div className="feature-content">
                                    <h4>Fast Delivery</h4>
                                    <p>Free worldwide shipping in 24h</p>
                                </div>
                                <div className="feature-glow"></div>
                            </div>
                            <div className="feature-item animated-feature">
                                <div className="feature-icon-wrapper">
                                    <FontAwesomeIcon icon={faHeadset} />
                                </div>
                                <div className="feature-content">
                                    <h4>Expert Support</h4>
                                    <p>24/7 customer service & technical support</p>
                                </div>
                                <div className="feature-glow"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="scroll-indicator">
                    <div className="scroll-arrow"></div>
                    <span>Explore More</span>
                </div>
            </section>

            {/* =================================================================================== */}
            {/* Featured Products Section */}
            <section className="featured-products-section py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Featured Products</h2>
                        <p className="section-subtitle">
                            Discover our handpicked selection of premium technology products
                        </p>
                    </div>

                    <div className="row g-4">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="col-md-6 col-lg-3">
                                <div className="featured-product-card">
                                    {getProductBadge(product.badge)}
                                    <div className="product-image-container">
                                        <img src={product.image} alt={product.name} className="product-img" />
                                    </div>
                                    <div className="product-info">
                                        <span className="product-brand">{product.brand}</span>
                                        <h3 className="product-name">{product.name}</h3>
                                        <div className="product-rating">
                                            {renderRatingStars(product.rating)}
                                            <span className="rating-count">({product.reviews})</span>
                                        </div>
                                        <div className="product-pricing">
                                            <span className="current-price">${product.price}</span>
                                            {product.discount > 0 && (
                                                <>
                                                    <span className="original-price">${product.oldPrice}</span>
                                                    <span className="discount-badge">-{product.discount}%</span>
                                                </>
                                            )}
                                        </div>
                                        <div className="product-actions">
                                            <button className="btn-view-details">View Details</button>
                                            <button
                                                className="btn-add-to-cart"
                                                onClick={() => handleAddToCart(product)}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =================================================================================== */}
            {/* Shop by Category Section */}
            <section className="shop-category-section py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Shop by Category</h2>
                        <p className="section-subtitle">
                            Explore our comprehensive collection of premium technology products
                        </p>
                    </div>

                    <div className="row g-4">
                        {productCategories.map((category, index) => (
                            <div key={index} className="col-md-6 col-lg-3">
                                <div className="category-card">
                                    <div className="category-image-wrapper">
                                        <img src={category.image} alt={category.title} className="category-image" />
                                        <div className={`category-icon ${category.iconClass}`}>
                                            <FontAwesomeIcon icon={category.icon} />
                                        </div>
                                    </div>
                                    <div className="category-content">
                                        <h3 className="category-title">{category.title}</h3>
                                        <p className="category-description">{category.description}</p>
                                        <p className="category-count">{category.count}</p>
                                        <a href="/products" className="category-link">
                                            Shop Now <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-5">
                        <a href="/products" className="btn btn-primary btn-lg view-all-btn">
                            View All Categories
                            <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                        </a>
                    </div>
                </div>
            </section>

            {/* ========================================================================================= */}
            {/* Stats Section */}
            <section className="stats-section py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-3 col-6">
                            <div className="stat-item">
                                <div className="stat-icon-main">
                                    <FontAwesomeIcon icon={faAward} />
                                </div>
                                <div className="stat-number">50K+</div>
                                <div className="stat-label">Happy Customers</div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="stat-item">
                                <div className="stat-icon-main">
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div className="stat-number">4.9/5</div>
                                <div className="stat-label">Average Rating</div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="stat-item">
                                <div className="stat-icon-main">
                                    <FontAwesomeIcon icon={faMicrochip} />
                                </div>
                                <div className="stat-number">1000+</div>
                                <div className="stat-label">Products</div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="stat-item">
                                <div className="stat-icon-main">
                                    <FontAwesomeIcon icon={faHeadset} />
                                </div>
                                <div className="stat-number">24/7</div>
                                <div className="stat-label">Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================================================= */}
            {/* Newsletter Section */}
            <section className="newsletter-section py-5">
                <div className="container">
                    <div className="newsletter-content">
                        <h2 className="newsletter-title">Stay Updated</h2>
                        <p className="newsletter-subtitle">
                            Subscribe to get updates on new products and exclusive offers
                        </p>
                        <form className="newsletter-form" onSubmit={handleFormSubmit}>
                            <div className="input-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                                <button type="submit" className="btn btn-newsletter">
                                    Subscribe
                                </button>
                            </div>
                            {error && (
                                <div className="error-message">
                                    Please enter a valid email address
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;