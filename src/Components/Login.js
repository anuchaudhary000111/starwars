import "./login.css";
import star from "../images/star.png";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [userName, changeUserName] = useState("");
  const [userPassword, changeUserPassword] = useState([]);
  const [userCheckBox, changeUserCheckBox] = useState(true);
  const [msg, changeMsg] = useState("");

  const doLogin = () => {
    axios
      .get("https://swapi.dev/api//people/?search=" + userName)
      .then((response) => {

        if (response.data.results.length === 0) {
          changeMsg("incorrect data");
        } else {
          let found = false;
          response.data.results.map((data) => {
            if (data.birth_year === userPassword) {
              found = true;
            }
          });
          if (found) {
            changeMsg("Successfully login");
          } else {
            changeMsg("incorrect data");
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="headr">
      <img src={star} />
      <div className="head">
        <p>
          Username
          <input
            value={userName}
            onChange={(e) => changeUserName(e.target.value)}
          />
        </p>
        <p>
          Password{" "}
          <input
            value={userPassword}
            onChange={(e) => changeUserPassword(e.target.value)}
          />
        </p>
        <p>
          <input
            type="checkBox"
            value={userCheckBox}
            onChange={(e) => changeUserCheckBox(e.target.value)}
          />
        </p>
      </div>
      <div>
        <button className="btn btn-primary" onClick={doLogin}>
          Login
        </button>
        <p>{msg}</p>
      </div>
    </div>
  );
}