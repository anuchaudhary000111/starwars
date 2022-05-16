import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./Components/Login";
import Search from "./Components/Search";
import { useState } from "react";

function App() {
  const [isLogin, changeIsLgoin] = useState(false);

  return (
    <div className="App">
      {isLogin === false ? (
        <Login changeIsLgoin={changeIsLgoin} />
      ) : (
        <Search changeIsLgoin={changeIsLgoin} />
      )}
    </div>
  );
}

export default App;
