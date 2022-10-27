import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthForm from "./pages/AuthForm";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthForm />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
