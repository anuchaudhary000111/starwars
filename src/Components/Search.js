import axios from "axios";
import { useState } from "react";
import starsground from "../images/starsground.jpeg";

import "./search.css";

export default function Search({ changeIsLgoin }) {
  const [userSearch, changeUserSearch] = useState([]);

  const doSearch = (e) => {
    axios
      .get("https://swapi.dev/api/planets/?search=" + e.target.value)
      .then((response) => {
        console.log(response);
        changeUserSearch(response.data.results);
      });
  };

  return (
    <div>
      <div className="contain">
        <img
          className="imageclass1"
          src={starsground}
          width="100%"
          height="500px"
        />
        <button
          className="btn btn-primary btnclass1"
          onClick={() => changeIsLgoin(false)}
        >
          LogOut
        </button>
      </div>

      <div className="myInput">
        <h2 className="paragraphs">Search</h2>

        <div className="searchtag">
          {" "}
          <input
            autoComplete="off"
            className="inpuclas"
            type="text"
            placeholder="Search Here"
            name="search"
            onChange={doSearch}
          />
          {userSearch.map((item) => {
            return <p className="mappara">{item.name}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
