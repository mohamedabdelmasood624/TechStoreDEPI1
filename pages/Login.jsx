import { useState } from "react";
import "./Login.css"; // افترض انك هتحط CSS هنا

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");

    const check = () => {
        setMsg(""); // clear old messages
        if (email === "") {
            setMsg("* Please enter your email");
        } else if (!email.endsWith("@gmail.com")) {
            setMsg("* Email must end with @gmail.com");
        } else if (password === "") {
            setMsg("* Please enter your password");
        } else if (password.length < 6) {
            setMsg("* Password must be at least 6 characters");
        } else {
            setMsg("✔ Login successful!");
            // هنا ممكن تعمل redirect اذا حبيت
            // window.location.href = "/home/index.html";
        }
    };

    return (
        <>
            <div
                className="container d-flex justify-content-center align-items-center mt-5"
                style={{ minHeight: "80vh" }}
            >
                <div
                    className="p-4 p-md-5 rounded-4 shadow-lg bg-white w-100"
                    style={{ maxWidth: "400px" }}
                >
                    <h1 className="text-center mb-4 text-primary fw-bold">Login</h1>

                    <label className="fs-5 fw-semibold">Email</label>
                    <input
                        type="text"
                        className="form-control mb-3 py-2"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label className="fs-5 fw-semibold">Password</label>
                    <input
                        type="password"
                        className="form-control mb-4 py-2"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        onClick={check}
                        className="btn btn-primary w-100 py-2 fs-5"
                    >
                        Login
                    </button>

                    {msg && (
                        <div
                            className={`alert mt-3 text-center ${msg.includes("✔") ? "text-success" : "text-danger"
                                }`}
                            style={{ fontSize: "20px" }}
                        >
                            {msg}
                        </div>
                    )}
                </div>
            </div>

            {/* Fixed Chat Button */}
            <div className="fixed-talk-button" id="talkButton">
                <button className="btn btn-talk-us">
                    <i className="fas fa-headset"></i>
                    <span>Chat with Me</span>
                </button>
            </div>
        </>
    );
}
