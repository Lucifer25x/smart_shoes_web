import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const baseUrl = "https://smart-shoes-api.lucifer25x.repl.co/users/";

export default function Friends() {
  let account = JSON.parse(localStorage.getItem("account")) || false;
  if (account) {
    let friends = eval(account.friends) || [];

    const sekilci = (user) => {
      const saitler = ["a", "ı", "o", "u", "e", "ə", "i", "ö"];
      const saitler1 = ["a", "ı"];
      const saitler2 = ["o", "u"];
      let last = "";
      for (let i = 0; i < user.length; i++) {
        if (saitler.indexOf(user[i]) != -1) {
          if(saitler1.indexOf(user[i]) != -1){
            last = 'ı';
          } else if(saitler2.indexOf(user[i]) != -1){
            last = 'u';
          } else {
            last = 'i';
          }
        }
      }
      if (last == user[user.length - 1]) {
        return `n${last}n`;
      } else {
        return `${last}n`;
      }
    };

    const deleteFriend = (user) => {
      friends.splice(friends.indexOf(user), 1);
      axios
        .post(baseUrl + "updateInfo", {
          id: account.id,
          password: account.password,
          info: JSON.stringify(friends),
          which: "friends",
        })
        .then((response) => {
          if (response.data.affectedRows == 1) {
            account.friends = JSON.stringify(friends);
            localStorage.setItem("account", JSON.stringify(account));
            window.location = "/friends";
          } else {
            alert("Silməkdə problem yarandı.");
          }
        });
    };

    const getLocation = (user) => {
      axios.post(baseUrl + "getFriends", { name: user }).then((response) => {
        let friends = JSON.parse(response.data);
        if (friends.indexOf(account.name) != -1) {
          axios
            .post(baseUrl + "getLocation", { name: user })
            .then((response) => {
              let location = JSON.parse(response.data) || false;
              if (location) {
                window.location.href = `https://www.google.com/maps/@${location.lat},${location.lng},20z`;
              }
            });
        } else {
          alert(`Sən ${user}${sekilci(user)} dostlar siyahısına daxil deyilsən.`);
        }
      });
    };

    const getLast = (user) => {
      axios
        .post(baseUrl + "getLast", {
          name: user,
        })
        .then((response) => {
          alert(response.data);
        });
    };

    return (
      <>
        <Navbar />
        <ul className="list-group list-group-flush">
          {friends.map((user, i) => (
            <li
              className="list-group-item"
              style={{ display: "flex", alignItems: "center" }}
              key={i}
            >
              <div className="row container-fluid">
                <div className="col-6 rw">
                  <div className="avatar">{user.slice(1, 2).toUpperCase()}</div>
                  <span
                    style={{ marginLeft: "10px" }}
                    onDoubleClick={(e) =>
                      getLast(user)
                    }
                  >
                    {user}
                  </span>
                </div>
                <div className="col-6 rl">
                  <button
                    className="btn btn-danger"
                    onClick={(e) =>
                      deleteFriend(user)
                    }
                  >
                    Dostluqdan sil
                  </button>
                  <button
                    onClick={(e) => getLocation(user)}
                    style={{ marginLeft: "10px" }}
                    className="btn btn-success"
                  >
                    Lokasiyasını öyrən
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  } else {
    window.location = "/login";
  }
}
