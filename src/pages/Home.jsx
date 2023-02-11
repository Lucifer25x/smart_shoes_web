import React from "react";
import Dashboard from "./Dashboard";

export default function Home() {
  if (localStorage.getItem("account")) {
    return <Dashboard></Dashboard>;
  } else {
    window.location = "/login";
  }
}
