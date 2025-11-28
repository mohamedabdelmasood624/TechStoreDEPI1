import { useEffect } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faEnvelope,
    faLocationDot,
    faClock,
    faPaperPlane
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
    useEffect(() => {
        const toggle = document.getElementById("darkModeToggle");
        const icon = document.getElementById("darkModeIcon");
        const body = document.body;
        const isDark = localStorage.getItem("darkMode") === "enabled";

        if (isDark) {
            body.classList.add("dark-mode");
            if (icon) {
                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");
            }
        }

        if (toggle) {
            toggle.addEventListener("click", function () {
                body.classList.toggle("dark-mode");
                const nowDark = body.classList.contains("dark-mode");
                if (icon) {
                    icon.classList.toggle("fa-sun", nowDark);
                    icon.classList.toggle("fa-moon", !nowDark);
                }
                localStorage.setItem("darkMode", nowDark ? "enabled" : "disabled");
            });
        }
    }, []);

    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <header className="contact-hero text-white d-flex align-items-center">
                <div className="hero-overlay"></div>
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
                            <p className="lead mb-0">Get in touch with our team</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* ================= CONTACT CARDS ================= */}
            <section className="py-5 contact-cards">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="contact-card h-100 text-center p-4">
                                <div className="icon-wrap mx-auto mb-3">
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <h5 className="fw-semibold mb-2">Phone</h5>
                                <p className="text-secondary mb-0">+1 (555) 123-4567</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="contact-card h-100 text-center p-4">
                                <div className="icon-wrap mx-auto mb-3">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <h5 className="fw-semibold mb-2">Email</h5>
                                <p className="text-secondary mb-0">tech-store@gmail.com</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="contact-card h-100 text-center p-4">
                                <div className="icon-wrap mx-auto mb-3">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </div>
                                <h5 className="fw-semibold mb-2">Address</h5>
                                <p className="text-secondary mb-0">
                                    123 Tech Street, Silicon Valley, CA 94000
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="contact-card h-100 text-center p-4">
                                <div className="icon-wrap mx-auto mb-3">
                                    <FontAwesomeIcon icon={faClock} />
                                </div>
                                <h5 className="fw-semibold mb-2">Business Hours</h5>
                                <p className="text-secondary mb-0">Mon - Fri: 9AM - 6PM PST</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= Form ================= */}
            <section className="container my-5">
                <div className="gap-5 row justify-content-center py-5">
                    <div className="col-md-5 container pt-5">
                        <h2 className="fw-bold px-5 mx-4">Send us a message</h2>
                        <p className="px-5 mx-4 text-dark-emphasis">
                            Have a question or need assistance? We'd love to hear from you.
                            Send us a message and we'll respond as soon as possible.
                        </p>
                        <form>
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Name"
                                required
                            />

                            <label className="mt-3">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Your Email"
                                required
                            />

                            <label className="mt-3">Message</label>
                            <textarea
                                className="form-control"
                                style={{ height: "255px", resize: "none" }}
                            ></textarea>

                            <button className="btn btn-primary form-control mt-3">
                                Send Message <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </form>
                    </div>

                    <div className="col-md-5 pt-5">
                        <h2 className="fw-bold">Visit Our Store</h2>
                        <p className="text-dark-emphasis">
                            Come visit our flagship store to experience our products firsthand
                            and get expert advice from our knowledgeable team.
                        </p>
                        <iframe
                            title="Store Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.966246209048!2d31.265375499999998!3d29.951649499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458475cdf1db7d5%3A0x2f2919382128f11e!2sMoataz%20Designs!5e0!3m2!1sen!2seg!4v1760054524262!5m2!1sen!2seg"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

                {/* ================= FAQ ================= */}
                <section className="my-5 faq-section" style={{ backgroundColor: "#f3f5f8" }}>
                    <div className="container py-5">
                        <div className="text-center mb-4">
                            <h2 className="fw-bold display-6 mb-2">Frequently Asked Questions</h2>
                            <p className="text-secondary fs-5 mb-0">Quick answers to common questions</p>
                        </div>

                        <div className="faq-list d-grid gap-3">
                            <div className="faq-item rounded-4 bg-white p-4 shadow-sm">
                                <h5 className="fw-semibold mb-2">What is your return policy?</h5>
                                <p className="text-secondary mb-0">
                                    We offer a 30-day return policy for all products in original condition.
                                    Items must be returned with original packaging and receipt.
                                </p>
                            </div>

                            <div className="faq-item rounded-4 bg-white p-4 shadow-sm">
                                <h5 className="fw-semibold mb-2">Do you offer international shipping?</h5>
                                <p className="text-secondary mb-0">
                                    Yes, we ship worldwide. Shipping costs and delivery times vary by location.
                                    Free shipping is available for orders over $100 within the US.
                                </p>
                            </div>

                            <div className="faq-item rounded-4 bg-white p-4 shadow-sm">
                                <h5 className="fw-semibold mb-2">How can I track my order?</h5>
                                <p className="text-secondary mb-0">
                                    Once your order ships, you'll receive a tracking number via email. You
                                    can use this to track your package on our website or the carrier's site.
                                </p>
                            </div>

                            <div className="faq-item rounded-4 bg-white p-4 shadow-sm">
                                <h5 className="fw-semibold mb-2">Do you offer technical support?</h5>
                                <p className="text-secondary mb-0">
                                    Yes, we provide comprehensive technical support for all products. Contact our support team via phone, email, or live chat for assistance.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}