import "./login.css";
import scale from "../images/scale.jpeg";
import { useState } from "react";
import axios from "axios";

export default function Login({ changeIsLgoin }) {
  const [userName, changeUserName] = useState("");
  const [userPassword, changeUserPassword] = useState([]);

  const doLogin = () => {
    axios
      .get("https://swapi.dev/api//people/?search=" + userName)
      .then((response) => {
        if (response.data.results.length === 0) {
          alert("incorrect data");
        } else {
          let found = false;
          response.data.results.map((data) => {
            if (data.birth_year === userPassword) {
              found = true;
            }
          });
          if (found) {
            changeIsLgoin(true);
          } else {
            alert("incorrect data");
          }
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="headr">
      <img className="imageclass" width="100%" height="500px" src={scale} />
      <div className="head">
        <p className="textbald">
          Username
          <input
            className="inpuclass"
            value={userName}
            onChange={(e) => changeUserName(e.target.value)}
          />
        </p>
        <p className="textbald">
          Password{" "}
          <input
            className="inpuclass"
            value={userPassword}
            onChange={(e) => changeUserPassword(e.target.value)}
          />
        </p>
      </div>
      <div>
        <button className="btn btn-primary btnclass" onClick={doLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
