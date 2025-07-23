import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import heroBg from "../assets/hero1.jpeg";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);
    try {
      await resetPassword(email);
      setMessage("Password reset email sent! Check your inbox.");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <button
        type="button"
        className="absolute top-6 left-8 text-white text-lg font-bold flex items-center gap-2 hover:underline z-20"
        style={{ background: 'none', border: 'none', outline: 'none' }}
        onClick={() => navigate('/home')}
      >
        <span className="text-xl">&larr;</span> Back to Home
      </button>
      <div className="max-w-md w-full bg-white/90 p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Email"}
          </button>
        </form>
        {message && <p className="mt-4 text-center text-green-600">{message}</p>}
        {error && <p className="mt-4 text-center text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword; 