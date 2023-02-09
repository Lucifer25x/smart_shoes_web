import React from "react";
import Navbar from "../components/Navbar";

export default function Settings(){
    const oldTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)") ? 'dark' : 'light');
    const setTheme = e => {
        const theme = e.target.value;
        localStorage.setItem("theme", theme);
        window.location = '/settings';
    }

    return (
      <>
        <Navbar />
        <br />
        <h2>Sayt Parametrləri</h2>

        <br />
        <div className="form-floating">
          <select className="form-select" id="theme" onChange={(e) => setTheme(e)} value={oldTheme}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
          <label htmlFor="theme">Temanı seç</label>
        </div>
      </>
    );
}