import { useState } from "react";
import { FaHeadset } from "react-icons/fa";
import "./ShopCart.css";

import headphoneImage from "../assets/Sony WH-1000XM5 Headphones.jpg";
import watchImage from "../assets/Apple-AirPods-Pro-3-Egypt-1.webp";
import bagImage from "../assets/MX.jpg";

export default function ShopCart() {
    const searchParams = new URLSearchParams(window.location.search);
    const isEnglish = (searchParams.get("lang") || "").toLowerCase() !== "ar";

    const labels = {
        en: {
            products: "Products",
            orderSummary: "Order Summary",
            subtotal: "Subtotal",
            shipping: "Shipping",
            tax: "Tax (15%)",
            grandTotal: "Total",
            remove: "Remove",
            checkout: "Checkout",
            continue: "Continue Shopping",
            coupon: "Coupon Code",
            couponPlaceholder: "Enter coupon code",
            apply: "Apply",
            currency: "$",
        },
        ar: {
            products: "المنتجات",
            orderSummary: "ملخص الطلب",
            subtotal: "المجموع الفرعي",
            shipping: "الشحن",
            tax: "الضريبة (15%)",
            grandTotal: "المجموع الإجمالي",
            remove: "حذف",
            checkout: "إتمام الشراء",
            continue: "متابعة التسوق",
            coupon: "كود الخصم",
            couponPlaceholder: "أدخل كود الخصم",
            apply: "تطبيق",
            currency: "ر.س",
        }
    };

    const t = isEnglish ? labels.en : labels.ar;

    const [items, setItems] = useState([
        {
            id: "headphones",
            name: "High-Quality Wireless Headphones",
            price: 299,
            qty: 2,
            img: headphoneImage,
        },
        {
            id: "watch",
            name: "Advanced Smart Watch",
            price: 799,
            qty: 1,
            img: watchImage,
        },
        {
            id: "bag",
            name: "Practical and Elegant Backpack",
            price: 149,
            qty: 1,
            img: bagImage,
        },
    ]);

    const [couponCode, setCouponCode] = useState("");
    const [couponApplied, setCouponApplied] = useState(false);

    const shippingFee = 25;

    const updateQty = (id, action) => {
        setItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, qty: action === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1) }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const applyCoupon = () => {
        if (!couponApplied && couponCode.trim().toUpperCase() === "SAVE10") {
            setCouponApplied(true);
            alert("Coupon applied!");
        } else {
            alert("Invalid or already applied!");
        }
    };

    // Computed totals instead of state
    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
    const tax = +(subtotal * 0.15).toFixed(2);
    let grandTotal = subtotal + shippingFee + tax;
    if (couponApplied) grandTotal = +(grandTotal * 0.9).toFixed(2);

    const formatPrice = (number) => number.toFixed(2);

    return (
        <>
            <main className="container my-5 cart-page">
                <div className="row g-4">
                    <div className="col-lg-8">
                        <div className="card cart-items-card">
                            <div className="card-body p-4">
                                <h4 className="mb-4 cart-section-title">
                                    {t.products} ({items.reduce((total, item) => total + item.qty, 0)})
                                </h4>
                                {items.map((item) => (
                                    <div
                                        className="cart-item d-flex align-items-center mb-3"
                                        key={item.id}
                                    >
                                        <div className="cart-thumb me-3">
                                            <img
                                                src={item.img}
                                                alt={item.name}
                                                style={{
                                                    width: "80px",
                                                    height: "80px",
                                                    borderRadius: "8px",
                                                    objectFit: "cover"
                                                }}
                                                onError={(e) => {
                                                    e.target.src = "https://via.placeholder.com/80x80?text=No+Image";
                                                }}
                                            />
                                        </div>
                                        <div className="cart-info flex-grow-1">
                                            <h6 className="cart-title">
                                                {item.name}
                                            </h6>
                                            <div className="price-line">
                                                <span className="muted">{t.currency}</span>{" "}
                                                {formatPrice(item.price)}
                                            </div>
                                        </div>
                                        <div className="qty-wrap d-flex align-items-center mx-3">
                                            <button
                                                className="qty-btn"
                                                onClick={() => updateQty(item.id, "dec")}
                                            >
                                                −
                                            </button>
                                            <span className="qty-count mx-2">{item.qty}</span>
                                            <button
                                                className="qty-btn"
                                                onClick={() => updateQty(item.id, "inc")}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div className="cart-item-right text-end">
                                            <div className="item-price">
                                                {formatPrice(item.price * item.qty)}{" "}
                                                <span className="muted">{t.currency}</span>
                                            </div>
                                            <div
                                                className="remove-link text-danger mt-1"
                                                style={{ cursor: "pointer" }}
                                                onClick={() => removeItem(item.id)}
                                            >
                                                {t.remove}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card summary-card">
                            <div className="card-body p-4">
                                <h4 className="mb-4">{t.orderSummary}</h4>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="summary-label">{t.subtotal}</span>
                                    <span className="summary-value">
                                        {formatPrice(subtotal)} {t.currency}
                                    </span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="summary-label">{t.shipping}</span>
                                    <span className="summary-value">
                                        {shippingFee} {t.currency}
                                    </span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <span className="summary-label">{t.tax}</span>
                                    <span className="summary-value">
                                        {formatPrice(tax)} {t.currency}
                                    </span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-4 total-row">
                                    <span className="total-label">{t.grandTotal}</span>
                                    <span className="total-value">
                                        {formatPrice(grandTotal)} {t.currency}
                                    </span>
                                </div>
                                <button className="btn btn-primary w-100 mb-3">
                                    {t.checkout}
                                </button>
                                <a href="/products" className="btn btn-outline-secondary w-100 mb-4">
                                    {t.continue}
                                </a>
                                <div className="mb-2">{t.coupon}</div>
                                <div className="d-flex gap-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder={t.couponPlaceholder}
                                        value={couponCode}
                                        onChange={(e) => setCouponCode(e.target.value)}
                                    />
                                    <button className="btn btn-secondary" onClick={applyCoupon}>
                                        {t.apply}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className="fixed-talk-button">
                <button className="btn btn-talk-us">
                    <FaHeadset />
                    <span>Talk with Us</span>
                </button>
            </div>
        </>
    );
}