import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const baseUrl =
  "https://smart-shoes-api.lucifer25x.repl.co/users/updateLocation";

export default function Dashboard() {
  const account = JSON.parse(localStorage.getItem("account"));
  const location = JSON.parse(localStorage.getItem("location")) || false;

  window.onload = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          if (location) {
            if (location != pos) {
              localStorage.setItem("location", JSON.stringify(pos));
              axios
                .post(baseUrl, {
                  id: account.id,
                  location: JSON.stringify(pos),
                })
                .then((response) => {
                  if (response.data.affectedRows != 1) {
                    alert("Lokasiyanın saxlanmasında problem yarandı.");
                  }
                });
            }
          } else {
            localStorage.setItem("location", JSON.stringify(pos));
            axios
              .post(baseUrl, {
                id: account.id,
                location: JSON.stringify(pos),
              })
              .then((response) => {
                if (response.data.affectedRows != 1) {
                  alert("Lokasiyanın saxlanmasında problem yarandı.");
                }
              });
          }
        },
        () => {
          alert(
            "Funksionallıqdan istifadə etmək üçün lokasiya özəlliyinə izin verməlisiniz."
          );
        }
      );
    } else {
      alert("Brauzeriniz lokasiya funksiyasını dəstəkləmir.");
    }
  };

  return (
    <>
      <Navbar />
      <h1 style={{ marginTop: "10px" }}>Ana Səhifə</h1>
      <hr />
      <br />
      <a target="_blank" style={!location ? {display: 'none'} : {display: 'flex'}} href={location ? `https://www.google.com/maps/@${location.lat},${location.lng},20z` : '/'}>Lokasiyanızı Google Maps'də açın.</a>
    </>
  );
}
