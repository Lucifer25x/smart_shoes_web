import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const baseUrl = "https://smart-shoes-api.lucifer25x.repl.co/users/";

export default function Search() {
  const curLoc = window.location.href;
  const search = curLoc.split("?");
  const name = search[1].split("=")[1];

  const [res, setRes] = React.useState(null);
  let account = JSON.parse(localStorage.getItem("account")) || false;

  React.useEffect(() => {
    axios.get(baseUrl + "search/" + name).then((response) => {
      setRes(response.data);
    });
  }, []);

  if (!res) return null;

  const addFriend = (user) => {
    if (account) {
      let lst = account.friends.slice(1, account.friends.length - 1);
      let friends = lst.length > 0 ? lst.split(",") : [];
      friends.push(user);
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
            window.location = "/search?name=" + name;
          } else {
            alert("Əlavə etməkdə problem yarandı.");
          }
        });
    }
  };

  const deleteFriend = (user) => {
    if (account) {
      let lst = account.friends.slice(1, account.friends.length - 1);
      let friends = lst.length > 0 ? lst.split(",") : [];

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
            window.location = "/search?name=" + name;
          } else {
            alert("Silməkdə problem yarandı.");
          }
        });
    }
  };

  return (
    <>
      <Navbar search={name} />
      <ul className="list-group list-group-flush">
        {res.map((user, i) => (
          <li
            className="list-group-item"
            style={{ display: "flex", alignItems: "center" }}
            key={i}
          >
            <div className="row container-fluid">
              <div className="col-8 rw">
                <div className="avatar">{user.slice(0, 1).toUpperCase()}</div>
                <span style={{ marginLeft: "10px" }}>{user}</span>
              </div>
              <div className="col-4 rl">
                <button
                  className="btn btn-success"
                  onClick={(e) => addFriend(user)}
                  style={
                    account
                      ? account.friends.indexOf(user) != -1
                        ? { display: "none" }
                        : { display: "block" }
                      : { display: "block" }
                  }
                  disabled={account ? account.name == user : !account}
                >
                  Əlavə et
                </button>
                <button
                  className="btn btn-danger"
                  onClick={(e) => deleteFriend(user)}
                  style={
                    account
                      ? account.friends.indexOf(user) == -1
                        ? { display: "none" }
                        : { display: "block" }
                      : { display: "none" }
                  }
                  disabled={account ? account.name == user : !account}
                >
                  Dostluqdan sil
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
