# Backpackr Ecommerce React

A modern, full-featured travel and gear ecommerce platform built with React, Firebase, and Tailwind CSS.

---

## 🌍 Project Overview
Backpackr is a travel-focused ecommerce web app where users can:
- Explore curated trip itineraries and travel guides
- Read travel blogs, tips, and gear reviews
- Shop for essential travel gear
- Register, log in, and manage their profile
- Add trips to cart and (optionally) checkout

---

## ✨ Features
- **Home Page:** Hero section, featured trips, gear highlights, mission statement, and footer
- **Trips Page:** Browse all trips, filter/search, view trip cards
- **Trip Details:** Dynamic details for each trip, itinerary previews, photo gallery, add to cart
- **Cart & Checkout:** View cart, remove/clear items, (future: checkout with payment)
- **Authentication:** Signup, login, password reset, user data stored in Firebase Auth & Firestore
- **Profile Page:** View user info, logout, (future: order history)
- **Blog Page:** Hero section, responsive blog cards, tag filter, read more modal, ending note, and footer
- **Global State:** Cart and Auth managed with React Context API
- **Responsive UI:** Built with Tailwind CSS for modern, mobile-friendly design

---

## 🛠️ Tech Stack
- **Frontend:** React, React Router, Context API, Tailwind CSS
- **Backend/DB:** Firebase Auth & Firestore
- **Assets:** Unsplash/Pexels images, custom uploads
- **Tooling:** Vite, ESLint

---

## 🚀 Getting Started

### 1. **Clone the Repository**
```bash
git clone https://github.com/sathish0416/BackPackr_Ecommerce_React.git
cd BackPackr_Ecommerce_React/backpackr-client
```

### 2. **Install Dependencies**
```bash
npm install
```

### 3. **Set Up Firebase**
- Create a Firebase project at [firebase.google.com](https://firebase.google.com/)
- Enable Authentication (Email/Password) and Firestore Database
- Copy your Firebase config to `src/firebase.js`

### 4. **Run the App**
```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) 
---

## 📁 Project Structure
```
backpackr-client/
  ├── src/
  │   ├── assets/           # Images, videos, etc.
  │   ├── components/       # Navbar, Footer, etc.
  │   ├── pages/            # Home, Trips, Blog, Auth, etc.
  │   ├── AuthContext.jsx   # Auth logic
  │   ├── CartContext.jsx   # Cart logic
  │   ├── tripData.js       # Trip data
  │   └── firebase.js       # Firebase config
  ├── package.json
  └── ...
```

---

## 📚 Key Pages & Features
- `/` Splash screen
- `/home` Home page
- `/trips` All trips
- `/trip-details/:tripId` Trip details
- `/cart` Cart
- `/checkout` (future)
- `/login`, `/signup`, `/forgot-password` Auth pages
- `/profile` User profile
- `/blog` Blog page

---

---

## 📦 Clone This Project
Clone this repo to get started:

```
git clone https://github.com/sathish0416/BackPackr_Ecommerce_React.git
```

---

## 📣 Credits
- Built by Sathish0416 
- Images: Unsplash, Pexels, and custom uploads
- Powered by React, Firebase, and Tailwind CSS

---


Happy Backpacking! 🎒 