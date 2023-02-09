import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const baseUrl = "https://smart-shoes-api.lucifer25x.repl.co/users/signup";

export default function Sinup() {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [birthday, setBirthday] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      name: name,
      password: password,
      friends: '[]',
      info: `{"birthday": "${birthday}"}`
    }

    axios.post(baseUrl, data).then(response => {
      localStorage.setItem('account', `{"id": ${response.data.insertId}, "name": "${name}, "email": "${email}"}`)
      window.location = "/";
    })
  };

  return (
    <>
      <Navbar />
      <div
        className="mx-auto"
        style={{ marginTop: "20px", width: "30%", minWidth: "350px" }}
      >
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email ünvanı
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              İstifadəçi adı
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Şifrə
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Doğum tarixi
            </label>
            <input
              type="date"
              className="form-control"
              id="birthday"
              onChange={(e) => setBirthday(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Məni xatırla
            </label>
          </div>
          <div className="d-grid gap-2 mx-auto">
            <button type="submit" className="btn btn-primary">
              Hesab yarat
            </button>
          </div>
          <br />
          <a href="/login">Hesabınız var? Giriş edin.</a>
        </form>
      </div>
    </>
  );
}
