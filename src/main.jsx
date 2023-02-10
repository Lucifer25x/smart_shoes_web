import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Search from "./pages/Search";
import About from "./pages/About";
import Settings from "./pages/Settings";
import AccountSettings from "./pages/AccountSettings";
import "./style.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="search" element={<Search />} />
          <Route path="about" element={<About />} />
          <Route path="settings" element={<Settings/>} />
          <Route path="account" element={<AccountSettings/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
