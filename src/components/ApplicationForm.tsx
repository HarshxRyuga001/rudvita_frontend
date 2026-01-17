import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ApplicationForm: React.FC = () => {
    const { position: positionParam } = useParams<{ position: string }>();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [position, setPosition] = useState(decodeURIComponent(positionParam || ""));


    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !phone || !position) {
            setError("All fields are required");
            return;
        }

        setError("");
        setSuccess("");
        setLoading(true);

        try {
            console.log("Submitting to:", `${import.meta.env.VITE_API_URL}/api/apply`);
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/apply`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, phone, position }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Failed to submit application");
            }

            setSuccess("Application submitted successfully!");
            setName("");
            setEmail("");
            setPhone("");
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unexpected error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-wrapper">
            <h2 className="contact-title">Apply for {position}</h2>

            <div className="contact-box" style={{ justifyContent: "center" }}>
                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                    style={{ width: "100%", maxWidth: "500px" }}
                >
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Position"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        readOnly
                        style={{ backgroundColor: "#f0f0f0" }}
                    />

                    {error && <p className="error">{error}</p>}
                    {success && <p className="success">{success}</p>}

                    <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                        <button type="submit" disabled={loading}>
                            {loading ? "Submitting..." : "Submit Application"}
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate("/career")}
                            style={{ backgroundColor: "#888" }}
                        >
                            Back
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplicationForm;
