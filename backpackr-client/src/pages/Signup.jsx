import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import heroBg from "../assets/hero1.jpeg";

const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
const validateMobile = (mobile) => /^\d{10}$/.test(mobile);

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", mobile: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const validate = () => {
    if (!form.name.trim()) return "Name is required.";
    if (!validateEmail(form.email)) return "Invalid email address.";
    if (!validateMobile(form.mobile)) return "Mobile number must be 10 digits.";
    if (form.password.length < 6) return "Password must be at least 6 characters.";
    if (form.password !== form.confirmPassword) return "Passwords do not match.";
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
      await signup(form.email, form.password, { name: form.name, mobile: form.mobile });
      setSuccess("Signup successful! You can now log in.");
      setTimeout(() => navigate("/login"), 1500);
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
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded"
            value={form.name}
            onChange={handleChange}
            required
          />
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
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            className="w-full px-4 py-2 border rounded"
            value={form.mobile}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            className="w-full px-4 py-2 border rounded"
            value={form.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter Password"
            className="w-full px-4 py-2 border rounded"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
          <button
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        {error && <p className="mt-4 text-center text-red-600">{error}</p>}
        {success && <p className="mt-4 text-center text-green-600">{success}</p>}
        <p className="mt-4 text-center text-sm">
          Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup; 