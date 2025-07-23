import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Navbar = ({ isScrolled }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const isHome = location.pathname === "/home";
  const isTrips = location.pathname === "/trips";
  const isProfile = location.pathname === "/profile";
  const isBlog = location.pathname === "/blog";

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Left Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🎒</span>
          <span
            className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? "text-blue-700" : "text-white"
            }`}
          >
            Backpackr
          </span>
        </div>
        {/* Right Links */}
        <div className="flex items-center gap-6">
          <a href="#" onClick={() => navigate("/home")}
            className={`font-medium transition-colors duration-300 ${isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"} ${isHome ? 'underline text-blue-700 font-bold' : ''}`}>Home</a>
          <a href="#" onClick={() => navigate("/trips")}
            className={`font-medium transition-colors duration-300 ${isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"} ${isTrips ? 'underline text-blue-700 font-bold' : ''}`}>Trips</a>
          <a href="#" className={`font-medium transition-colors duration-300 ${isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"}`}>Gear Shop</a>
          <a href="#" onClick={() => navigate("/blog")}
            className={`font-medium transition-colors duration-300 ${isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"} ${isBlog ? 'underline text-blue-700 font-bold' : ''}`}>Blog</a>
          <a href="#" className={`font-medium transition-colors duration-300 ${isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"}`}>About</a>
          <a href="#" className={`font-medium transition-colors duration-300 ${isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"}`}>Contact</a>
          {user ? (
            <button
              className={`flex items-center ml-2 gap-2 px-3 py-1 rounded-full font-semibold transition-colors duration-300 ${isProfile ? 'bg-blue-600 text-white shadow-lg underline' : 'bg-blue-100 hover:bg-blue-200 text-blue-700'}`}
              onClick={() => navigate("/profile")}
            >
              <span className="text-lg">👤</span>
              <span>Profile</span>
            </button>
          ) : (
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold ml-2 shadow-lg"
              onClick={() => navigate("/login")}
            >
              Login / Register
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 