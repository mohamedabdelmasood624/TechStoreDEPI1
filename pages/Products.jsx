import { useState, useMemo, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTh, faList, faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from 'react-router-dom';
import "./Products.css";


import p1 from "../assets/MacBook-Pro-14-inch-M3-Chip-with-8-core-CPU-10-core-GPU-16GB-Unified-Memory-1TB-SSD-Storage-430x319.jpg";
import p2 from "../assets/iphone.jpg";
import p3 from "../assets/S24.jpeg";
import p4 from "../assets/xps15.jpg";
import p5 from "../assets/ipad.jpg";
import p6 from "../assets/s9tap.jpg";
import p7 from "../assets/hpspectra.jpg";
import p8 from "../assets/lenovo-thinkpad.jpg";
import p9 from "../assets/Apple-AirPods-Pro-3-Egypt-1.webp";
import p10 from "../assets/samsung buds.jpg";
import p11 from "../assets/magicmouse.jpg";
import p12 from "../assets/ultrasharp.jpg";
import p13 from "../assets/Elevate Your Life with the Apple Watch Series 9 - Renewed Edition.jpeg";
import p14 from "../assets/samsung_watch_.jpg";
import p15 from "../assets/hpelite.jpg";
import p16 from "../assets/yoga9i.jpg";
import p17 from "../assets/series9.jpg";
import p18 from "../assets/watch6.jpg";
import p19 from "../assets/ipad air.jpg";
import p20 from "../assets/taplenovo.jpg";
import p21 from "../assets/iphone14.jpg";
import p22 from "../assets/a54.jpg";
import p23 from "../assets/dellprecision.jpg";
import p24 from "../assets/hppavillion.jpg";

// ------------------ DATA ------------------
const products = [
    { id: 1, name: "MacBook Pro 16-inch", brand: "Apple", category: "laptops", price: 2499, oldPrice: 2799, discount: 11, rating: 4.8, reviews: 324, image: p1, type: "new" },
    { id: 2, name: "iPhone 15 Pro Max", brand: "Apple", category: "smartphones", price: 1199, oldPrice: 1299, discount: 8, rating: 4.9, reviews: 892, image: p2, type: "hot" },
    { id: 3, name: "Samsung Galaxy S24 Ultra", brand: "Samsung", category: "smartphones", price: 1299, oldPrice: 1299, discount: 0, rating: 4.7, reviews: 456, image: p3, type: "new" },
    { id: 4, name: "Dell XPS 15", brand: "Dell", category: "laptops", price: 1899, oldPrice: 2199, discount: 14, rating: 4.6, reviews: 234, image: p4, type: "sale" },
    { id: 5, name: "iPad Pro 12.9-inch", brand: "Apple", category: "tablets", price: 1099, oldPrice: 1099, discount: 0, rating: 4.8, reviews: 150, image: p5, type: "featured" },
    { id: 6, name: "Samsung Galaxy Tab S9", brand: "Samsung", category: "tablets", price: 799, oldPrice: 799, discount: 0, rating: 4.5, reviews: 90, image: p6, type: "sale" },
    { id: 7, name: "HP Spectre x360", brand: "HP", category: "laptops", price: 1399, oldPrice: 1399, discount: 0, rating: 4.4, reviews: 112, image: p7, type: "new" },
    { id: 8, name: "Lenovo ThinkPad X1 Carbon", brand: "Lenovo", category: "laptops", price: 1599, oldPrice: 1599, discount: 0, rating: 4.7, reviews: 301, image: p8, type: "bestseller" },
    { id: 9, name: "AirPods Pro 2", brand: "Apple", category: "accessories", price: 249, oldPrice: 249, discount: 0, rating: 4.9, reviews: 950, image: p9, type: "bestseller" },
    { id: 10, name: "Samsung Galaxy Buds Pro", brand: "Samsung", category: "accessories", price: 199, oldPrice: 199, discount: 0, rating: 4.6, reviews: 620, image: p10, type: "sale" },
    { id: 11, name: "Magic Mouse", brand: "Apple", category: "accessories", price: 79, oldPrice: 79, discount: 0, rating: 4.3, reviews: 400, image: p11, type: "featured" },
    { id: 12, name: "Dell UltraSharp Monitor", brand: "Dell", category: "accessories", price: 599, oldPrice: 599, discount: 0, rating: 4.8, reviews: 200, image: p12, type: "sale" },
    { id: 13, name: "MacBook Air M3", brand: "Apple", category: "laptops", price: 1299, oldPrice: 1299, discount: 0, rating: 4.7, reviews: 100, image: p13, type: "new" },
    { id: 14, name: "Samsung Galaxy Z Fold 5", brand: "Samsung", category: "smartphones", price: 1799, oldPrice: 1799, discount: 0, rating: 4.6, reviews: 50, image: p14, type: "featured" },
    { id: 15, name: "HP EliteBook", brand: "HP", category: "laptops", price: 1199, oldPrice: 1199, discount: 0, rating: 4.5, reviews: 80, image: p15, type: "sale" },
    { id: 16, name: "Lenovo Yoga 9i", brand: "Lenovo", category: "laptops", price: 1499, oldPrice: 1499, discount: 0, rating: 4.6, reviews: 130, image: p16, type: "featured" },
    { id: 17, name: "Apple Watch Series 9", brand: "Apple", category: "accessories", price: 399, oldPrice: 399, discount: 0, rating: 4.8, reviews: 750, image: p17, type: "bestseller" },
    { id: 18, name: "Samsung Galaxy Watch 6", brand: "Samsung", category: "accessories", price: 299, oldPrice: 299, discount: 0, rating: 4.5, reviews: 410, image: p18, type: "sale" },
    { id: 19, name: "iPad Air", brand: "Apple", category: "tablets", price: 599, oldPrice: 599, discount: 0, rating: 4.7, reviews: 210, image: p19, type: "featured" },
    { id: 20, name: "Lenovo Tab P11", brand: "Lenovo", category: "tablets", price: 299, oldPrice: 299, discount: 0, rating: 4.3, reviews: 70, image: p20, type: "sale" },
    { id: 21, name: "iPhone 14", brand: "Apple", category: "smartphones", price: 699, oldPrice: 699, discount: 0, rating: 4.6, reviews: 500, image: p21, type: "sale" },
    { id: 22, name: "Samsung Galaxy A54", brand: "Samsung", category: "smartphones", price: 449, oldPrice: 449, discount: 0, rating: 4.4, reviews: 280, image: p22, type: "new" },
    { id: 23, name: "Dell Precision 7770", brand: "Dell", category: "laptops", price: 2999, oldPrice: 2999, discount: 0, rating: 4.7, reviews: 90, image: p23, type: "featured" },
    { id: 24, name: "HP Pavilion Plus", brand: "HP", category: "laptops", price: 899, oldPrice: 899, discount: 0, rating: 4.4, reviews: 160, image: p24, type: "sale" },
];

const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = [];

    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars.push(<FontAwesomeIcon key={`full-${i}`} icon={faStar} className="star full-star" />);
    }

    // Empty stars
    for (let i = fullStars; i < 5; i++) {
        stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStar} className="star empty-star" />);
    }

    return stars;
};

