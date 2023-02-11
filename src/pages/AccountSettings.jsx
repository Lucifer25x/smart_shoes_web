import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const baseUrl = "https://smart-shoes-api.lucifer25x.repl.co/users/";

export default function AccountSettings() {
  if (localStorage.getItem("account")) {
    const account = JSON.parse(localStorage.getItem('account'));
    const oldBirthday = JSON.parse(account.info).birthday;
    const [name, setName] = React.useState(account.name);
    const [password, setPassword] = React.useState(account.password);
    const [birthday, setBirthday] = React.useState(oldBirthday);

    const handleSubmit = e => {
        e.preventDefault();

        if(password != account.password){
            axios
              .post(baseUrl + "updatePassword", {
                id: account.id,
                oldPassword: account.password,
                newPassword: password,
              })
              .then((response) => {
                if (response.data.affectedRows == 1) {
                  alert("Şifrəniz uğurla dəyişdirildi.");
                } else {
                  alert("Şifrəniz dəyişdirilmədi.");
                }
              });
        }
        if(name != account.name){
            axios.post(baseUrl + "updateName", {id: account.id, name: name}).then(response => {
                if (response.data.affectedRows == 1) {
                  alert("Adınız uğurla dəyişdirildi.");
                } else {
                  alert("Adınız dəyişdirilmədi.");
                }
            })
        }
        if(birthday != oldBirthday){
            //TODO: ad gununu deyis.
        }
    }
    
    const deleteAccount = e => {
      if(window.confirm('Hesabı silmək istəyirsinizmi?')){
        axios.post(baseUrl + 'delete', {id: account.id, password: account.password}).then(response => {
          if(response.data.affectedRows == 1){
            localStorage.removeItem('account');
          } else {
            alert('Hesab silinmədi');
          }
        })
      }
    }
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
                İstifadəçi adı
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                aria-describedby="emailHelp"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
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
              />
            </div>
            <div className="mb-3">
              <label htmlFor="birthday" className="form-label">
                Doğum tarixi
              </label>
              <input
                type="date"
                className="form-control"
                id="birthday"
                defaultValue={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mx-auto">
              <button type="submit" className="btn btn-primary">
                Məlumatları yeniləyin.
              </button>
            </div>
            <div className="d-grid gap-2 mx-auto">
              <button style={{marginTop: '10px'}} type="button" className="btn btn-danger" onClick={e => {deleteAccount()}}>
                Hesabı silin.
              </button>
            </div>
          </form>
        </div>
      </>
    );
  } else {
    window.location = "/login";
  }
}
