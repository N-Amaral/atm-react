import { React, useState, useEffect } from "react";
import "./styles/app.css";
// import Header from "./Components/Header";
import Login from "./components/Login";
import Menu from "./components/Menu";
import OperationMenu from "./components/OperationMenu";
import ErrorPage from "./components/ErrorPage";
import Keyboard from "./components/Keyboard";
import Screenkeys from "./components/ScreenKeys";
import OperationRequest from "./components/OperationRequest";
import OperationConfirmation from "./components/OperationConfirm";

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
    case "/operationconfirmation":
      component = <OperationConfirmation />;
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
