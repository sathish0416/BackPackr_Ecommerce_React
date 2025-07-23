import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Profile = () => {
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    const fetchProfile = async () => {
      setLoading(true);
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProfile(docSnap.data());
      }
      setLoading(false);
    };
    fetchProfile();
  }, [user, navigate]);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (!profile) return <div className="flex justify-center items-center h-screen">Profile not found.</div>;

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(/src/assets/hero1.jpeg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Navbar isScrolled={false} />
      <div className="max-w-md w-full bg-white/90 p-8 rounded shadow mt-20">
        <h2 className="text-2xl font-bold mb-4 text-center">Profile</h2>
        <div className="space-y-4 mb-6">
          <div><span className="font-semibold">Name:</span> {profile.name}</div>
          <div><span className="font-semibold">Email:</span> {profile.email}</div>
          <div><span className="font-semibold">Mobile:</span> {profile.mobile}</div>
        </div>
        <button onClick={handleLogout} className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-semibold">Logout</button>
      </div>
    </div>
  );
};

export default Profile; 