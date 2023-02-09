import React from "react";
import Navbar from "../components/Navbar";
import axios from 'axios';

const baseUrl = "https://smart-shoes-api.lucifer25x.repl.co/users/search/"

export default function Search(){
    const curLoc = window.location.href;
    const search = curLoc.split('?');
    const name = search[1].split('=')[1];

    const [res, setRes] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseUrl + name).then((response) => {
            setRes(response.data);
        })
    }, []);

    if(!res) return null;

    return (
      <>
        <Navbar />
        <ul className="list-group list-group-flush">
          {
            res.map((user, i) => 
                <li className="list-group-item" style={{display: 'flex', alignItems: 'center'}} key={i}><div className="avatar"></div><span style={{marginLeft: '10px'}}></span>{user}</li>)
          }
        </ul>
      </>
    );
}