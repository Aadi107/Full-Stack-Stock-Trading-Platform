import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        try {
            const response = await fetch(
                "http://localhost:3002/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Login failed");
            }

            setMessage("Login successful!");

            window.location.href = "http://localhost:3001";

            // Navigate after successful login
            // We will connect your dashboard in the next step.

        } catch (error) {
            setMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            maxWidth: "400px",
            margin: "60px auto",
            padding: "30px",
            border: "1px solid #ddd",
            borderRadius: "10px"
        }}>
            <h2>Welcome Back</h2>
            <p>Login to your trading account</p>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                        width: "100%",
                        padding: "12px",
                        marginBottom: "15px",
                        boxSizing: "border-box"
                    }}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    style={{
                        width: "100%",
                        padding: "12px",
                        marginBottom: "15px",
                        boxSizing: "border-box"
                    }}
                />

                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        width: "100%",
                        padding: "12px",
                        background: "#387ed1",
                        color: "white",
                        border: "none",
                        cursor: "pointer"
                    }}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>

            {message && (
                <p style={{ marginTop: "15px" }}>
                    {message}
                </p>
            )}

            <p style={{ marginTop: "20px" }}>
                Don't have an account?{" "}
                <span
                    onClick={() => navigate("/signup")}
                    style={{
                        color: "#387ed1",
                        cursor: "pointer"
                    }}
                >
                    Sign Up
                </span>
            </p>
        </div>
    );
}

export default Login;
