import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";



function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("isAuthenticated");
    setAuth(stored === "true");
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    setAuth(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setAuth(false);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          auth ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Login onLogin={handleLogin} />
          )
        }
      />
      <Route
        path="/dashboard"
        element={
          auth ? (
            <Dashboard onLogout={handleLogout} />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
    </Routes>
  );
}

export default App;
