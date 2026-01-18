import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer/Footer";

/* USER PAGES */
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

import "./index.css";

/* USER LAYOUT */
const UserLayout = ({ children }) => (
  <div className="app-layout">
    <Header />
    <main className="main-content">{children}</main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <UserLayout>
              <Home />
            </UserLayout>
          }
        />

        {/* LISTINGS */}
        <Route
          path="/listings"
          element={
            <UserLayout>
              <Listings />
            </UserLayout>
          }
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={
            <UserLayout>
              <About />
            </UserLayout>
          }
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={
            <UserLayout>
              <Contact />
            </UserLayout>
          }
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={
            <UserLayout>
              <Login />
            </UserLayout>
          }
        />

        {/* SIGNUP */}
        <Route
          path="/signup"
          element={
            <UserLayout>
              <Signup />
            </UserLayout>
          }
        />

        {/* FORGOT PASSWORD */}
        <Route
          path="/forgot-password"
          element={
            <UserLayout>
              <ForgotPassword />
            </UserLayout>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
