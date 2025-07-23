import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import heroBg from "../assets/hero1.jpeg";

const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const validate = () => {
    if (!validateEmail(form.email)) return "Invalid email address.";
    if (form.password.length < 6) return "Password must be at least 6 characters.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setLoading(true);
    try {
      await login(form.email, form.password);
      setSuccess("Login successful! Redirecting...");
      setTimeout(() => navigate("/home"), 1500);
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
        <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
        {error && <p className="mt-4 text-center text-red-600">{error}</p>}
        {success && <p className="mt-4 text-center text-green-600">{success}</p>}
        <p className="mt-4 text-center text-sm">
          <a href="/forgot-password" className="text-blue-600 hover:underline">Forgot password?</a>
        </p>
        <p className="mt-2 text-center text-sm">
          Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login; 