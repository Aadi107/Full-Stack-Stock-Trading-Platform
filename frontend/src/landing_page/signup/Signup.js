
import React, { useState } from "react";

function Signup() {
    const [formData, setFormData] = useState({
        name: "",
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
                "http://localhost:3002/api/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Registration failed");
            }

            setMessage("Registration successful! You can now log in.");

            setFormData({
                name: "",
                email: "",
                password: ""
            });

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
            <h2>Create Your Account</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ width: "100%", padding: "12px", marginBottom: "15px" }}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ width: "100%", padding: "12px", marginBottom: "15px" }}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password (minimum 8 characters)"
                    value={formData.password}
                    onChange={handleChange}
                    minLength={8}
                    required
                    style={{ width: "100%", padding: "12px", marginBottom: "15px" }}
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
                    {loading ? "Creating Account..." : "Sign Up"}
                </button>
            </form>

            {message && (
                <p style={{ marginTop: "15px" }}>
                    {message}
                </p>
            )}
        </div>
    );
}

export default Signup;
