import { React, useState } from "react";
import "./Styles/app.css";
// import Header from "./Components/Header";
import Login from "./Components/Login";
import Menu from "./Components/Menu";
import OperationMenu from "./Components/OperationMenu";
import ErrorPage from "./Components/ErrorPage";
import Keyboard from "./Components/Keyboard";
import Screenkeys from "./Components/ScreenKeys";
import OperationRequest from "./Components/OperationRequest";
// state

import { operationList } from "./state";

const App = () => {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  const [data, setData] = useState(operationList);

  let component = undefined;
  switch (window.location.pathname) {
    case "/" || "/login":
      component = <Login />;
      break;
    case "/menu":
      component = <Menu dataSet={data} />;
      break;
    case "/operation":
      component = <OperationMenu dataSet={data} />;
      break;
    case "/operationrequest":
      component = <OperationRequest />;
      break;
    default:
      component = <ErrorPage />;
      break;
  }

  return (
    <div className="App">
      <div className="app-wrapper">
        <Screenkeys />
        <div className="main-menu">{component}</div>
        <Keyboard />
      </div>
    </div>
  );
};

export default App;
