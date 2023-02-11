import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const baseUrl = "https://smart-shoes-api.lucifer25x.repl.co/users/login";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    axios.post(baseUrl, data).then((response) => {
      if (response.data.length == 0) {
        alert("Email ünvanı və ya şifrə səhv daxil edilmişdir.");
      } else {
        localStorage.setItem("account", JSON.stringify(response.data[0]));
        window.location = "/";
      }
    });
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
              autoFocus
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
          <div className="d-grid gap-2 mx-auto">
            <button type="submit" className="btn btn-primary">
              Daxil olun
            </button>
          </div>
          <br />
          <a href="/signup">Hesabınız yoxdur? Hesab yaradın.</a>
        </form>
      </div>
    </>
  );
}