export default function Products() {
    const navigate = useNavigate();
    const location = useLocation();
    const MAX_PRICE = 5000;

    const selectedCategoryFromFooter = location.state?.selectedCategory;

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState(selectedCategoryFromFooter || "all");
    const [price, setPrice] = useState(MAX_PRICE);
    const [brands, setBrands] = useState(["Apple", "Samsung", "Dell", "HP", "Lenovo"]);
    const [rating, setRating] = useState("all");
    const [type, setType] = useState("all");
    const [view, setView] = useState("grid");

    useEffect(() => {
        const isDarkMode = localStorage.getItem("darkMode") === "true";
        document.body.classList.toggle("dark-mode", isDarkMode);
    }, []);

    // calculate all products
    const categoryCounts = useMemo(() => {
        const counts = products.reduce((acc, p) => {
            acc[p.category] = (acc[p.category] || 0) + 1;
            return acc;
        }, { all: products.length });
        return counts;
    }, []);

    const resetFilters = () => {
        setSearch("");
        setCategory("all");
        setPrice(MAX_PRICE);
        setBrands(["Apple", "Samsung", "Dell", "HP", "Lenovo"]);
        setRating("all");
        setType("all");
    };

    // filter logic
    const filtered = products.filter((p) => {
        if (category !== "all" && p.category !== category) return false;
        if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
        if (p.price > price) return false;
        if (!brands.includes(p.brand)) return false;
        if (rating !== "all" && p.rating < rating) return false;
        if (type !== "all" && p.type !== type) return false;
        return true;
    });

    const toggleBrand = (brand) => {
        setBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]));
    };

    const getProductBadge = (type) => {
        switch (type) {
            case "new":
                return <span className="product-badge new">NEW</span>;
            case "hot":
                return <span className="product-badge hot">HOT</span>;
            case "sale":
                return <span className="product-badge sale">SALE</span>;
            case "bestseller":
                return <span className="product-badge bestseller">BESTSELLER</span>;
            case "featured":
                return <span className="product-badge featured">FEATURED</span>;
            default:
                return null;
        }
    };

    const ProductCard = ({ p }) => (
        <div className="product-card" key={p.id}>
            {getProductBadge(p.type)}
            <img src={p.image} alt={p.name} className="product-image" />
            <div className="product-info">
                <span className="product-brand">{p.brand}</span>
                <h3 className="product-name">{p.name}</h3>

                <div className="product-rating">
                    {renderRatingStars(p.rating)}
                    <span className="product-reviews">({p.reviews})</span>
                </div>

                <div className="product-prices">
                    <span className="current-price">${p.price.toLocaleString()}</span>
                    {p.discount > 0 && (
                        <>
                            <span className="old-price">${p.oldPrice.toLocaleString()}</span>
                            <span className="discount-tag">-{p.discount}%</span>
                        </>
                    )}
                </div>

                <div className="product-actions">
                    <button className="view-details-btn">View Details</button>
                    <button
                        className="add-to-basket-btn"
                        onClick={() => navigate('/cart')}
                    >
                        Add to Basket
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="page-container">
            <div className="search-container">
                <div className="search-wrapper">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search for tech products..."
                        className="search-input"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className="search-button">
                        <FontAwesomeIcon icon={faSearch} /> Search
                    </button>
                </div>
            </div>

            {/* CONTENT */}
            <div className="content-wrapper">
                {/* ------------------  (Sidebar) ------------------ */}
                <aside className="sidebar">
                    <div className="sidebar-section">
                        <h3 className="sidebar-title">Categories</h3>
                        <ul className="category-list">
                            {[
                                { key: "all", label: "All Products" },
                                { key: "laptops", label: "Laptops" },
                                { key: "smartphones", label: "Smartphones" },
                                { key: "tablets", label: "Tablets" },
                                { key: "accessories", label: "Accessories" },
                            ].map((cat) => (
                                <li key={cat.key} className={`category-item ${category === cat.key ? "active" : ""}`} onClick={() => setCategory(cat.key)}>
                                    {cat.label}
                                    <span className="category-count">{categoryCounts[cat.key] || 0}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* --- Smart Filters --- */}
                    <div className="sidebar-section smart-filters">
                        <h3 className="sidebar-title">Smart Filters</h3>

                        {/* PRICE RANGE */}
                        <div className="filter-group price-range-filter">
                            <label className="filter-label">PRICE RANGE</label>
                            <div className="price-display">
                                <span className="min-price">$0</span>
                                <span className="max-price">${MAX_PRICE.toLocaleString()}</span>
                            </div>
                            <div className="price-slider-wrapper">
                                <input
                                    type="range"
                                    min="0"
                                    max={MAX_PRICE}
                                    value={price}
                                    step="10"
                                    onChange={(e) => setPrice(Number(e.target.value))}
                                    className="price-slider"
                                />
                            </div>
                            <div className="current-price-display">
                                <span>$0</span>
                                <span>${price.toLocaleString()}</span>
                            </div>
                        </div>

                        {/* BRAND */}
                        <div className="filter-group brand-filter">
                            <label className="filter-label">BRAND</label>
                            {["Apple", "Samsung", "Dell", "HP", "Lenovo"].map((b) => (
                                <label key={b} className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={brands.includes(b)}
                                        onChange={() => toggleBrand(b)}
                                    />
                                    {b}
                                </label>
                            ))}
                        </div>

                        {/* RATING */}
                        <div className="filter-group rating-filter">
                            <label className="filter-label">RATING</label>
                            {[4, 3, 2, 1].map((r) => (
                                <label key={r} className="checkbox-label">
                                    <input
                                        type="radio"
                                        name="rating"
                                        checked={rating === r}
                                        onChange={() => setRating(r)}
                                    />
                                    {renderRatingStars(r)} & Up
                                </label>
                            ))}
                            <label className="checkbox-label">
                                <input
                                    type="radio"
                                    name="rating"
                                    checked={rating === "all"}
                                    onChange={() => setRating("all")}
                                />
                                All Ratings
                            </label>
                        </div>

                        {/* PRODUCT TYPE */}
                        <div className="filter-group type-filter">
                            <label className="filter-label">PRODUCT TYPE</label>
                            {[
                                { key: "all", label: "All Types" },
                                { key: "new", label: "New Arrivals" },
                                { key: "hot", label: "Hot Deals" },
                                { key: "sale", label: "On Sale" },
                                { key: "bestseller", label: "Bestsellers" },
                                { key: "featured", label: "Featured" }
                            ].map((t) => (
                                <label key={t.key} className="checkbox-label">
                                    <input
                                        type="radio"
                                        name="type"
                                        checked={type === t.key}
                                        onChange={() => setType(t.key)}
                                    />
                                    {t.label}
                                </label>
                            ))}
                        </div>

                        {/* زر إعادة التعيين */}
                        <button onClick={resetFilters} className="reset-filters-btn">
                            Reset Filters
                        </button>
                    </div>
                </aside>

                {/* ------------------ MAIN PRODUCTS ------------------ */}
                <main className="main-content">
                    <div className="products-header">
                        <h2>Our Products</h2>
                        <div className="view-toggle">
                            <button className={`view-btn ${view === "grid" ? "active" : ""}`} onClick={() => setView("grid")}>
                                <FontAwesomeIcon icon={faTh} />
                            </button>
                            <button className={`view-btn ${view === "list" ? "active" : ""}`} onClick={() => setView("list")}>
                                <FontAwesomeIcon icon={faList} />
                            </button>
                        </div>
                    </div>

                    {filtered.length === 0 ? (
                        <div className="no-results">
                            <h3>No products found</h3>
                            <p>Try adjusting your filters or search terms.</p>
                        </div>
                    ) : (
                        <div className={view === "grid" ? "products-grid" : "products-grid list-view"}>
                            {filtered.map((p) => <ProductCard key={p.id} p={p} />)}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}